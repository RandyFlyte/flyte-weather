import React from 'react';

export default function ForecastPeriod({ period }) {
  return (
    <div className='forecast-period h-96 w-32 text-center'>
      <h4>{period.name}</h4>
      <img src={period.icon} alt={period.shortForecast} />
      <p>
        {period.temperature}°{period.temperatureUnit}
      </p>
      <p className='font-bold'>{period.shortForecast}</p>
      <p>{period.detailedForecast}</p>
    </div>
  );
}
