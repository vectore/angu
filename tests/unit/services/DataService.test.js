
describe('DataService service', function() {

    beforeEach(angular.mock.module('CoreApp'));

    it('check version', inject(['DataService',
        function(DataService){
            expect(DataService.getVersion()).toEqual('11');
        }])
    );

});