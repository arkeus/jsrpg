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
            "<div class='cost'><cost values='card.cost'></cost></div>" +
        "</div>"
    }
}]);

app.directive("cost", function() {
    return {
        restrict: "E",
        scope: { values: '=values' },
        link: function(scope, element, attrs) {
            console.log(scope.values);
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
