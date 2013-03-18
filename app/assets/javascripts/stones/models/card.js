var Card = function(data) {
    data = data || {};
    
    this.name = data['name'];
    this.cost = data['cost'] || 0;
    this.effects = data['effects'];
};

// Temporary card definitions

var SWORD = new Card({ name: "Sword", cost: "1", effects: [] });
var WIZARD = new Card({ name: "Wizard", cost: "1", effects: [] });
var FIREBALL = new Card({ name: "Fireball", cost: "1", effects: [] });
var GALE = new Card({ name: "Gale", cost: "1", effects: [] });