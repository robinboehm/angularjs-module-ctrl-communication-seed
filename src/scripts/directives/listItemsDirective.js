'use strict';

angular.module('angularjsDE-module-seed')
  .directive('listItems', function () {
    return {
      restrict: 'E',
      require: '^searchContext',
      link: function (scope, element, attrs, controller) {
        scope.model = controller.model;
        scope.update = controller.performUpdate;
      },
      template: '<div><button ng-click="update()">Update {{ model.version}}</button><ul><li ng-repeat="item in model.data">{{item}}</li></ul></div>'
    };
  });