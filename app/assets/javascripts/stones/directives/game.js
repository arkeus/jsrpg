app.factory("Game", ["$rootScope", "$timeout", function($rootScope, $timeout) {
    $rootScope.Game = new function() {
        this.player = null;
        this.enemy = null;
        
        this.side = PLAYER;
        this.phase = DRAW;
        
        this.preplay = function(card) {
            var target = this.player.targeter.target(card);
            if (target != null) {
                this.play(card, target);
            }
        };
        
        this.play = function(card, target) {
            
        };
    };
        
    return $rootScope.Game;
}]);