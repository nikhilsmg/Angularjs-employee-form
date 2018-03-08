var app = angular.module('myApp',[]);

app.controller("myCtrl", function($scope, $http){
        
    //get json data
    $http.get("data/employee.json").then(function(employeedata){
        $scope.employee = employeedata.data;
    });

     //to add new item
    $scope.saveEmployee = function(empp){
        if(empp.name!=null && empp.id!=null)
        {
            $scope.employee.push(empp);
            $scope.empp = {};                   //to empty the fields
        }
    };
});

