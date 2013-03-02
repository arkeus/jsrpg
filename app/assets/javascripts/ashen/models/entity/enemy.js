var Enemy = function($rootScope) {
    angular.extend(this, new Entity($rootScope));
    
    this.element = ["Fire", "Earth", "Water"][Math.floor(Math.random() * 3)];
    
    this.die = function() {
        $rootScope.Registry.log.add("You defeated the " + this.getColoredName());
        $rootScope.Registry.player.gainExperience(this.experience.level);
    };
};