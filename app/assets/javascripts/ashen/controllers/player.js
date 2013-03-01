var PlayerController = function($scope, Registry) {
    $scope.player = Registry.player;
};
PlayerController.$inject = ["$scope", "Registry"];
