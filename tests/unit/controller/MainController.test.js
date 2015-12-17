describe('MainController test', function() {

    beforeEach(angular.mock.module('CoreApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.getResult', function() {
        it('test result is 10', function() {
            var $scope = {};
            var controller = $controller('MainController', { $scope: $scope });
            expect($scope.getResult()).toEqual(11);
        });
    });
});