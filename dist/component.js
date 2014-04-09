'use strict';
angular.module('angularjsDE-module-seed', []);
'use strict';
angular.module('angularjsDE-module-seed').directive('listItems', function () {
  return {
    require: '^searchContext',
    link: function (scope, element, attrs, controller) {
      scope.model = controller.model;
    },
    template: '<ul><li ng-repeat="item in model.data"></li></ul>'
  };
});
'use strict';
angular.module('angularjsDE-module-seed').directive('searchContext', [
  '$http',
  function ($http) {
    return {
      controller: function () {
        var model = {};
        this.performUpdate = function () {
          $http.get('src/data/data.json').then(function (response) {
            this.model.data = response.data;
          });
        };
        this.performUpdate();
      }
    };
  }
]);