angular
  .module('app')
  .controller('registerCtrl', ['$scope','$state', function($scope,$state) {
    
    $scope.title = "Register";
    
    $scope.loadb= function()
	{
	if (window.openDatabase) {
            //Create the database the parameters are 1. the database name 2.version number 3. a description 4. the size of the database (in bytes) 1024 x 1024 = 1MB
            var mydb = openDatabase("online", "0.1", "userdetails", 1024 * 1024);

            //create the cars table using SQL for the database using a transaction
            mydb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS ud (id INTEGER PRIMARY KEY ASC, uname TEXT, pass TEXT, email TEXT)");
            });

             mydb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS fd2 (fname TEXT, cost INTEGER)");
            });

             mydb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS orderdetl (cname TEXT, address TEXT, phno TEXT, nof TEXT, nkg INTEGER, tcost INTEGER)");
            });

             mydb.transaction(function (t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS cardet (cname TEXT, phno TEXT, cardn TEXT, cvv TEXT)");
            });




            }
             else {
            alert("WebSQL is not supported by your browser!");
            }

} 




$scope.register= function()
{
     var mydb = openDatabase("online", "0.1", "userdetails", 1024 * 1024);
    if (mydb) {
        
        var uname1 = $scope.name11;
        var passw = $scope.pass11;
        var email1 = $scope.email11;
        if (uname1 !== "" && passw !== "" && email1 !== "") {
            mydb.transaction(function (t) {
                t.executeSql("INSERT INTO ud (uname,pass,email) VALUES (?, ?, ?)", [uname1, passw, email1]);
                alert("Registered Successfully");
                $state.go('login');               
            });
        } else {
            alert("You must enter a name , password and Email!");
        }
    } else {
        alert("db not found, your browser does not support web sql!");
    }
}



  }]);