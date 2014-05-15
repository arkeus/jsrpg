var Log = function($rootScope, $timeout) {
    this.CAPACITY = 100;
    
    this.messages = [];
    var self = this;
    
    this.add = function(message) {
        this.messages.push(message);
        $rootScope.$broadcast("log", message);
        // Hack to clear after we've scrolled to the bottom to keep smooth animation
        $timeout(this.splice, GAME_TICK * 0.9);
    };
    
    this.splice = function() {
        if (self.messages.length > self.CAPACITY) {
            self.messages.splice(0, self.messages.length - self.CAPACITY);
        }
    };
    
    this.tick = function() {
        this.messages.push("-");
    };
};