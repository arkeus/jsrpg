angular.module("ashen", [], function($provide) {
   $provide.factory("Registry", function() {
       return {
           player: new Player()
       }
   }); 
});
