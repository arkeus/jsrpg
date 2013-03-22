var Card = function(data) {
    data = data || {};
    
    this.type = data['type'];
    this.name = data['name'];
    this.cost = data['cost'] || 0;
    this.hp = 20;
    this.power = 5;
    this.armor = 1;
    this.effects = data['effects'];
};