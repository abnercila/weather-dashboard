import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const { name, main, weather } = weatherData;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

 return (
  <div className="weather-display">
    <h2>{name}</h2>
    <img src={iconUrl} alt={weather[0].description} />
    <p className="temp">{Math.round(main.temp)}°C</p>
    <p className="description">{weather[0].description}</p>
    <p>Humedad: {main.humidity}%</p>
  </div>
);
};

export default WeatherDisplay;