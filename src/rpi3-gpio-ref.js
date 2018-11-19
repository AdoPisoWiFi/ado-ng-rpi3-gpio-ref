angular
  .module('ado.ng-rpi3-gpio-ref', [
    'ui.bootstrap',
    'ado.rpi3-gpio-ref.tpls',
    'ado.save-config-btn'
  ])
  .directive('adoRpi3GpioRef', [
    '$uibModal',
    'adoConfigService',
    'adoRpi3GpioImg',
    function ($uibModal, adoConfigService, adoRpi3GpioImg) {
      return {
        restrict: 'AE',
        link: function ($scope, elem) {

          adoConfigService.get()
            .then(function (res) {
              var config = res.data;
              $scope.config = config;
            });

          $scope.rpi3GpioRefImg = adoRpi3GpioImg;

          elem.click(function () {
            $scope.$apply(function () {
              $uibModal.open({
                templateUrl: './gpio-pin-numbering.html',
                scope: $scope
              });
            });
          });

        }
      };
    }]);


