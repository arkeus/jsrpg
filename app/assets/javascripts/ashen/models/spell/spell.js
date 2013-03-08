var Spell = function(data) {
    this.name = data['name'];
    this.description = data['description'];
    this.element = data['element'];
    this.mp = data['mp'] || 0;
    this.power = data['power'] || function(level) { return 0; };
    this.debuff = data['debuff'];
};
