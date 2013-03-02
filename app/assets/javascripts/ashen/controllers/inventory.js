var InventoryController = function($scope, Registry) {
    $scope.player = Registry.player;
};
InventoryController.$inject = ["$scope", "Registry"];
