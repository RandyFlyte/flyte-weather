import { NextResponse } from 'next/server';

export async function GET(request) {
  const address = request.nextUrl.searchParams.get('address');

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
  );

  const data = await response.json();
  const location = data.results[0].geometry.location;

  return NextResponse.json({
    lat: location.lat.toFixed(4),
    lon: location.lng.toFixed(4),
  });
}
