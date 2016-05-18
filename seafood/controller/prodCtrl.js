angular
  .module('app')
  .controller('prodCtrl', ['$scope','$state', function($scope,$state) {
   
    $scope.title = "Available Products";
   
  $scope.test=function(no)
  { 
   // alert(no);
    var logd=localStorage.getItem('login');
    if(logd!=undefined)
    {

     
    var mydb = openDatabase("online", "0.1", "userdetails", 1024 * 1024);
    if(mydb)
    {
      mydb.transaction(function (t) {
            t.executeSql("SELECT fname,cost FROM fd2 ", [], function(t, results)
            {
              var len = results.rows.length, i;
     
            //alert(len);
              var fn = results.rows.item(no-1).fname;
                 var co = results.rows.item(no-1).cost;
                 localStorage.setItem('fname',fn);
                 localStorage.setItem('cost',co);
                 var k=localStorage.getItem('cost');
                 if(k==co)
                 {
                 
                 $state.go('orderdetail');
                  }
                  
           } , null);
        });
    
} 
    else {
        alert("db not found, your browser does not support web sql!");
    }
    }
    else
    {
      $state.go('login');
    }
    
  
        
}

  }]);