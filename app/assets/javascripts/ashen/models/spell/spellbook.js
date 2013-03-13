var Spellbook = function() {
    this.equippedSize = 1;
    
    this.spells = (function() {
        var spells = [];
        for (var i = 0; i < SpellDatabase.DATABASE.length; i++) {
            spells.push(new Experience());
        }
        return spells;
    })();
    
    this.equipped = [1, 2];
    
    this.cast = function() {
        for (var i = 0; i < this.equipped.length; i++) {
            var index = this.equipped[i];
            if (!index) {
                continue;
            }
            var spell = SpellDatabase.DATABASE[index];
            var spellData = this.spells[index];
            if (Math.random() < 0.5) {
                console.log("Cast", spell.name);
            }
        }
    };
};
