app.controller('forgetPassCtrl', function($scope, $rootScope, $location) {
    $scope.forgetPass = function() {
        for (let index = 0; index < $rootScope.students.length; index++) {
            if ($rootScope.students[index].username == $scope.username &&
                $rootScope.students[index].email == $scope.email) {
                alert("Mật khẩu của bạn là: " + $rootScope.students[index].password);
                return;
            }
        }
        alert("Thông tin đăng nhập không khớp!");
    }
});