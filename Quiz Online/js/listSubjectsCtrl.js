app.controller('listSubjectsCtrl', function($scope, $http, $rootScope, $location) {
    $http.get("https://62a06f37202ceef7086dc87f.mockapi.io/api/subjects").then(function(response) {
        $scope.listSubjects = response.data;
        $scope.count = Math.ceil($scope.listSubjects.length / 9);
    });
    $scope.begin = 0;
    $scope.page = 1;

    $scope.first = function() {
        $scope.begin = 0;
        $scope.page = 1;
    }
    $scope.last = function() {
        $scope.begin = ($scope.count - 1) * 9;
        $scope.page = $scope.count;
    }
    $scope.next = function() {
        if ($scope.begin < ($scope.count - 1) * 9) {
            $scope.begin += 9;
        }
        if ($scope.page == $scope.count) {
            return;
        } else {
            $scope.page += 1;
        }
    }
    $scope.prev = function() {
        if ($scope.begin > 0) {
            $scope.begin -= 9;
        }
        if ($scope.page == 1) {
            return;
        } else {
            $scope.page -= 1;
        }
    }

    $scope.checkU = function(subject) {
        if ($rootScope.user == null) {
            alert("Bạn phải đăng nhập để thi !");
        } else {
            $location.path('/subject/' + subject.Id);
        }
    }
});