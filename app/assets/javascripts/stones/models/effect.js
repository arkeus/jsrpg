var Effect = function() {
    // What do we apply the effect to? Target of the card? How is target of card decided?
    this.apply = function(target) { console.log("a"); }; // abstract
};

var StoneGainEffect = function(data) {
    this.stones = data;
    
    this.apply = function(target) {
        console.log("gain stones", this.stones, "target", target);
        target.stones.gain(this.stones);
    };
};

var DamageEffect = function() {
    this.apply = function(target) {
        
    };
};

var BuffEffect = function() {
    this.apply = function(target) {
        
    };
};
