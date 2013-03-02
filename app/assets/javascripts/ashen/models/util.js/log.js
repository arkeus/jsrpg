var Log = function($rootScope) {
    this.CAPACITY = 100;
    
    this.messages = [];
    
    this.add = function(message) {
        this.messages.push(message);
        if (this.messages.length > this.CAPACITY) {
            this.messages.splice(0, this.messages.length - this.CAPACITY);
        }
        $rootScope.$broadcast("log", message);
    };
    
    this.tick = function() {
        this.messages.push("-");
    };
}