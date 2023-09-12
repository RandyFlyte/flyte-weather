'use client';
import { useState } from 'react';
import ForecastPeriod from '@/components/ForecastPeriod';
import CurrentWeather from '@/components/CurrentWeather';
import { fetchWeatherData } from '@/utils/weatherService';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [address, setAddress] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  async function handleFetchWeatherData() {
    const data = await fetchWeatherData(address);
    setWeatherData(data);
  }

  return (
    <div className='bg-slate-900'>
      {/* Search field and "Get Weather" button */}
      <Navbar
        address={address}
        setAddress={setAddress}
        onFetchWeather={handleFetchWeatherData}
      />
      {/* Current weather card */}

      {weatherData && (
        <div className=''>
          <CurrentWeather
            name={weatherData?.current?.name}
            main={weatherData?.current?.weather[0]?.main}
            desc={weatherData?.current?.weather[0]?.description}
            icon={weatherData?.current?.weather[0]?.icon}
            tempKelvin={weatherData?.current?.main?.temp}
            updatedAt={weatherData?.forecast?.properties?.updated}
          />

          {/* Forecast weather card */}
          <div className='flex'>
            {weatherData.forecast.properties.periods.map((period) => (
              <ForecastPeriod key={period.number} period={period} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
