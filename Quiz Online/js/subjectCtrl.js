app.filter('counter', [function() {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
}])

app.controller('subjectCtrl', function($scope, $http, $routeParams, $interval, $timeout, $rootScope) {
    $scope.subject = {};
    $scope.quizs = [];
    $scope.ques = [];
    $scope.selectAns = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $scope.correctAns = [];
    $scope.numQues = 1;
    $scope.begin = 0;
    $scope.finishTest = false;
    $scope.test = false;
    $scope.counter = 900;
    $scope.testMark = 0;
    $scope.indexAns = 0;

    $scope.subjectId = $routeParams.subjectId;
    $http.get("https://62a06f37202ceef7086dc87f.mockapi.io/api/subjects/" + $scope.subjectId).then(function(response) {
        $scope.subject = response.data;
    });

    $scope.start = function() {
        $scope.timeStart = new Date();
        $http.get("../db/Quizs/" + $scope.subjectId + '.js').then(function(response) {
            $scope.quizs = response.data;
            for (let i = 0; i < 10; i++) {
                data = $scope.quizs[Math.floor(Math.random() * $scope.quizs.length)];
                $scope.ques.push(data);
                $scope.correctAns.push($scope.ques[i].AnswerId);
            }
        });
        $scope.test = true;
        timer = $interval(function() {
            $scope.counter--;
            if ($scope.counter == 0) {
                $interval.cancel(timer);
                $scope.end();
            };
        }, 1000);
    }

    $scope.end = function() {
        $scope.test = false;
        $scope.timeFinish = new Date();
        $scope.finishTest = false;
        alert("Kết thúc bài thi !");
        //xử lí câu hỏi
        for (let index = 0; index < 10; index++) {
            if ($scope.selectAns[index] == $scope.correctAns[index]) {
                $scope.testMark += 1;
            }
        }
        console.log($rootScope.user);
    }

    $scope.finishTest = function() {
        $interval.cancel(timer);
        if (confirm("Xác nhận kết thúc bài thi " + $scope.subject.Name + " !")) {
            $scope.end();
        } else {
            $scope.start();
        }
    }

    //chuyển câu hỏi
    $scope.next = function() {
        if ($scope.begin < 9) {
            $scope.begin += 1;
            $scope.numQues += 1;
            $scope.indexAns += 1;
            console.log($scope.selectAns);
            console.log($scope.correctAns);
        }
        console.log($rootScope.student.username);
    }
    $scope.prev = function() {
        if ($scope.begin > 0) {
            $scope.begin -= 1;
            $scope.numQues -= 1;
            $scope.indexAns -= 1;
        }
    }

    $scope.selectQues = function(index) {
        $scope.begin = index - 1;
        $scope.numQues = index;
        $scope.indexAns = index - 1;
    }

});