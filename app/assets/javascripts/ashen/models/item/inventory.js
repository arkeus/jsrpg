var Inventory = function() {
    this.SIZE = 49;
    
    this.items = [];
    
    this.remove = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    
    this.add = function(item) {
        if (this.items.length >= this.SIZE) {
            return null;
        }
        this.items.push(item);
        return item;
    };
    
    for (var i = 0; i < 10; i++) {
        this.add(ItemDatabase.random(20));
    }
};
