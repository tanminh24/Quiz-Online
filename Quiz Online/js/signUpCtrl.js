app.controller('signUpCtrl', function($scope, $rootScope, $location) {
    $scope.gender = true;
    $scope.signUp = function() {
        for (let index = 0; index < $rootScope.students.length; index++) {
            if ($rootScope.students[index].username == $scope.student.username) {
                alert("Tên đăng nhập đã tồn tại !");
                return;
            }
            if ($rootScope.students[index].email == $scope.student.email) {
                alert("Email đã được người dùng khác sử dụng !");
                return;
            }
        }
        if ($scope.formSignUp.$valid == true) {
            $scope.student.birthday = $scope.year + "-" + $scope.month + "-" + $scope.day;
            $scope.student.gender = $scope.gender + "";
            $scope.student.marks = "0";

            $rootScope.students.push(angular.copy($scope.student));
            console.log($scope.student);
            $scope.student = {};
            $scope.repassword = '';
            alert("Đăng ký thành công!");
            console.log($rootScope.students);
            $location.path('/logIn');
        } else {
            console.log($scope.formSignUp.$valid);
            alert("Vui lòng nhập chính xác thông tin!");
        }
    }
});