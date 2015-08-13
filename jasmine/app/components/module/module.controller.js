(function() {
    'use strict';

    angular
        .module('app')
        .controller('ModuleController', ModuleController);

    function ModuleController() {
        var labelText = 'Click me!';
        var clicked = 0;

        function updateClick() {
            this.clicked++;
        }

        angular.extend(this, {
            labelText: labelText,
            clicked: clicked,
            updateClick: updateClick
        });
    }
})();