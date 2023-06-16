let weather=document.getElementById("weather")
let xhr=new XMLHTTPRequest();
xhr.open=("GET","https://history.openweathermap.org/data/2.5/history/city?lat={lat}&lon={lon}&type=hour&start={start}&end={end}&appid={API key}");
xhr.responseType='json',
xhr.send();
xhr.onload = function(){
    var responseObj=xhr.response;
    for(var i=0; i<weather.length; i++){
        console.log(responseObj[1].weather.length);
    }

}