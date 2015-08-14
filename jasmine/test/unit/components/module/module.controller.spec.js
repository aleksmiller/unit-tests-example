describe("ModuleController", function() {
    var ctrl, $scope;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();

        ctrl = $controller('ModuleController', {
            $scope: $scope
        });
    }));

    describe("updateClick()", function() {

        it("should update clicked value", function() {
            ctrl.updateClick();
            expect(ctrl.clicked).toBe(1);
        });
    });
});