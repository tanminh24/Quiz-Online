app.controller('menuCtrl', function($scope, $http, $location, $rootScope) {
    $rootScope.hide = false;

    if ($rootScope.user != null) {
        $rootScope.hide = true;
    } else {
        $rootScope.hide = false;
    }

    $scope.logOut = function() {
        $rootScope.user = null;
        $rootScope.hide = false;
        $location.path('/logIn');
    }
});