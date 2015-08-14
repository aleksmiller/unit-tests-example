describe("HeaderController", function() {
    var ctrl, $scope;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();

        ctrl = $controller('HeaderController', {
            $scope: $scope
        });
    }));

    it("should be defined", function() {
        expect(ctrl).toBeDefined();
    });
});