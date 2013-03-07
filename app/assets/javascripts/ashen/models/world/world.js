var World = function($rootScope) {
    var PLAYER = 0;
    var ENEMY = 1;
    
    this.enemy = null;
    this.turn = PLAYER;
    this.player = null;
    this.log = null;
    
    this.update = function() {
        this.player = $rootScope.Registry.player;
        this.log = $rootScope.Registry.log;
    
        if (this.enemy == null) {
            this.explore();
        } else {
            this.combat();
        }
    };
    
    this.explore = function() {
        if (this.player.isDead()) {
            this.player.restore();
        }
        
        if (Math.random() < 0.3) {
            this.log.add("You frolic in the flowers");
        } else {
            this.enemy = this.encounter();
            this.log.add("You encounter a " + this.enemy.getColoredName());
        }
    };
    
    this.encounter = function() {
        var enemy = new Enemy($rootScope);
        enemy.name = "Goblin";
        enemy.loadFromLevel(1);
        this.turn = enemy.stat("agility") > $rootScope.Registry.player.stat("agility") ? ENEMY : PLAYER;
        return enemy;
    };
    
    this.combat = function() {
        if (this.turn == PLAYER) {
            this.handlePlayerCombat();
            this.turn = ENEMY;
        } else {
            this.handleEnemyCombat();
            this.turn = PLAYER;
        }
        
        if (this.player.isDead()) {
            this.handleLose();
        } else if (this.enemy.isDead()) {
            this.handleWin();
        }
    };
    
    this.handlePlayerCombat = function() {
        var damage = this.calculateDamage(this.player, this.enemy, 4);
        this.log.add("You attack the " + this.enemy.getColoredName() + " for " + $rootScope.color(damage, "element", "fire") + " damage.");
        this.enemy.damage(damage);
    };
    
    this.handleEnemyCombat = function() {
        var damage = this.calculateDamage(this.enemy, this.player, 4);
        this.log.add("The " + this.enemy.getColoredName() + " attacks you for " + $rootScope.color(damage, "element", "fire") + " damage.");
        this.player.damage(damage);
    };
    
    this.handleWin = function() {
        this.log.add("You defeated the " + this.enemy.getColoredName());
        this.player.gainExperience(this.enemy.experience.level);
        this.player.gainGold(Math.ceil(Math.random() * 10));
        if (Math.random() < 0.5) {
            var obtained = this.player.inventory.add(ItemDatabase.random(this.enemy.experience.level));
            if (obtained) {
                this.log.add("You found a " + $rootScope.color(obtained.name(), "rarity", obtained.rarity()) + "!");
            } else {
                this.log.add("You find something on the corpse but your inventory is full.");
            }
        }
        this.enemy = null;
    };
    
    this.handleLose = function() {
        this.log.add("You died at the hands of the " + this.enemy.getColoredName());
        this.enemy = null;
    };
    
    this.calculateDamage = function(source, target, abilityPower /*TODO: ability*/) {
        var sourcePower = "strength";
        var targetDefense = "defense";
        var damage = abilityPower * (1 + source.stat(sourcePower)) / (1 + target.stat(targetDefense)) * Math.max(0.25, (1 + (source.experience.level - target.experience.level) / 100));
        return Math.ceil(damage);
    };
};
