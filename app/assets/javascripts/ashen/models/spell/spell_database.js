var SpellDatabase = new function() {
    this.DATABASE = [
        // PHYSICAL
        new Spell({
            name: "Melee",
            description: "Attack the enemy with your equipped weapon",
            element: Element.PHYSICAL,
            mp: 0
        }),
        // FIRE
        // tier 1
        new Spell({
            name: "Flare",
            description: "Shoots a flare at your opponent.",
            element: Element.FIRE,
            mp: 5,
            power: function(level) { return 5 + level * 2; }
        }),
        // tier 2
        new Spell({
            name: "Meteor",
            description: "Summons a meteor from the sky, crushing your enemy and burning them over time.",
            element: Element.FIRE,
            mp: 14,
            power: function(level) { return 12 + level * 3; },
            debuff: new Debuff("Meteor Burn", 100, 5, function() { return level * 4; })
        }),
        // WATER
        // tier 1
        new Spell({
            name: "Douse",
            description: "Douses your opponent in water.",
            element: Element.WATER,
            mp: 3,
            power: function(level) { return 3 + level * 1.5; }
        }),
        // tier 2
        new Spell({
            name: "Blizzard",
            description: "Summons a fierce storm of ice, dealing damage and possibly freezing them for 1 turn.",
            element: Element.WATER,
            mp: 9,
            power: function(level) { return 9 + level * 2.5; },
            debuff: new Debuff("Frozen", function(level) { return 5 + level * 2; }, 1)
        }),
        // EARTH
        // tier 1
        new Spell({
            name: "Spire",
            description: "Summons a spire of rock beneath your opponent.",
            element: Element.EARTH,
            mp: 7,
            power: function(level) { return 7 + level * 2.5; }
        }),
        // tier 2
        new Spell({
            name: "Quake",
            description: "Shakes the earth beneath your opponent, damaging them, and causing them to lose their balance and miss more.",
            element: Element.EARTH,
            mp: 19,
            power: function(level) { return 15 + level * 3; },
            debuff: new Debuff("Unbalanced", 100, 2, function(level) { return 10 + level * 2; })
        }),
    ];
    
    this.NAME_MAP = null;
    
    this.fromIndex = function(index) {
        return this.DATABASE[index];
    };
    
    this.fromName = function(name) {
        if (this.NAME_MAP == null) {
            this.generateNameMap();
        }
        if (this.NAME_MAP[name] == null) {
            throw new Exception("Invalid spell name: " + name);
        }
        return this.NAME_MAP[name];
    };
    
    this.generateNameMap = function() {
        this.NAME_MAP = [];
        for (var i = 0; i < this.DATABASE.length; i++) {
            var spell = this.DATABASE[i];
            this.NAME_MAP[spell.name] = spell;
        }
    };
};
