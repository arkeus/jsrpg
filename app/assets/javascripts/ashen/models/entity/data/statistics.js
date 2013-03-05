var Statistics = function() {
    this.hp = 50;
    this.hpm = 50;
    
    this.mp = 10;
    this.mpm = 10;
    
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
        
        this.strength = 10 + level;
        this.defense = 10 + level;
        this.vitality = 10 + level;
        this.agility = 10 + level;
        this.wisdom = 10 + level;
        this.spirit = 10 + level;
    };
}

var ALL_STATISTICS = {
    "strength": "Strength",
    "defense": "Defense",
    "vitality": "Vitality",
    "agility": "Agility",
    "wisdom": "Wisdom",
    "spirit": "Spirit",
    "crit": "Crit Chance",
    "critpower": "Crit Power",
    "aim": "Aim",
    "exp": "Exp Gain",
    "luck": "Luck",
    "greed": "Greed",
    "resist-fire": "Fire Resistance",
    "resist-water": "Water Resistance",
    "resist-earth": "Earth Resistance",
    "focus-fire": "Fire Focus",
    "focus-water": "Water Focus",
    "focus-earth": "Earth Focus",
};
