var app = angular.module("stones", []);

app.run(["$rootScope", function($rootScope) {
    // Temporary card definitions
    WIZARD = new Card({ name: "Wizard", type: Type.HERO, cost: null, effects: [] });
    SWORD = new Card({ name: "Sword", type: Type.ITEM, cost: new Cost({ physical: 1 }), effects: [] });
    FIREBALL = new Card({ name: "Fireball", type: Type.SPELL, cost: new Cost({ fire: 2 }), effects: [] });
    SLIME = new Card({ name: "Slime", type: Type.MONSTER, cost: new Cost({ water: 1, air: 1 }), effects: [] });
    STONE = new Card({ name: "Flame Stone", type: Type.STONE, effects: [new StoneGainEffect({ fire: 3 })] });
}]);