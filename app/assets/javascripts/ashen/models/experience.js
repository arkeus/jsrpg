var Experience = function(experienceFactor) {
    this.experienceFactor = experienceFactor || 1.1;
    
    this.level = 1;
    this.xp = 0;
    this.xpm = 100;
    
    this.gain = function(amount) {
        var gainedLevel = false;
        this.xp += amount;
        while (this.xp >= this.xpm) {
            this.xp -= this.xpm;
            this.level++;
            this.xpm = Math.floor(this.xpm *this.experienceFactor);
            gainedLevel = true;
        }
        return gainedLevel;
    }
}
