/**
 * Created by stefvandenberg on 09/03/15.
 */

//Interesting things to test the user controlle



describe("userService Unit Tests", function() {


    describe('perscriptioController', function(){
        beforeEach(function() {
            // load the module.
            module('perscriptio');

            // inject your service for testing.
            // The _underscores_ are a convenience thing
            // so you can have your variable name be the
            // same as your injected service.
            inject(function(_UserService_) {
                UserService = _UserService_;
            });
        });

        it('should have sent a GET request to user api', inject(function(UserService) {
            var result = UserService.query();
            expect(result).toBe([{"id":"1","name":"Stef van den Berg","email":"stef@dexperts.nl","groups":null,"created_at":"2015-03-09 21:03:08","updated_at":"2015-03-09 21:03:08"}]);
        }));

    });

});
