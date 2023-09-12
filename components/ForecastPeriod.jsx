import React from 'react';

export default function ForecastPeriod({ period }) {
  return (
    <div className='forecast-period'>
      <h4>{period.name}</h4>
      <img src={period.icon} alt={period.shortForecast} />
      <p>
        <strong>Temperature:</strong> {period.temperature}°
        {period.temperatureUnit}
      </p>
      <p>
        <strong>Forecast:</strong> {period.shortForecast}
      </p>
      <p>{period.detailedForecast}</p>
    </div>
  );
}
