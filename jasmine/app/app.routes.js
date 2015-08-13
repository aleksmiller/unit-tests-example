(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/components/module/module.html',
                controller: 'ModuleController',
                controllerAs: 'mc'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/components/about/about.html'
            });
    }
})();