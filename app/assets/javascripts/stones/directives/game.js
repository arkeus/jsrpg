app.factory("Game", ["$rootScope", "$timeout", function($rootScope, $timeout) {
    $rootScope.Game = new function() {
        this.play = function(card) {
            console.log("Playing", card);
        };
    };
        
    return $rootScope.Game;
}]);