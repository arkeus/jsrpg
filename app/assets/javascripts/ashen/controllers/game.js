var GameController = function($scope, $timeout, Registry) {
    $scope.log = Registry.log;
    
    function update() {
        var experience = Math.floor(Math.random() * 20) + 10;
        Registry.log.add("You gained " + experience + " experience.");
        
        if (Registry.player.experience.gain(experience)) {
            Registry.player.levelUp();
            Registry.log.add("You've reached level " + Registry.player.experience.level + "!");
        }
    }
    
    function scheduleUpdate() {
        update();
        $timeout(function() { scheduleUpdate(); }, 500);
    }
    
    scheduleUpdate();
};
GameController.$inject = ["$scope", "$timeout", "Registry"];
