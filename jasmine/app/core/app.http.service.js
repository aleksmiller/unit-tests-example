(function() {
    angular.module('app')
        .service('appHttp', AppHttp);

    AppHttp.$inject = ['$http'];

    function AppHttp($http) {
        function getNav() {
            $http.get('/api/header.nav.json', function(response) {
               return response;
            });
        }

        return {
            nav: getNav
        };
    }
})();