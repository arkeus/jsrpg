app.directive("card", ["$timeout", "Game", function($timeout, Game) {
    return {
        restrict: "E",
        scope: { card: '=source' },
        link: function(scope, element, attrs) {
            var card = scope.card;
            
            $(element).click(function() {
                Game.preplay(card);
            });
        },
        template: "<div class='exist{{card.cost}}'>" +
            "<div class='name'>{{card.name}}</div>" +
            "<div class='cost'><cost values='card.cost'></cost></div>" +
        "</div>"
    }
}]);

app.directive("cost", function() {
    return {
        restrict: "E",
        scope: { values: '=values' },
        link: function(scope, element, attrs) {
            for (var key in scope.values) {
                var value = scope.values[key];
                if (value <= 0) {
                    continue;
                }
                $(element).append(key + ": " + value + " ");
            }
        }
    }
});
