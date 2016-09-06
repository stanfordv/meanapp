'use strict';

describe('Controller: NodemapCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var NodemapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NodemapCtrl = $controller('NodemapCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NodemapCtrl.awesomeThings.length).toBe(3);
  });
});
