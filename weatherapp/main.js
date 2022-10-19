let weather = {
    apiKey: "88e20cc0a96f4b438ce172446220610",
    fetchWeather: function(city){
        fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}&aqi=no`)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {temp_c, condition} = data.current;
        const {tz_id, country, name} = data.location;
        const tempZone = document.querySelector('.temp-zone');
        const city = document.querySelector('.city');
        const temperature = document.querySelector('.temp-degree');
        const description = document.querySelector('.description');
        const cityName = document.querySelector('.cityName');
        tempZone.innerText = tz_id;
        city.innerText = "Weather in " + name;
        temperature.innerText = temp_c;
        description.innerText = condition.text;
        //console.log(tz_id, condition.text);
        
    },
    search: function(){
        this.fetchWeather(document.querySelector('.search').value)
    }
};

const searchBtn = document.querySelector('.btnSearch');
    searchBtn.addEventListener('click', ()=>{
    weather.search();
});
const searchCity = document.querySelector('.search');
    searchCity.addEventListener('keyup', function(event){
    if(event.keyCode == 13){
        weather.search();
    }
});

weather.fetchWeather("Pokhara");
