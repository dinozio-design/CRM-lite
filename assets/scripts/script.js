// var APIkey = "3fc619e2b6b7dda6c371bb7186f492ab";
fetch("https://api.openweathermap.org/data/2.5/forecast?q=london&appid=3fc619e2b6b7dda6c371bb7186f492ab")
.then (function(response){
 return response.json();
})
.then(function(data){
  console.log(data);
})