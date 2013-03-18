var app = angular.module("stones", []);

app.run(["$rootScope", function($rootScope) {
    // Temporary card definitions
    WIZARD = new Card({ name: "Wizard", type: "Hero", cost: null, effects: [] });
    SWORD = new Card({ name: "Sword", type: "Item", cost: new Cost({ physical: 1 }), effects: [] });
    FIREBALL = new Card({ name: "Fireball", type: "Spell", cost: new Cost({ fire: 2 }), effects: [] });
    SLIME = new Card({ name: "Slime", type: "Monster", cost: new Cost({ water: 1, air: 1 }), effects: [] });
    STONE = new Card({ name: "Flame Stone", type: "Stone", effect: [new StoneGainEffect({ fire: 3 })] })
}]);