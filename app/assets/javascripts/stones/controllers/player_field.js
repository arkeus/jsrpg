var PlayerFieldController = function($scope, Registry) {
    $scope.field = new Field;
    
    $("body").click(function() {
        $scope.field.hero = new Card({ name: "Wizard", cost: 1 });
        $scope.$digest();
    });
};
PlayerFieldController.$inject = ["$scope", "Registry"];