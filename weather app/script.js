let weather={
    "apikey":"0ddb332fc6d170d3cbeef339f86e0096",
    

    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city +"&appid="+this.apikey+"&units=metric"
        )
            .then(
                (response)=>response.json()
                )
            .then((data)=>this.displayWeather(data));
            
    },
    // displayWeather:function(data){
    //     if(data.code!==200){
    //         document.querySelector(".error").style.display="block";
    //         document.querySelector(".weather").style.display="none";

    //     }
    //     else{
    //         const  {name}=data;
    //     //const{description}=data.weather[0];
    //     const{temp,humidity}=data.main;
    //     const {speed}=data.wind;
    //     const weatherIcon=document.querySelector(".weather-icon");
    //     console.log(name,temp,humidity,speed);
    //     document.querySelector(".city").innerText=name;
    //     //document.querySelector(".details").innerText=description;
    //     let tempa=temp.toFixed(1);
    //     //console.log(tempa);
    //     document.querySelector(".temp").innerHTML=tempa+"°C";
    //     document.querySelector(".humidity").innerHTML=humidity+"%";
    //     //console.log("Humidity");
    //     document.querySelector(".wind").innerHTML=speed.toFixed(1)+" km/hr";
    //     //document.querySelector(".windspeed").innerHTML="Wind Speed";
        
    //     //console.log("Wind Speed");


    //     if(data.weather[0].main=="Clouds"){
    //         weatherIcon.src="./images/clouds.png";
    //     }
    //     else if(data.weather[0].main=="Clear"){
    //         weatherIcon.src="./images/clear.png";
    //     }
    //     else if(data.weather[0].main=="Rain"){
    //         weatherIcon.src="./images/rain.png";
    //     }
    //     else if(data.weather[0].main=="Drizzle"){
    //         weatherIcon.src="./images/drizzle.png";
    //     }
    //     else if(data.weather[0].main=="Mist"){
    //         weatherIcon.src="./images/mist.png";
    //     }
            
    //     }

        

        
         





    // },
    displayWeather: function(data) {
        document.querySelector(".spinner").style.display = "none";
        console.log(data.cod)
        if (data.cod !== 200) {
            
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".error").innerHTML="Invalid City"
        } else {
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").innerHTML=""
            const { name } = data;
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            const weatherIcon = document.querySelector(".weather-icon");
    
            document.querySelector(".city").innerText = name;
            let tempa = temp.toFixed(1);
            document.querySelector(".temp").innerHTML = tempa + "°C";
            document.querySelector(".humidity").innerHTML = humidity + "%";
            document.querySelector(".wind").innerHTML = speed.toFixed(1) + " km/hr";
    
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "./images/clouds.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "./images/clear.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "./images/rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "./images/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "./images/mist.png";
            }
    
            // Add any other logic you want to execute when there are no errors
        }
    },
    
    search:function(){
        document.querySelector(".spinner").style.display = "block";
        this.fetchWeather(document.querySelector(".search-bar").value);
        

    }

};

document.querySelector(".search-button").addEventListener("click",function(){
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keypress",function(event){
    if(event.key ==="Enter"){
  
        weather.search();

    }
    

});