var PlayerFieldController = function($scope, Game) {
    $scope.field = Game.player = new Field;
    
    $("body").click(function() {
        $scope.field.hero = new Card({ name: "Super Wizard", cost: 1 });
        $scope.$digest();
    });
};
PlayerFieldController.$inject = ["$scope", "Game"];