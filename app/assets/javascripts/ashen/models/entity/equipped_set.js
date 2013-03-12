var EquippedSet = function() {
    this.weapon = null;
    this.helmet = null;
    this.chest = null;
    this.pants = null;
    this.boots = null;
    this.amulet = null;
    
    this.stat = function(type) {
        var value = 0;
        var items = [this.weapon, this.helmet, this.chest, this.pants, this.boots, this.amulet];
        for (var i = 0; i < items.length; i++) {
            if (items[i] == null) {
                continue;
            }
            value += items[i].stat(type) || 0;
        }
        return value;
    };
};
