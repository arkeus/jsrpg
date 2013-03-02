var Statistics = function() {
    this.hp = 100;
    this.hpm = 100;
    
    this.mp = 100;
    this.mpm = 100;
    
    this.strength = 5;
    this.defense = 4;
    this.vitality = 6;
    this.agility = 3;
    this.intellect = 2;
    this.wisdom = 1;
    this.spirit = 7;
    
    this.loadFromLevel = function(level) {
        console.log("loading from level", level);
        this.hp = this.hpm = 10 + level * 2;
        this.mp = this.mpm = 10 + level * 2;
        
        this.strength = level;
        this.defense = level;
        this.vitality = level;
        this.intellect = level;
        this.intellect = level;
        this.wisdom = level;
        this.spirit = level;
    };
}