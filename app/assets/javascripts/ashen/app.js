var app = angular.module("ashen", []);

app.factory("Registry", function() {
    return {
        player : new Player()
    }
});

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
