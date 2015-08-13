(function() {
    'use strict';

    angular
        .module('app')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['appHttp'];

    function HeaderController(appHttp) {
        var vm = this;

        //appHttp.nav().then(function(data) {
        //    vm.nav = data;
        //});

        vm.nav = [
            { "sref": "home", "title": "Home" },
            { "sref": "about", "title": "About" }
        ];

        return vm;
    }
})();