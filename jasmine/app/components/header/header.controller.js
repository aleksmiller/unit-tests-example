(function() {
    'use strict';

    angular
        .module('app')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['appHttp'];

    function HeaderController(appHttp) {
        var vm = this;

        vm.nav = [];
        loadNav();

        function loadNav() {
            appHttp.nav().success(function(data) {
                vm.nav = data;
                return vm.nav;
            });
        }

        return vm;
    }
})();