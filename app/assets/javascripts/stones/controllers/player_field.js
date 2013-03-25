var PlayerFieldController = function($scope, Game) {
    $scope.field = Game.player = new Field;
    
    $("body").click(function() {
        $scope.field.hero = new Card({ name: "Super Wizard", cost: 1 });
        $scope.$digest();
    });
    
    $scope.$on("refresh", function() {
        $scope.$digest();
        console.log("DIGEST");
    });
};
PlayerFieldController.$inject = ["$scope", "Game"];