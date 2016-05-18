angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/welcome');


    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'html/welcome.html',
        controller: 'welcomeCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'html/login2.html',
        controller: 'loginCtrl'
      })
     .state('register', {
        url: '/register',
        templateUrl: 'html/register2.html',
        controller: 'registerCtrl'
      })
      .state('products', {
        url: '/product',
        templateUrl: 'html/prod.html',
        controller: 'prodCtrl'
      })
      .state('orderdetail', {
        url: '/orderdetail',
        templateUrl: 'html/pdt.html',
        controller: 'orderCtrl'
      })
      .state('final', {
        url: '/thankyou',
        templateUrl: 'html/final.html',
        controller: 'finalCtrl'
      })
      
  }])