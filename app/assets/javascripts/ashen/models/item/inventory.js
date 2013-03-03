var Inventory = function() {
    this.items = [];
    
    for (var i = 0; i < 49; i++) {
        this.items.push(ItemDatabase.random());
    }
};
