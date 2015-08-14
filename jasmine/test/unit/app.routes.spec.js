describe('app.routes', function() {
    var $state;

    beforeEach(module('app'));

    beforeEach(function() {
        inject(function(_$state_) {
            $state = _$state_;
        });
    });

    describe('home', function() {
        var state = 'home';

        it('should respond to #/ url', function() {
            expect($state.href(state)).toEqual('#/');
        });
    });

    describe('about', function() {
        var state = 'about';

        it('should respond to #/about url', function() {
            expect($state.href(state)).toEqual('#/about');
        });
    });
});