var EnemyController = function($scope, Registry) {
    $scope.enemy = null;
    $scope.$watch("Registry.world.enemy", function(newValue, oldValue, scope) {
        if (newValue && (newValue !== oldValue || $scope.enemy === null)) {
            $scope.enemy = newValue;
        }
    });
};
EnemyController.$inject = ["$scope", "Registry"];
