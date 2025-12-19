//c0ef75261a97cb8945e927fb43a01d09


//https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&units=metric





let searchWeather = async ()=>{

    const city = document.getElementById("city").value;
    const weatherDiv = document.getElementById("result");
    const error = document.getElementById("error");
    let error_message = "Unable to find Weather";

    if (!city){
      error.innerText = "Write any city name";
      weatherDiv.classList.add("hidden");     
      error.classList.remove("hidden"); 
      return;
    } 
    
    let API_KEY = 'c0ef75261a97cb8945e927fb43a01d09';
    
    try{

        let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await weather.json();
        console.log(data);
        if(data.cod == '404'){
            error.innerText = error_message;
            weatherDiv.classList.add("hidden");     
            error.classList.remove("hidden"); 
            return;
        }
        
       error.classList.add("hidden");
        weatherDiv.classList.remove("hidden");
        weatherDiv.innerHTML = '';
       
            
            
            weatherDiv.innerHTML += ` <!-- Main Weather Box -->
  <div class="w-96 rounded-2xl shadow-xl p-6
              bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600
              text-white">

    <!-- City -->
    <h1 class="text-2xl font-bold text-center">
      ${data.name}, ${data.sys.country}
    </h1>
    <p class="text-center text-sky-100 mt-1">
      ${data.weather[0].main}
    </p>

    <!-- Temperature -->
    <div class="text-center my-6">
    <img class="text-center m-auto bg-white/20 rounded-lg mb-2" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
      <p class="text-6xl font-bold">
        ${data.main.temp}°C
      </p>
      <p class="text-sm text-sky-100 mt-1">
        Feels like ${data.main.feels_like}°C
      </p>
    </div>

    <!-- Details Box -->
    <div class="grid grid-cols-2 gap-4 text-sm">

      <div class="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
        <p class="font-semibold">Humidity</p>
        <p>${data.main.humidity}%</p>
      </div>

      <div class="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
        <p class="font-semibold">Pressure</p>
        <p>${data.main.pressure} hPa</p>
      </div>

      <div class="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
        <p class="font-semibold">Wind</p>
        <p>${data.wind.speed} m/s</p>
      </div>

      <div class="bg-white/20 backdrop-blur rounded-lg p-3 text-center">
        <p class="font-semibold">Visibility</p>
        <p>${data.visibility}</p>
      </div>

    </div>

    <!-- Footer -->
    <div class="text-center text-xs text-sky-100 mt-6">
      Cloudiness: ${data.clouds.all}%
    </div>

  </div>`;
        

    }catch(error){
        error.innerText = error_message;
        weatherDiv.classList.add("hidden");     
        error.classList.remove("hidden"); 
    }


}

 document.getElementById("city").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            searchWeather();
        }
    });

