app.factory("Registry", ["$rootScope", "$timeout", function($rootScope, $timeout) {
    $rootScope.Registry = {
        str: "this is a string"
    };
        
    return $rootScope.Registry;
}]);