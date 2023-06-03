// my APIKey is "b4ed94adc674507878b0aeb7f93e988b";
$(document).ready(function(){
  //event listener on search button
$("#searchbtn").on("click",function(){
  //get value in input search value
  var searchCity = $("#search-value").val();
  $("search-value").val(" ");
  weatherDashboard(searchCity);
  weatherForecast(searchCity);
  // canadianholidays();
});