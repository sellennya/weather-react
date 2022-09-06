import React from 'react';

export default function Weather() {
  let weatherData = {
    city: 'Lisbon',
    day: 'Sunday',
    time: '12:47',
    description: 'Clear',
    imgUrl: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png',
    temperature: 26,
    humidity: 41,
    wind: 9,
  };
  return (
    <div className='Weather'>
      <div className='card weather-box'>
        <div className='card-body'>
          <form className='row g-3'>
            <div className='col-9'>
              <input
                type='search'
                className='form-control'
                placeholder='Type a city...'
              />
            </div>
            <div className='col-auto'>
              <input
                type='submit'
                className='btn btn-primary search-button'
                value='Search'
              />
              <input
                type='submit'
                className='btn btn-success search-button mx-2'
                value='Current'
              />
            </div>
          </form>
          <div className='default-weather-info'>
            <p>{weatherData.city}</p>
            <p>
              {weatherData.day} {weatherData.time}
            </p>
            <p>{weatherData.description}</p>
          </div>
          <div className='row'>
            <div className='col-9 weather-row'>
              <img src={weatherData.imgUrl} alt='sun'></img>
              <p className='current-temperature'>
                <span>{weatherData.temperature}</span>
                <span className='degrees'>
                  <span>°C </span>
                </span>
              </p>
            </div>

            <div className='col-auto'>
              <p>Humidity: {weatherData.humidity}%</p>
              <p>Wind: {weatherData.wind}km/h</p>
            </div>
          </div>
        </div>
      </div>
      <div className='open-source-text'>
        <a
          className='open-source-link'
          href='https://github.com/sellennya/weather-react'
          target='_blank'
          rel='noreferrer'
        >
          Open-source code
        </a>{' '}
        by Sandra Cardoso
      </div>
    </div>
  );
}
