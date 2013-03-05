var Enemy = function($rootScope) {
    angular.extend(this, new Entity($rootScope));
    
    this.element = ["Fire", "Earth", "Water"][Math.floor(Math.random() * 3)];
};