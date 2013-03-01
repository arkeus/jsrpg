angular.module("ashen", []).factory("Registry", function() {
    return {
        player : new Player()
    }
});
