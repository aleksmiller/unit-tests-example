describe("ModuleController", function() {
    var ctrl, foo, $scope;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller) {
        foo = {
            fn: function() {}
        };

        spyOn(foo, 'fn').and.returnValue("Foo");

        $scope = $rootScope.$new();

        ctrl = $controller('ModuleController', {$scope: $scope , foo: foo });
    }));

    describe("updateClick()", function() {

        it("should update clicked value", function() {
            // TODO: ModuleController.updateClick()
            expect(true).toBe(true);
        });
    });
});