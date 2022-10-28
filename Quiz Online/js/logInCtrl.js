app.controller('logInCtrl', function($scope, $http, $location, $rootScope) {
    $scope.logIn = function() {
        for (let i = 0; i < $rootScope.students.length; i++) {
            if ($rootScope.students[i].username == $scope.userName &&
                $rootScope.students[i].password == $scope.password) {
                $rootScope.user = $rootScope.students[i];
                console.log($rootScope.students[i]);
                console.log($rootScope.user);
                $rootScope.hide = true;
                $location.path('/listSubjects');
                return;
            }
        }
        alert("Tài khoản hoặc mật khẩu không đúng !");
    }
})