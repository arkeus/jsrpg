var ItemDatabase = new function() {
    this.TIERS = [
        "Dwarven", "Scarab", "Golem", "Dryad", "Demon", "Elven", "Titan", "Dragon", "Valkyrie"
    ];
    
    this.ITEMS = [
        ["Dagger", 1, "weapon", "sword"],
        ["Sword", 4, "weapon", "sword"],
        ["Broadsword", 6, "weapon", "sword"],
        ["Bastard Sword", 9, "weapon", "sword"],
        ["Axe", 2, "weapon", "axe"],
        ["Battle Axe", 7, "weapon", "axe"],
        ["Spear", 4, "weapon", "spear"],
        ["Long Spear", 7, "weapon", "spear"],
        ["Staff", 5, "weapon", "staff"],
        ["Battle Staff", 9, "weapon", "staff"],
        ["Boots", 1, "boots", "armor"],
        ["Heavy Boots", 6, "boots", "armor"],
        ["Helmet", 1, "helmet", "armor"],
        ["Heavy Helmet", 6, "helmet", "armor"],
        ["Armor", 1, "chest", "armor"],
        ["Heavy Armor", 6, "chest", "armor"],
        ["Legplates", 1, "pants", "armor"],
        ["Heavy Legplates", 6, "pants", "armor"],
        ["Amulet", 1, "amulet", "armor"],
    ];
    
    this.DATABASE = [];
    
    this.initialize = function() {
        for (var n = 0; n < this.TIERS.length; n++) {
            var tier = this.TIERS[n];
            for (var i = 0; i < this.ITEMS.length; i++) {
                var info = this.ITEMS[i];
                var item = new BaseItem();
                item.name = tier + " " + info[0];
                item.index = i + 20 * n;
                item.level = info[1] + 10 * n;
                item.type = info[2];
                item.subtype = info[3];
                item.tier = tier;
                this.DATABASE.push(item);
            }
        }
    };
    
    this.random = function(level) {
        var type = Math.random() < 0.3 ? "weapon" : null;
        var minLevel = Math.max(1, Math.min(80, level - 20));
        var maxLevel = Math.min(100, level);
        var eligible = [];
        
        var item;
        for (var i = 0; i < this.DATABASE.length; i++) {
            item = this.DATABASE[i];
            if (item.level < minLevel || item.level > maxLevel || (type != null && item.type != type)) {
                continue;
            }
            eligible.push(item);
        }
        if (eligible.length < 1) {
            throw new Exception("FUCK ME");
        }
        
        var inv = new Item(eligible[Utils.random(0, eligible.length - 1)]);
        
        // Choose affixes
        if (Math.random() < 0.7) {
            inv.prefix = AffixDatabase.random(level, "prefix");
        }
        if (Math.random() < 0.7) {
            inv.suffix = AffixDatabase.random(level, "suffix");
        }
        
        return inv;
    };
};
