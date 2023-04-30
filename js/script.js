let weather = {
    apiKey: "69e0cbaa5409608159e06708a661a35d",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
        city +"&units=metric&appid=" + this.apiKey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.weather__city').innerText = "Weather in " + name;
        document.querySelector('.weather__icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector('.weather__description').innerText = "Description: " + description;
        document.querySelector('.weather__temp').innerText = temp + "°C";
        document.querySelector('.weather__humidity').innerText = "Humidity: " + humidity + " %";
        document.querySelector('.weather__wind').innerText = "Wind Speed: " + wind + " km/h";
        document.querySelector('.weather').classList.remove("loading");
    },
    search: function(){
        this.fetchWeather(
            document.querySelector('.search__bar').value
        );
    }
}

document.querySelector('.search .search__button').addEventListener('click',function(){
    weather.search();
});

document.querySelector('.search__bar').addEventListener('keyup',function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});