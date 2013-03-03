var Item = function(baseItem) {
    var self = this;
    
    this.base = baseItem;
    this.mods = [];
    
    for (var i = 0; i < Math.floor(Math.random() * 5); i++) {
        var affix = AffixDatabase.random();
        this.mods.push(affix);
    }
    
    this.stat = function(type) {
        var value = 0;
        for (var i = 0; i < this.mods.length; i++) {
            value += this.mods[i].stat(type, this.base.level);
        }
        return Math.ceil(value);
    };
    
    this.rarity = function() {
        switch (self.mods.length) {
            case 0: return "common"; break;
            case 1: return "uncommon"; break;
            case 2: return "rare"; break;
            case 3: return "mythic"; break;
            case 4: return "legendary"; break;
            default: return "unknown"; break;
        }
    }
};
