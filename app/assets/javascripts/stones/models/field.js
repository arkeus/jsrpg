var Field = function() {
    this.hero = null;
    this.monsters = [null, null, new Card({
        name: "bob", description: "is a bob"
    })];
    this.hand = [SWORD, SWORD, FIREBALL, GALE, GALE, WIZARD, WIZARD];
    this.deck = [];
    this.graveyard = [];
};