var GameController = function($scope, Registry) {
    $scope.gainExperience = function(amount) {
        return Registry.player.experience.gain(amount);
    }
};
GameController.$inject = ["$scope", "Registry"];
