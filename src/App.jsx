const API_KEY = "76d0bcbd868226d9268c69f256948555";


import React, { useState } from "react";

import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";


function App() {
  const [weatherCards, setWeatherCards] = useState([]);

  const fetchWeather = async (city) => {
    try {
      const currentRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
      );

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`
      );

      const newCard = {
        id: Date.now(), // unique id for deletion
        current: currentRes.data,
        forecast: forecastRes.data,
      };

      setWeatherCards([newCard, ...weatherCards]);
    } catch (error) {
      alert("City not found!");
    }
  };

  const removeCard = (id) => {
    setWeatherCards(weatherCards.filter((card) => card.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-200 to-blue-400 transition-colors duration-700 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 drop-shadow-lg">
        ☀️ Weather App
      </h1>
      <SearchBar fetchWeather={fetchWeather} />
      <div className="grid gap-6 w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {weatherCards.map((card) => (
          <WeatherCard
            key={card.id}
            current={card.current}
            forecast={card.forecast}
            onRemove={() => removeCard(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
