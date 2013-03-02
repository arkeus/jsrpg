var Log = function($rootScope) {
    this.CAPACITY = 100;
    this.MAX_LOAD = 1.1;
    
    this.messages = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    
    this.add = function(message) {
        this.messages.push(message);
        if (this.messages.length > this.CAPACITY * this.MAX_LOAD) {
            this.messages.splice(0, this.messages.length - this.CAPACITY);
        }
        $rootScope.$broadcast("log", message);
    };
    
    this.tick = function() {
        console.log("FUCK");
        this.messages.push("-");
    };
}