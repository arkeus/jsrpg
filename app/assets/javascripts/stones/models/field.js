var Field = function() {
    this.stones = new Stones();
    this.hero = WIZARD;
    this.monsters = [null, null, null];
    this.hand = [SWORD, SWORD, FIREBALL, FIREBALL, FIREBALL, SLIME, SLIME];
    this.deck = [SWORD, SWORD, SWORD, SWORD, SWORD, SWORD, SWORD, SWORD, SWORD, SWORD, SWORD];
    this.graveyard = [];
};