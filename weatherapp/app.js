window.addEventListener('load', ()=>{
    const lat = document.querySelector('.lat');
    const long = document.querySelector('.long');
    const tempZone = document.querySelector('.temp-zone');
    const city = document.querySelector('.city');
    const temperature = document.querySelector('.temp-degree');
    const description = document.querySelector('.description');
    const cityName = document.querySelector('.cityName');
    getLocation();
    //console.log(getLocation)
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
           
        } 
      }
      
      function showPosition(position) {
        let l;
        let lg;
        l = position.coords.latitude;
        lg = position.coords.longitude;
        console.log(l,lg);
        const key = "3e13918f72f011d61285de7cb2b49482";
        const api = `https://api.weatherapi.com/v1/current.json?key=88e20cc0a96f4b438ce172446220610&q=${l},${lg}&aqi=no`;

       // const api = `https://api.weatherapi.com/v1/current.json?key=88e20cc0a96f4b438ce172446220610&q=${cityName.value}&aqi=no`;
        
        fetch(api)
          .then((response) => { return response.json()})
          .then((data) => {
            console.log(data);

          const {temp_c, condition} = data.current;
          const {tz_id, country, name} = data.location;
          tempZone.textContent = tz_id;
          city.textContent = name;
          temperature.textContent = temp_c;
          description.textContent = condition.text;
              
            });
          
  
          
      }


});