angular.module('login.services',[])
  .factory('login',function ($http) {
  return {
    fun:function (data,fun) {
      return $http({
        method:"POST",
        url:"http://10.0.29.80/demo/waterApp/www/php/index.php?a=Login&b="+fun,
        data:data,
        headers:{'Content-Type': 'application/x-www-form-urlencoded'}
      })
    }
  }
});
