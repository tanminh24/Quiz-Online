var app = angular.module('myApp', ["ngRoute"]);

app.run(function($rootScope, $http, $timeout) {
    $http.get("../db/Students.js").then(function(response) {
        $rootScope.students = response.data;
    });

    $http.get("../db/Subjects.js").then(function(response) {
        $rootScope.subjects = response.data;
    });

    $http.get("https://62a06f37202ceef7086dc87f.mockapi.io/api/subjects").then(function(response) {
        $rootScope.listSubjects = response.data;
    });

    $rootScope.student = null;
    $rootScope.students = [];
    $rootScope.day = 0;
    $rootScope.month = 0;
    $rootScope.year = 0;
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/listSubjects', {
            templateUrl: 'listSubjects.html'
        })
        .when('/subject/:subjectId', {
            templateUrl: 'subject.html?' + Math.random(),
            controller: 'subjectCtrl'
        })
        .otherwise({
            redirectTo: '/logIn'
        })
        .when('/about', {
            templateUrl: 'about.html'
        })
        .when('/contact', {
            templateUrl: 'contact.html'
        })
        .when('/feedback', {
            templateUrl: 'feedback.html'
        })
        .when('/q&a', {
            templateUrl: 'q&a.html'
        })
        .when('/signUp', {
            templateUrl: 'signUp.html'
        })
        .when('/logIn', {
            templateUrl: 'logIn.html',
            controller: 'logInCtrl'
        })
        .when('/forgetPass', {
            templateUrl: 'forgetPass.html'
        })
        .when('/changePass', {
            templateUrl: 'changePass.html'
        })
        .when('/updateAccount', {
            templateUrl: 'updateAccount.html'
        })
});

app.directive('rePass', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function rePass(value) {
                var pass = scope.student.password;
                console.log(pass);
                if (pass == value) {
                    mCtrl.$setValidity('charE', true);
                } else {
                    mCtrl.$setValidity('charE', false);
                }
                return value;
            }
            mCtrl.$parsers.push(rePass);
        }
    }
});

app.directive('reNewpass', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function reNewpass(value) {
                var pass = scope.newPassword;
                console.log(pass);
                if (pass == value) {
                    mCtrl.$setValidity('charE', true);
                } else {
                    mCtrl.$setValidity('charE', false);
                }
                return value;
            }
            mCtrl.$parsers.push(reNewpass);
        }
    }
});