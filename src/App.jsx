import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherSearch from './components/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay';
import './styles.css';

const API_KEY = 'TU_CLAVE_DE_API';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    if (!city) return;

    setIsLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
          lang: 'es' // Opcional: para que la descripción del clima esté en español
        },
      });
      setWeatherData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Ciudad no encontrada.');
      } else {
        setError('Error al conectar con el servidor.');
      }
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <WeatherSearch onSearch={fetchWeather} />
      {isLoading && <p className="loading">Cargando...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
};

export default App;
