describe('app.routes', function() {



    describe('home', function() {
        var $rootScope, $state, $injector;
        var state = 'home';

        beforeEach(function() {
            inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {
                $rootScope = _$rootScope_;
                $state = _$state_;
                $injector = _$injector_;

                // We need add the template entry into the templateCache if we ever
                // specify a templateUrl
                $templateCache.put('module.html', '');
            });
        });

        xit('should respond to #/ url', function() {
            expect($state.href(state)).toEqual('#/');
        });
    });

    describe('about', function() {
        var $rootScope, $state, $injector;
        var state = 'about';

        beforeEach(function() {

            module('app');

            inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {
                $rootScope = _$rootScope_;
                $state = _$state_;
                $injector = _$injector_;

                // We need add the template entry into the templateCache if we ever
                // specify a templateUrl
                $templateCache.put('about.html', '');
            });
        });

        it('should respond to #/about url', function() {
            expect($state.href(state, {})).toEqual('#/about');
        });
    });
});