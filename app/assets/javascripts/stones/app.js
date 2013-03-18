var app = angular.module("stones", []);

app.run(["$rootScope", function($rootScope) {
    // Temporary card definitions
    WIZARD = new Card({ name: "Wizard", cost: null, effects: [] });
    SWORD = new Card({ name: "Sword", cost: new Cost({ physical: 1 }), effects: [] });
    FIREBALL = new Card({ name: "Fireball", cost: new Cost({ fire: 2 }), effects: [] });
    SLIME = new Card({ name: "Slime", cost: new Cost({ water: 1, air: 1 }), effects: [] });
}]);