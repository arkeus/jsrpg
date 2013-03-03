var Statistics = function() {
    this.hp = 100;
    this.hpm = 100;
    
    this.mp = 100;
    this.mpm = 100;
    
    this.strength = 10;
    this.defense = 10;
    this.vitality = 10;
    this.agility = 10;
    this.wisdom = 10;
    this.spirit = 10;
    
    this.loadFromLevel = function(level) {
        console.log("loading from level", level);
        this.hp = this.hpm = 10 + level * 2;
        this.mp = this.mpm = 10 + level * 2;
        
        this.strength = level;
        this.defense = level;
        this.vitality = level;
        this.agility = level;
        this.wisdom = level;
        this.spirit = level;
    };
}