app.factory("Game", ["$rootScope", "$timeout", function($rootScope, $timeout) {
    $rootScope.Game = new function() {
        this.player = null;
        this.enemy = null;
        
        this.side = PLAYER;
        this.phase = DRAW;
        
        this.preplay = function(card) {
            $rootScope.$apply(function(scope) {
                var targetField = this.side == PLAYER ? scope.Game.player : scope.Game.enemy;
                var target = scope.Game.player.targeter.target(card, targetField);
                console.log("preplay", card, "on", target);
                if (target != null) {
                    scope.Game.play(card, target);
                }
            });
        };
        
        this.play = function(card, target) {
            console.log("playing", card, "on", target);
            for (var i = 0; i < card.effects.length; i++) {
                var effect = card.effects[i];
                console.log("effect in played card", effect, "on", target);
                effect.apply(target);
            }
        };
    };
        
    return $rootScope.Game;
}]);