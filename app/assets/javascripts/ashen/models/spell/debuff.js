var Debuff = function(name, chance, duration, effect) {
    this.name = name;
    this.chance = chance;
    this.duration = duration;
    this.effect = effect || 0;
};