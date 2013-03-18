var Effect = function() {
    // What do we apply the effect to? Target of the card? How is target of card decided?
    this.apply = function() { console.log("a"); }; // abstract
};

var StoneGainEffect = function() {
    this.apply = function() {
        
    };
};

var DamageEffect = function() {
    this.apply = function() {
        
    };
};

var BuffEffect = function() {
    this.apply = function() {
        
    };
};
