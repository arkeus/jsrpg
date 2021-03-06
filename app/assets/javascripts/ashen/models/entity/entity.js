var Entity = function($rootScope) {
    this.root = $rootScope;
    this.name = "No Name";
    this.experience = new Experience();
    this.stats = new Statistics();
    
    this.stat = function(type) {
        return this.stats[type];
    };
    
    this.loadFromLevel = function(level) {
        this.stats.loadFromLevel(level);
    };
    
    this.damage = function(damage) {
        this.stats.hp -= damage;
        if (this.stats.hp <= 0) {
            this.stats.hp = 0;
            //this.die();
        }
    };
    
    this.isDead = function() {
        return this.stats.hp <= 0;
    };
    
    this.restore = function() {
        this.stats.hp = this.stats.hpm;
        this.stats.mp = this.stats.mpm;
    };
    
    this.getColoredName = function() {
        return (typeof this.element === "undefined" ? $rootScope.color(this.name, "") : $rootScope.color(this.name, "element", this.element));
    };
};