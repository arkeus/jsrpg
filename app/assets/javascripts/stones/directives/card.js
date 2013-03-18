app.directive("card", ["$timeout", "Registry", function($timeout, Registry) {
    return {
        restrict: "E",
        scope: { card: "=source" },
        link: function(scope, element, attrs) {
            // blah
            console.log(scope);
            var card = scope.source;
            if (!card) {
                $(element).hide();
            }
        },
        template: "<div title='poop'>Name: {{card.name}}</div>"
    }
}]);