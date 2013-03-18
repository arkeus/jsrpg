var Card = function(data) {
    data = data || {};
    
    this.effects = data['effects'];
    this.name = data['name'];
    this.description = data['description'];
    this.cost = data['cost'] || 0;
};
