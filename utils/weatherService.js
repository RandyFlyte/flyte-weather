// Takes in an address, geo decodes to a lat and lon, then uses that for retrieving weather data
export async function fetchWeatherData(address) {
  const geocodeResponse = await fetch(
    `/api/geocode?address=${encodeURIComponent(address)}`
  );
  const { lat, lon } = await geocodeResponse.json();

  const initialWeatherResponse = await fetch(
    `https://api.weather.gov/points/${lat},${lon}`
  );
  const initialWeatherData = await initialWeatherResponse.json();
  const forecastURL = initialWeatherData.properties.forecast;
  const forecastResponse = await fetch(forecastURL);
  const forecastData = await forecastResponse.json();

  // Fetch current weather from OpenWeatherAPI
  const openWeatherAPIKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
  const currentWeatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherAPIKey}`
  );
  const currentWeatherData = await currentWeatherResponse.json();

  return {
    forecast: forecastData,
    current: currentWeatherData,
  };
}
