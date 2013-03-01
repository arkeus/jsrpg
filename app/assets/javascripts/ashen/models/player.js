var Player = function() {
    this.name = "No Name";
    this.experience = new Experience();
    this.stats = new Statistics();
    
    this.levelUp = function() {
        this.stats.strength += Math.floor(Math.random() * 3);
        this.stats.defense += Math.floor(Math.random() * 3);
        this.stats.agility += Math.floor(Math.random() * 3);
        this.stats.intellect += Math.floor(Math.random() * 3);
        this.stats.wisdom += Math.floor(Math.random() * 3);
    }
}