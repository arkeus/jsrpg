var app = angular.module("ashen", []);

app.run(["$rootScope", function($rootScope) {
    $rootScope.color = function(value, type, subtype) {
        var colorClass = angular.lowercase(type + (typeof subtype === "undefined" ? "" : " " + subtype));
        return "<em class=\"" + colorClass + "\">" + value + "</em>";
    };
}]);

app.factory("Registry", ["$rootScope", "$timeout", function($rootScope, $timeout) {
    $rootScope.Registry = {
        player : new Player($rootScope),
        world : new World($rootScope),
        log : new Log($rootScope, $timeout)
    };
        
    return $rootScope.Registry;
}]);

app.directive("log", ["$timeout", function($timeout) {
    return {
        restrict: "E",
        link: function(scope, element, attrs) {
            var scrollToBottom = function() {
                $(element).stop(true, false).animate({ scrollTop: $(element)[0].scrollHeight - $(element).outerHeight() }, { duration: GAME_TICK * 0.75, easing: "linear" });
            };
            
            scope.$on("log", function(message) {
                var scrolledToBottom = $(element).scrollTop() == $(element)[0].scrollHeight - $(element).outerHeight();
                if (scrolledToBottom) {
                    // Set a timeout, because otherwise it scrolls to tbe bottom before the page
                    // adds the new message and reflows.
                    $timeout(function() {
                        scrollToBottom();
                    }, 0);
                }
                
            });
            
            $(window).focus(function() {
                $(element).stop(true, false).scrollTop($(element)[0].scrollHeight - $(element).outerHeight());
            });
        }
    }
}]);

app.directive("bar", function() {
    return {
        restrict: "E",
        link: function(scope, element, attrs) {
            // Probably a better way to fuck with the DOM, with a template or some shit
            $(element).addClass("bar-container clear").addClass(attrs.type).append(
                $("<div></div>").addClass("title").addClass(attrs.type).text(attrs.type.toUpperCase())
            ).append(
                $("<div></div>").addClass("bar").addClass(attrs.type).append(
                    $("<div></div>").addClass("fill").addClass(attrs.type)
                )
            );
            
            scope.$watch(attrs.current, function() {
                var current = scope.$eval(attrs.current);
                var max = scope.$eval(attrs.max);
                $(element).find(".fill").stop(true, false).animate({ "width": (current / max * 100) + "%" }, GAME_TICK * 0.75);
            });
        }
    }
});