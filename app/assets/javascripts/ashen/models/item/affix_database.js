var AffixDatabase = new function() {
    this.AFFIXES = [
        ////// PREFIX
        
        //// COMMON
        
        // BASE STATS
        
        ["Potent", "prefix", "common", { "strength": 0.6 }, 1],
        ["Fortified", "prefix", "common", { "defense": 0.6 }, 1],
        ["Vitalized", "prefix", "common", { "vitality": 0.6 }, 1],
        ["Fast", "prefix", "common", { "agility": 0.1 }],
        ["Mystic", "prefix", "common", { "wisdom": 0.6 }, 1],
        ["Spiritual", "prefix", "common", { "spirit": 0.6 }, 1],
        
        // ALT STATS
        
        ["Greedy", "prefix", "common", { "greed": 0.1 }],
        ["Lucky", "prefix", "common", { "luck": 0.1 }],
        ["Vicious", "prefix", "common", { "crit": 0.1 }],
        ["Forceful", "prefix", "common", { "critpower": 0.1 }],
        ["Targeted", "prefix", "common", { "aim": 0.1 }],
        ["Hopeful", "prefix", "common", { "exp": 0.1 }],
        
        // RESISTS / FOCUS
        
        ["Firewall", "prefix", "common", { "resist-fire": 0.3 }, 10],
        ["Waterwall", "prefix", "common", { "resist-water": 0.3 }, 10],
        ["Earthwall", "prefix", "common", { "resist-earth": 0.3 }, 10],
        
        ["Firedrawn", "prefix", "common", { "focus-fire": 0.3 }, 10],
        ["Waterdrawn", "prefix", "common", { "focus-water": 0.3 }, 10],
        ["Earthdrawn", "prefix", "common", { "focus-earth": 0.3 }, 10],
        
        //// RARE
        
        // BASE STATS
        
        ["Rigorous", "prefix", "rare", { "strength": 0.8 }, 2],
        ["Shelled", "prefix", "rare", { "defense": 0.8 }, 2],
        ["Shielded", "prefix", "rare", { "vitality": 0.8 }, 2],
        ["Quick", "prefix", "rare", { "agility": 0.15 }],
        ["Spectral", "prefix", "rare", { "wisdom": 0.8 }, 2],
        ["Seraphic", "prefix", "rare", { "spirit": 0.8 }, 2],
        
        // ALT STATS
        
        ["Golden", "prefix", "rare", { "greed": 0.15 }],
        ["Guiding", "prefix", "rare", { "luck": 0.15 }],
        ["Focused", "prefix", "rare", { "crit": 0.15 }],
        ["Fierce", "prefix", "rare", { "critpower": 0.15 }],
        ["Centered", "prefix", "rare", { "aim": 0.15 }],
        ["Calm", "prefix", "rare", { "exp": 0.15 }],
        
        // RESIST / FOCUS
        
        ["Flameguard", "prefix", "rare", { "resist-fire": 0.5 }, 15],
        ["Tideguard", "prefix", "rare", { "resist-water": 0.5 }, 15],
        ["Stoneguard", "prefix", "rare", { "resist-earth": 0.5 }, 15],
        
        ["Flamebound", "prefix", "rare", { "focus-fire": 0.5 }, 15],
        ["Tidebound", "prefix", "rare", { "focus-water": 0.5 }, 15],
        ["Stonebound", "prefix", "rare", { "focus-earth": 0.5 }, 15],
        
        // DUAL RESIST
        
        ["Volcanoward", "prefix", "rare", { "resist-fire": 0.4, "resist-earth": 0.4 }, 10],
        ["Blizzardward", "prefix", "rare", { "resist-water": 0.4, "resist-earth": 0.4 }, 10],
        ["Steamward", "prefix", "rare", { "resist-fire": 0.4, "resist-water": 0.4 }, 10],
        
        ////// SUFFIX
        
        //// COMMON
        
        // BASE STATS
        
        ["of Strength", "suffix", "common", { "strength": 0.6 }, 1],
        ["of Defense", "suffix", "common", { "defense": 0.6 }, 1],
        ["of Vitality", "suffix", "common", { "vitality": 0.6 }, 1],
        ["of Agility", "suffix", "common", { "agility": 0.1 }],
        ["of Wisdom", "suffix", "common", { "wisdom": 0.6 }, 1],
        ["of Spirit", "suffix", "common", { "spirit": 0.6 }, 1],
        
        // ALT STATS
        
        ["of Greed", "suffix", "common", { "greed": 0.1 }],
        ["of Luck", "suffix", "common", { "luck": 0.1 }],
        ["of Ferocity", "suffix", "common", { "crit": 0.1 }],
        ["of Haste", "suffix", "common", { "critpower": 0.1 }],
        ["of Aim", "suffix", "common", { "aim": 0.1 }],
        ["of Faith", "suffix", "common", { "exp": 0.1 }],
        
        // RESISTS
        ["of Refraction", "suffix", "common", { "resist-fire": 0.1, "resist-earth": 0.1, "resist-water": 0.1 }, 3],
        
        //// RARE
        
        // BASE STATS
        
        ["of War", "suffix", "rare", { "strength": 0.8 }, 2],
        ["of Blocking", "suffix", "rare", { "defense": 0.8 }, 2],
        ["of the Crab", "suffix", "rare", { "vitality": 0.8 }, 2],
        ["of Sound", "suffix", "rare", { "agility": 0.15 }],
        ["of Wizardry", "suffix", "rare", { "wisdom": 0.8 }, 2],
        ["of the Witch", "suffix", "rare", { "spirit": 0.8 }, 2],
        
        // ALT STATS
        
        ["of Silver", "suffix", "rare", { "greed": 0.15 }],
        ["of the Compass", "suffix", "rare", { "luck": 0.15 }],
        ["of Smashing", "suffix", "rare", { "crit": 0.15 }],
        ["of Light", "suffix", "rare", { "critpower": 0.15 }],
        ["of Truth", "suffix", "rare", { "aim": 0.15 }],
        ["of Dreams", "suffix", "rare", { "exp": 0.15 }],
        
        // RESISTS
        ["of Reflection", "suffix", "rare", { "resist-fire": 0.2, "resist-earth": 0.2, "resist-water": 0.2 }, 7],
    ];
    
    this.DATABASE = [];
    
    this.initialize = function() {
        for (var i = 0; i < this.AFFIXES.length; i++) {
            var info = this.AFFIXES[i];
            var affix = new Affix(info[0], info[1], info[2], info[3], info[4] || 0);
            this.DATABASE.push(affix);
        }
    };
    
    this.random = function(level, type) {
        var rarity = Math.random() < 0.25 ? "rare" : "common";
        
        var eligible = [];
        for (var i = 0; i < this.DATABASE.length; i++) {
            var aff = this.DATABASE[i];
            if (aff.type == type && aff.rarity == rarity) {
                eligible.push(aff);
            }
        }
        if (eligible.length < 1) {
            throw new Exception("SHIT");
        }
        
        return eligible[Utils.random(0, eligible.length - 1)];
    };
};