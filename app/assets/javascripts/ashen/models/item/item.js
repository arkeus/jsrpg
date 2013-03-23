var Item = function(baseItem) {
    var self = this;
    
    this.base = baseItem;
    this.upgradeLevel = 0;
    this.prefix = null;
    this.suffix = null;
    
    this.stat = function(type) {
        var value = 0;
        value += this.prefix ? this.prefix.stat(type, this.base.level) : 0;
        value += this.suffix ? this.suffix.stat(type, this.base.level) : 0;
        return Math.ceil(value);
    };
    
    this.name = function() {
        return (this.prefix ? this.prefix.name + " " : "") + this.base.name + (this.suffix ? " " + this.suffix.name : "");
    };
    
    this.rarity = function() {
        var rarityScore = 0;
        rarityScore += self.prefix ? (self.prefix.rarity == "rare" ? 2 : 1) : 0;
        rarityScore += self.suffix ? (self.suffix.rarity == "rare" ? 2 : 1) : 0;
        switch (rarityScore) {
            case 0: return "common"; break;
            case 1: return "uncommon"; break;
            case 2: return "rare"; break;
            case 3: return "mythic"; break;
            case 4: return "legendary"; break;
            default: return "unknown"; break;
        }
    };
    
    this.effect = function() {
        return this.base.type == "weapon" ? this.calculatePower(this.base.level, this.upgradeLevel) : this.calculateArmor(this.base.level, this.upgradeLevel);
    };
    
    this.calculatePower = function(level, upgradeLevel) {
        var effect = 5 + level * 1.8;
        var upgrade = upgradeLevel || 0;
        return Math.ceil(effect * (1 + upgrade / 30) + upgrade * 2);
    };
    
    this.calculateArmor = function(level, upgradeLevel) {
        var effect = 1 + level * 1.6;
        var upgrade = upgradeLevel || 0;
        return Math.ceil(effect * (1 + upgrade / 10) + upgrade * 2);
    };
    
    this.price = function() {
        return 54;
    };
};
