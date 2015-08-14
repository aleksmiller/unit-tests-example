(function() {
    angular.module('app')
        .service('appHttp', AppHttp);

    AppHttp.$inject = ['$http'];

    function AppHttp($http) {
        function getNav() {
            return $http.get('/api/header.nav.json');
        }

        return {
            nav: getNav
        };
    }
})();