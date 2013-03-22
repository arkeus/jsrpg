var EnemyFieldController = function($scope, Game) {
    $scope.field = Game.enemy = new Field;
};
EnemyFieldController.$inject = ["$scope", "Game"];