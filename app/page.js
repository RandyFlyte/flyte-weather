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
    <div className='bg-gradient-to-r from-slate-900 to-blue-900 min-h-screen text-white'>
      {/* Search field and "Get Weather" button */}
      <Navbar
        address={address}
        setAddress={setAddress}
        onFetchWeather={handleFetchWeatherData}
      />
      {/* Current weather card */}

      {weatherData && (
        <div className='mt-8 container mx-auto'>
          <div className='bg-gray-800 rounded-lg shadow-md mb-6'>
            <CurrentWeather
              name={weatherData?.current?.name}
              main={weatherData?.current?.weather[0]?.main}
              desc={weatherData?.current?.weather[0]?.description}
              icon={weatherData?.current?.weather[0]?.icon}
              tempKelvin={weatherData?.current?.main?.temp}
              updatedAt={weatherData?.forecast?.properties?.updated}
            />
          </div>

          {/* Forecast weather card */}
          <div className='flex overflow-x-auto space-x-4 h-96'>
            {weatherData.forecast.properties.periods.map((period) => (
              <div
                key={period.number}
                className='border rounded-md shadow-sm bg-gray-800 p-2'>
                <ForecastPeriod period={period} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
