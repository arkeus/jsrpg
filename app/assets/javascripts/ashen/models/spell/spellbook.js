var Spellbook = function() {
    this.equippedSize = 1;
    
    this.spells = [];
    this.equipped = [];
    
    this.cast = function() {
        for (var i = 0; i < this.equipped.length; i++) {
            var spell = this.equipped[i];
        }
    };
};
