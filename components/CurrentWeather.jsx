export default function CurrentWeather({
  name,
  main,
  desc,
  icon,
  tempKelvin,
  updatedAt,
}) {
  const tempFahrenheit = (((tempKelvin - 273.15) * 9) / 5 + 32).toFixed(1);

  return (
    <div className='main-card w-96 border rounded-lg shadow-lg overflow-hidden md:ml-16 lg:ml-28'>
      {/* Top Section */}
      <div className='bg-gray-400 text-amber-950 p-1 '>
        <p className='bg-gray-600 text-2xl'>Location: {name}</p>
        <p className='bg-blue-200 text-xl'>
          Condition: {main}
          <span className='border uppercase text-sm ml-28'>{desc}</span>
        </p>
      </div>

      {/* Bottom Section */}
      <div className='flex justify-around'>
        <div className='border'>
          <span className='text-4xl'>{tempFahrenheit}°F</span>
          <span className='text-sm block'>Last update:</span>
          <span className='text-sm block'>{formatDate(updatedAt)}</span>
        </div>

        <div className='w-24 h-24 border'>
          {icon && (
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt='Weather Icon'
            />
          )}
        </div>
      </div>
    </div>
  );
}

const formatDate = (isoDate) => {
  const date = new Date(isoDate);

  const month = date.getUTCMonth() + 1; // Months are 0-indexed, so +1
  const day = date.getUTCDate();
  const year = date.getUTCFullYear().toString().slice(-2); // Last two digits of the year

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const AMorPM = hours < 12 ? 'AM' : 'PM';
  const formattedHours = hours % 12 || 12; // If hours is 0 (midnight), display as 12
  const formattedMinutes = minutes.toString().padStart(2, '0'); // Pad minutes with leading 0 if necessary

  return `${month}/${day}/${year} ${formattedHours}:${formattedMinutes} ${AMorPM} UTC`;
};

// Test
const dateStr = '2023-09-12T02:11:57+00:00';
console.log(formatDate(dateStr)); // Expected: "9/12/23 02:11 AM UTC"
