app.controller('updateAccountCtrl', function($scope, $rootScope, $location) {
    $scope.fullname = $rootScope.user.fullname;
    $scope.email = $rootScope.user.email;
    $scope.schoolfee = Number($rootScope.user.schoolfee);


    $rootScope.day = $rootScope.user.birthday.substring(8, 10);
    $rootScope.month = $rootScope.user.birthday.substring(5, 7);
    $rootScope.year = $rootScope.user.birthday.substring(0, 4);
    $scope.updateAccount = function() {
        $rootScope.user.fullname = $scope.fullname;

        $rootScope.user.birthday = $scope.year + "-" + $scope.month + "-" + $scope.day;
        $rootScope.user.email = $scope.email;
        $rootScope.user.schoolfee = $scope.schoolfee;
        alert("Cập nhật thành công!");
        $location.path('/listSubjects');
    }
});

1995 - 12 - 21