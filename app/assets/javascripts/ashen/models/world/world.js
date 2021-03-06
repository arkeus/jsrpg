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
        this.attack(this.player, this.enemy, SpellDatabase.MELEE);
        this.playerCast();
    };
    
    this.handleEnemyCombat = function() {
        this.attack(this.enemy, this.player, SpellDatabase.MELEE);
    };
    
    this.handleWin = function() {
        this.log.add("You defeated the " + this.enemy.getColoredName());
        this.player.gainExperience(this.enemy.experience.level);
        this.player.gainGold(Math.ceil(Math.random() * 10));
        if (Math.random() < 0.5) {
            var obtained = this.player.inventory.add(ItemDatabase.random(this.enemy.experience.level));
            if (obtained) {
                this.log.add("You found a <strong>" + $rootScope.color(obtained.name(), "rarity", obtained.rarity()) + "</strong>!");
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
    
    this.attack = function(source, target, spell, level) {
        level = level || 1;
        var sourcePower = "strength";
        var targetDefense = "defense";
        var abilityPower = spell == SpellDatabase.MELEE ? 4 : spell.power(source.experience.level);
        var damage = Math.ceil(abilityPower * (1 + source.stat(sourcePower)) / (1 + target.stat(targetDefense)) * Math.max(0.25, (1 + (source.experience.level - target.experience.level) / 100)));
        target.damage(damage);
        
        var damageSource = spell == SpellDatabase.MELEE ? "your weapon" : $rootScope.color(spell.name, "element", spell.element);
        var sourceName = source instanceof Player ? "You attack" : "The " + source.getColoredName() + " attacks";
        var targetName = target instanceof Player ? "you" : "the " + target.getColoredName();
        
        this.log.add(sourceName + " " + targetName + " with " + damageSource + " for " + $rootScope.color(damage, "element", "fire") + " damage.");
    };
    
    this.playerCast = function() {
        var equipped = this.player.spellbook.equipped;
        for (var i = 0; i < equipped.length; i++) {
            var index = equipped[i];
            if (!index) {
                continue;
            }
            var spell = SpellDatabase.DATABASE[index];
            var spellData = this.player.spellbook.spells[index];
            if (Math.random() < this.player.stat("castChance") && this.player.stats.mp >= spell.mp) {
                this.attack(this.player, this.enemy, spell, spellData.level);
                this.player.stats.mp -= spell.mp;
                if (spellData.gain(SPELL_EXP_PER_CAST)) {
                    this.log.add("Your " + spell.name + " spell has reached level " + spellData.level + "!");
                }
            }
        }
    };
};
