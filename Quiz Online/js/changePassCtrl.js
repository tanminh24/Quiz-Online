app.controller('changePassCtrl', function($scope, $rootScope, $location) {
    $scope.changePass = function() {
        if ($scope.formChangePass.$valid == true) {
            console.log($rootScope.user.password);
            console.log($scope.oldPassword);
            if ($rootScope.user.password == $scope.oldPassword) {
                $rootScope.user.password = $scope.newPassword;
                alert("Thay đổi mật khẩu thành công!");
                $location.path('/logIn');
            } else {
                alert("Mật khẩu cũ không đúng!");
            }
        }
    }
});