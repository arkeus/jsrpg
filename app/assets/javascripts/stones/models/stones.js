var Stones = function() {
    this.fire = 1;
    this.water = 0;
    this.earth = 0;
    this.air = 0;
    
    this.gain = function(amounts) {
        for (var element in amounts) {
            console.log("Gaining " + amounts[element] + " " + element + " stones");
            console.log("before", this.fire);
            this[element] += amounts[element];
            console.log("after", this.fire);
        }
    };
};
