var Player = function($rootScope) {
    angular.extend(this, new Entity($rootScope));
    
    this.gold = 0;
    
    this.levelUp = function() {
        this.stats.strength += Math.floor(Math.random() * 3);
        this.stats.defense += Math.floor(Math.random() * 3);
        this.stats.agility += Math.floor(Math.random() * 3);
        this.stats.intellect += Math.floor(Math.random() * 3);
        this.stats.wisdom += Math.floor(Math.random() * 3);
    }
    
    this.gainExperience = function(level) {
        var experience = level * 70;
        $rootScope.Registry.log.add("You gained " + $rootScope.color(experience, "experience") + " experience.");
        if (this.experience.gain(experience)) {
            this.levelUp();
            $rootScope.Registry.log.add("You've reached level " + $rootScope.color(this.experience.level) + "!");
        }
    };
    
    this.gainGold = function(amount) {
        this.gold += amount;
        $rootScope.Registry.log.add("You found " + $rootScope.color(amount, "gold") + " gold.");
    };
}