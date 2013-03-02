var World = function($rootScope) {
    this.enemy = null;
    
    this.update = function() {
        if (this.enemy == null) {
            this.explore();
            return;
        }
        this.combat();
    };
    
    this.explore = function() {
        if (Math.random() < 0.3) {
            $rootScope.Registry.log.add("You frolic in the flowers");
        } else {
            this.enemy = this.encounter();
            $rootScope.Registry.log.add("You encounter a " + this.enemy.getColoredName());
        }
    };
    
    this.encounter = function() {
        var enemy = new Enemy($rootScope);
        enemy.name = "Goblin";
        enemy.loadFromLevel(1);
        return enemy;
    };
    
    this.combat = function() {
        var damage = Math.ceil(Math.random() * 3 + 2);
        $rootScope.Registry.log.add("You attack the " + this.enemy.getColoredName() + " for " + $rootScope.color(damage, "element", "fire") + " damage.");
        this.enemy.damage(damage);
        if (this.enemy.isDead()) {
            this.enemy = null;
        }
    };
};
