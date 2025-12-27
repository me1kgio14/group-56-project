import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Error from './components/Error'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import { getCoordinates } from './components/Coordinates'
import DayOrNight from './components/DayOrNight'

function App() {
  const [city, setCity] = useState('Tbilisi')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)
  
  useEffect(()=>{
    getCoordinates(city)
      .then(({latitude, longitude}) =>
      fetch (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
      )
        .then(res=>res.json())
        .then(data=> {setWeather(data)
          console.log(data)
          setError(null)})
        .catch(err=> setError(err.message))
        
  },[city])

  return (
    <div className='flex-col w-[700px] h-[800px] rounded-2xl items-center justify-center '>
      <div className='h-[70vh] w-full  border-b-1 '>      
        {error ? <Error message={error} /> : 
        weather && <WeatherCard weather={weather} city={city} /> }
        <DayOrNight weather={weather} city={city} />
      </div>
      <div><SearchBar setCity={setCity} /></div>
    </div>
  )
}
export default App