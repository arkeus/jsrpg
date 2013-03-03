var Item = function(baseItem) {
    var self = this;
    
    this.base = baseItem;
    this.prefix = null;
    this.suffix = null;
    
    this.stat = function(type) {
        var value = 0;
        value += this.prefix ? this.prefix.stat(type, this.base.level) : 0;
        value += this.prefix ? this.suffix.stat(type, this.base.level) : 0;
        return Math.ceil(value);
    };
    
    this.name = function() {
        return (this.prefix ? this.prefix.name + " " : "") + this.base.name + (this.suffix ? this.suffix.name + " " : "");
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
};
