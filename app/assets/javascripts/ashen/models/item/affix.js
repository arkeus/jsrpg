var Affix = function(name, type, rarity, attributes, base) {
    this.name = name;
    this.type = type;
    this.rarity = rarity;
    this.attributes = attributes;
    this.base = base;
    
    this.stat = function(type, level) {
        return (this.attributes[type] || 0) * level;
    }
};
