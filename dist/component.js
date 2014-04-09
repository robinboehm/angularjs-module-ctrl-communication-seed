'use strict';
angular.module('angularjsDE-module-seed', []);
'use strict';
angular.module('angularjsDE-module-seed').directive('listItems', function () {
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
'use strict';
angular.module('angularjsDE-module-seed').directive('searchContext', [
  '$http',
  function ($http) {
    return {
      controller: function () {
        var model = this.model = { version: 0 };
        this.performUpdate = function () {
          $http.get('src/data/data.json').then(function (response) {
            model.data = response.data;
            console.log(model.version++);
          });
        };
        this.performUpdate();
      }
    };
  }
]);
'use strict';
angular.module('angularjsDE-module-seed').directive('separateAction', function () {
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