var Card = function(data) {
    data = data || {};
    
    this.name = data['name'];
    this.cost = data['cost'] || 0;
    this.hp = 20;
    this.power = 5;
    this.armor = 1;
    this.effects = data['effects'];
};

// Temporary card definitions

var WIZARD = new Card({ name: "Wizard", cost: "1", effects: [] });
var SWORD = new Card({ name: "Sword", cost: "1", effects: [] });
var FIREBALL = new Card({ name: "Fireball", cost: "1", effects: [] });
var SLIME = new Card({ name: "Slime", cost: "1", effects: [] });