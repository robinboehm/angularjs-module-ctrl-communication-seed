(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/CssStyledDirective.html',
    '<div class="angularjsde-logo"></div>');
}]);
})();
