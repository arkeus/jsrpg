var Inventory = function() {
    this.items = [];
    
    this.remove = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    
    this.add = function(item) {
        this.items.push(item);
    };
    
    for (var i = 0; i < 49; i++) {
        this.add(ItemDatabase.random(20));
    }
};
