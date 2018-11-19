angular
  .module('ado.ng-rpi3-gpio-ref', [
    'ui.bootstrap',
    'ado.rpi3-gpio-ref.tpls'
  ])
  .directive('adoRpi3GpioRef', [
    '$uibModal',
    'adoRpi3GpioImg',
    function ($uibModal, adoRpi3GpioImg) {
      return {
        restrict: 'AE',
        link: function ($scope, elem) {

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


