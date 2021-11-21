const APIKEY = '27726d4c7da639c32815a7a78d2bc636'



const handleClick = ()=>{
    zipCode = document.getElementById("weather-zip").value;
    axiosCall(zipCode)
};

document.getElementById("button").addEventListener('click', handleClick);


const axiosCall = async () =>{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${APIKEY}&units=imperial`).catch((e)=>{console.error(e);alert('Zip code returned no results.')})
    data = response.data;    
    console.log(data)
    document.getElementById("city").innerHTML = `Weather for: ${data.name}`
    document.getElementById("current-temp").innerHTML = `Temp: ${data.main.temp} F`;
    document.getElementById("real-feel").innerHTML = `Temp: ${data.main.feels_like} F`;
    document.getElementById("high-temp").innerHTML = `Temp: ${data.main.temp_max} F`;
    document.getElementById("low-temp").innerHTML = `Temp: ${data.main.temp_min} F`;
    document.getElementById("weather-img").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    document.getElementById("weather-zip").value = ""


}


