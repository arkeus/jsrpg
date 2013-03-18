app.directive("card", ["$timeout", "Registry", function($timeout, Registry) {
    return {
        restrict: "E",
        scope: { card: '=source' },
        link: function(scope, element, attrs) {
            var card = scope.card;
            /*if (!card) {
                $(element).css("opacity", "0.3");
            }*/
        },
        template: "<div class='exist{{card.cost}}'>" +
            "<div class='name'>{{card.name}}</div>" +
            "<div class='cost'>{{card.cost}}</div>" +
        "</div>"
    }
}]);