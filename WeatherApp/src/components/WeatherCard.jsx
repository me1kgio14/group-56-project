

function WeatherCard({ weather,city}) {
    const temp=weather.current_weather.temperature
    const weatherDescriptions = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        71: "Slight snow",
        73: "Moderate snow",
        75: "Heavy snow",
        80: "Rain showers",
        95: "Thunderstorm"
};
    const WeatherImages = {
        0: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/01d.svg",   // Clear sky
        1: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/02d.svg",   // Mainly clear
        2: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/03d.svg",   // Partly cloudy
        3: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/04d.svg",   // Overcast
        45: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/50d.svg",  // Fog
        48: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/50d.svg",  // Rime fog
        51: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/09d.svg",  // Light drizzle
        53: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/09d.svg",  // Moderate drizzle
        55: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/09d.svg",  // Dense drizzle
        61: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/10d.svg",  // Slight rain
        63: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/10d.svg",  // Moderate rain
        65: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/10d.svg",  // Heavy rain
        71: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/13d.svg",  // Slight snow
        73: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/13d.svg",  // Moderate snow
        75: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/13d.svg",  // Heavy snow
        80: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/10d.svg",  // Rain showers
        95: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/11d.svg",  // Thunderstorm
    };

    const colors= temp<=15 ? "bg-blue-500" : "bg-red-500";


return (
  <div className={`flex flex-col items-center p-4  w-[300px] mx-auto ${colors} rounded-xl`}>
    <h1 className="text-2xl">{city}</h1>
    <h1 className="text-2xl font-bold mb-4">{weather.name}</h1>
    <div className="flex flex-col items-center space-y-2">
      <img
        src={WeatherImages[weather.current_weather.weathercode]}
        alt="weather icon"
        className="w-20 h-20"
      />
      <p className="text-xl font-semibold">Temperature is {temp} °C</p>
      <p className="capitalize text-gray-700">
        {weatherDescriptions[weather.weathercode]}
      </p>
    </div>
  </div>
);

}
export default WeatherCard