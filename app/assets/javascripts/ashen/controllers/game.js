function GameController($scope, Registry) {
    $scope.gainExperience = function(amount) {
        return Registry.player.experience.gain(amount);
    }
}
