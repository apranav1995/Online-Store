angular
  .module('app')
  .controller('orderCtrl', ['$scope','$state', function($scope,$state) {
  	$scope.title2="Purchase";
  var d=localStorage.getItem('fname');
    var d1=localStorage.getItem('cost');
   $scope.namef=d;
  $scope.costf=d1; 

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

$scope.orderde=function()
{   //localStorage.clear();
	var totalcost;
	


    var fn = localStorage.getItem('fname');
    	var ng = $scope.nokg;
    	var cname1 = $scope.uname;
        var ad = $scope.addr;
        var ph = $scope.phno;

    localStorage.setItem('cname',cname1);
    localStorage.setItem('phno',ph);

	var mydb = openDatabase("online", "0.1", "userdetails", 1024 * 1024);
   if (mydb) {
    	

    	mydb.transaction(function (t) {
            t.executeSql("SELECT fname,cost FROM fd2 ", [], function(t, results)
            {
            	var len = results.rows.length,i;
            	 for(i=1;i<=len;i++)
            	 {	

            	 	var fnm = results.rows.item(i-1).fname;
                 var co = results.rows.item(i-1).cost;
            	 	if(fnm == fn)
            	 	{
            	 		$scope.totalcost = ng * co;
                        $scope.display(fn,ng,cname1,ad,ph,$scope.totalcost);
            	 		break;

            	 	}
            	 }
            	 
            
            },null);


	});
    }

   }


$scope.display=function(fname,nokg,name,address,phn,cost)
{
//  alert("display");
    var fn=fname;
    var nk=nokg;
    var nam=name;
    var add=address;
    var con=phn;
    var c=cost;
    if (fn !== "" && nk !== "" && nam !== "" && add !== "" && con != "" && c!= "") {
            var mydb = openDatabase("online", "0.1", "userdetails", 1024 * 1024);
            mydb.transaction(function (t) {
                t.executeSql("INSERT INTO orderdetl (cname,address,phno,nof,nkg,tcost) VALUES (?, ?, ?, ?, ?, ?)", [nam,add ,con,fn,nk,c]);
                alert("Your product will be delivered to you soon");
                 $state.go('final');
            });
        } else {
            alert("You must enter a name and password!");
        }
}

  }]);