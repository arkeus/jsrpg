var Effect = function() {
    // What do we apply the effect to? Target of the card? How is target of card decided?
    this.apply = function(field, target) { console.log("a"); }; // abstract
};

var StoneGainEffect = function(data) {
    this.stones = data;
    
    this.apply = function(field, target) {
        console.log("gain stones", this.stones);
    };
};

var DamageEffect = function() {
    this.apply = function(field, target) {
        
    };
};

var BuffEffect = function() {
    this.apply = function(field, target) {
        
    };
};
