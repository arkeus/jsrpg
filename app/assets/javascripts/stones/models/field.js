var Field = function() {
    this.hero = null;
    this.monsters = [null, null, new Card({
        name: "bob", description: "is a bob"
    })];
    this.deck = [];
    this.graveyard = [];
};