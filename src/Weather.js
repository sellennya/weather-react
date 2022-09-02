import React from 'react';
import axios from 'axios';

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in Lisbon is ${Math.round(response.data.main.temp)}°C`);
  }

  let apiKey = '037f5c727f06280e77af4e476422de25';
  let url = `https://api.openweathermap.org/data/2.5/weather?q=lisbon&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
  return (
    <div className='Weather'>
      <h2> Hello from Weather</h2>
    </div>
  );
}
