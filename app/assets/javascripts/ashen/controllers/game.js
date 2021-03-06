var GameController = function($scope, $timeout, Registry) {
    $scope.log = Registry.log;
    
    function update() {
        Registry.log.tick();
        
        /*
        var experience = Math.floor(Math.random() * 20) + 10;
        Registry.log.add("You gained " + experience + " experience.");
        if (Registry.player.experience.gain(experience)) {
            Registry.player.levelUp();
            Registry.log.add("You've reached level " + Registry.player.experience.level + "!");
        }
        */
        
        Registry.world.update(Registry);
    }
    
    function scheduleUpdate() {
        update();
        $timeout(function() { scheduleUpdate(); }, GAME_TICK);
    }
    
    scheduleUpdate();
};
GameController.$inject = ["$scope", "$timeout", "Registry"];
