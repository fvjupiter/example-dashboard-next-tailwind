import { useEffect, useState } from 'react'
import Loader from './Loader'

export default function Weather({ isPrompt}) {
  const [loc, setloc] = useState(null)
  const [data, setdata] = useState(null)
  const [askedForUserLocation, setaskedForUserLocation] = useState(false)

  const fetchWeather = async (lat, lon) => {
    const appId = '44202ae07c2ec2db1a823b9aa9317443'
    try {
      if(lat && lon) {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=de&appid=${appId}`)
        const fetchedData = await res.json()
        // console.log(fetchedData)
        setdata(fetchedData)
      }
    } catch (error) { console.log('error:', error) }
  }
  
  useEffect(() => {
    let timO = () => {}
    if(isPrompt && !loc) setloc({ lat: 52.52, lon: 13.40 }) //Berlin
    else if (!isPrompt && !askedForUserLocation) {
      const getUserLocation = () => {
        try {
          const options = { maximumAge: 3600000 }
          const success = pos => {
            setloc({ lat: pos.coords.latitude, lon: pos.coords.longitude })
          }
          const error = err => {
            console.log(`error, (${err.code}): ${err.message}`)
            if(!loc) setloc({ lat: 52.52, lon: 13.40 }) //Berlin
            setaskedForUserLocation(true)
          }
          navigator.geolocation.getCurrentPosition(success, error, options)
        } catch (error) { console.log('error:', error) }
      }
      timO = setTimeout(() => { getUserLocation() }, 3000)
    }

    return () => { clearTimeout(timO) }
  }, [isPrompt])

  useEffect(() => {
    if (loc) fetchWeather(loc.lat, loc.lon)
  }, [loc])

  return (
    <div className={`
        px-2 py-1 sm:w-80 h-24 w-full
        bg-gradient-to-l dark:from-black/90 dark:to-black/40
        dark:shadow-black/90 sm:dark:shadow-black/20 shadow-indigo-400/20 sm:shadow-indigo-400/20
        sm:from-indigo-100/70 
        text-indigo-900 dark:text-white
        rounded-lg shadow-none dark:shadow-md dark:sm:shadow-md sm:shadow-md
        dark:ring-1 sm:ring-1 ring-indigo-400/20 dark:ring-white/30 
        dark:border sm:border border-indigo-500 dark:border-white/30
      `}>
        {data ? 
          <div>
            <div className="font-extralight">
              <div className='between'>
                <h3 className='font-semibold'>{data.name}</h3>
                <span className='text-sm'>{data.weather[0].description}</span>
              </div>
              <div className='between'>
                <div className='text-5xl'>{data.main.temp}°</div>
                <div className='text-sm text-right'>
                  <div className='w-28 between'>
                    <span>feels like:</span> <span>{data.main.feels_like}°</span>
                  </div>
                  <div className='w-28 between'>
                    <span>H:</span> <span>{data.main.temp_max}°</span>
                  </div>
                  <div className='w-28 between'>
                    <span>L:</span> <span>{data.main.temp_min}°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        : <div className='center -translate-y-2'><Loader /></div>}
    </div>
  )
}
