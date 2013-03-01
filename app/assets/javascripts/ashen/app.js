var app = angular.module("ashen", []);

app.factory("Registry", ["$rootScope", function($rootScope) {
    return {
        player : new Player(),
        log : new Log($rootScope)
    }
}]);

app.directive("log", ["$timeout", function($timeout) {
    return {
        restrict: "E",
        link: function(scope, element, attrs) {
            scope.$on("log", function(message) {
                var scrolledToBottom = $(element).scrollTop() == $(element)[0].scrollHeight - $(element).outerHeight();
                if (scrolledToBottom) {
                    // Set a timeout, because otherwise it scrolls to tbe bottom before the page
                    // adds the new message and reflows.
                    $timeout(function() {
                        $(element).scrollTop($(element)[0].scrollHeight);
                    }, 0);
                }
            })
        }
    }
}]);

app.directive("bar", function() {
    return {
        restrict: "E",
        link: function(scope, element, attrs) {
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
                $(element).find(".fill").css("width", (current / max * 100) + "%");
            });
        }
    }
});
