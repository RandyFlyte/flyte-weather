export default function Navbar({ address, setAddress, onFetchWeather }) {
  return (
    <div className='bg-gray-800 p-4'>
      <input
        type='text'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder='Enter address, city, or zip code'
        className='text-slate-600 p-2 border rounded-3xl m-4 w-64'
      />
      <button
        onClick={onFetchWeather}
        className='bg-amber-900/50 hover:bg-orange-500/50 p-2 rounded-3xl'>
        Get Weather
      </button>
    </div>
  );
}
