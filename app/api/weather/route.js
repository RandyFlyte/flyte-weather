import { NextResponse } from 'next/server';

export async function GET(request) {
  const lat = request.nextUrl.searchParams.get('lat');
  const lon = request.nextUrl.searchParams.get('lon');
  const response = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
  const data = await response.json();
  const forecastURL = data.properties.forecast;
  console.log(`Logging forecast URL ${forecastURL}`);
  const forecastResponse = await fetch(forecastURL);
  const forecastData = await forecastResponse.json();

  return NextResponse.json(forecastData);
}
