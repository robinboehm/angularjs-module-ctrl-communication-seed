'use strict';

angular.module('angularjsDE-module-seed')
  .directive('separateAction', function () {
    return {
      restrict: 'E',
      require: '^searchContext',
      link: function (scope, element, attrs, controller) {
        scope.model = controller.model;
        scope.update = controller.performUpdate;
      },
      template: '<div><button ng-click="update()">Update {{ model.version}}</button></div>'
    };
  });