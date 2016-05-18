angular
  .module('app')
  .controller('loginCtrl', ['$scope','$state', function($scope,$state) {
  
    $scope.title = "Login";
    
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

$scope.login=function()
{
  var flag1=0;
var flag2=0;

  var s=localStorage.getItem('login');
  if(s==undefined || s== null || s==0)
  {
    var mydb = openDatabase("online", "0.1", "userdetails", 1024 * 1024);
    if (mydb) {

        mydb.transaction(function (t) {
            t.executeSql("SELECT uname,pass FROM ud", [], function(t, results)
            {

                var uname1 = $scope.name1;
                var passw1 = $scope.pass1;
                var len = results.rows.length, i;
//                alert(len);    
               for (i = 0; i < len; i++){

                var un = results.rows.item(i).uname;
                 var pass = results.rows.item(i).pass;
                 if( un == uname1)
                 { $scope.flag1=1;
                    
                    if (pass == passw1)
                    {
                        $scope.flag2=1;
                        localStorage.setItem('lname',un);
                       localStorage.setItem('login',1);
                        //window.location= " index.html";
                        alert("success");
                        $state.go('products');
                        //document.getElementById("demo").innerHTMl = "success";
                    }
                    else
                    {
                        alert("Password doesnt match!! Enter the correct password");

                    }

                 }
                                 

            }
            if($scope.flag1!=1 && $scope.flag2!=1)
            {
            alert("register first to Login!!");
            $state.go('register');
           /* setTimeout(function()
                  {
                    window.location="index.html";

                  },3000);*/
        }
           } , null);
        });
    } else {
        alert("db not found, your browser does not support web sql!");
    }
}
/*else
{
    alert("you are already logged in!! plz logout properly..");
    window.location="index.html";
}*/
}






  }]);