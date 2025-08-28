import React from "react";
import { X } from "lucide-react"; // nice clean icon

export default function WeatherCard({ current, forecast, onRemove }) {
  const { name, main, weather, wind } = current;
  const icon = weather[0].icon;

  const dailyForecast = forecast.list.filter((f) =>
    f.dt_txt.includes("12:00:00")
  );

  return (
    <div className="relative bg-gray-500 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full text-center transition hover:scale-105">
      {/* remove button */}
      <button
        onClick={onRemove}
        className="absolute top-3 right-3 text-white-600 hover:text-red-500 transition"
        aria-label="Remove card"
      >
        <X size={20} />
      </button>

      <h2 className="text-2xl font-bold mb-2 text-white-800">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={weather[0].description}
        className="mx-auto"
      />
      <p className="text-xl capitalize mb-2 text-white-700">
        {weather[0].description}
      </p>
      <p className="text-5xl font-extrabold mb-4 text-white-900">
        {Math.round(main.temp)}°F
      </p>
      <div className="grid grid-cols-2 gap-4 text-sm text-white-600 mb-6">
        <div>
          <p className="font-semibold">💧 Humidity</p>
          <p>{main.humidity}%</p>
        </div>
        <div>
          <p className="font-semibold">🌬 Wind</p>
          <p>{wind.speed} mph</p>
        </div>
      </div>

      <div className="border-t border-white-300 pt-4">
        <h3 className="text-lg font-semibold mb-3 text-white-800">
          5-Day Forecast
        </h3>
        <div className="grid grid-cols-5 gap-2">
          {dailyForecast.map((day, idx) => (
            <div key={idx} className="bg-white/60 rounded-lg p-2 text-sm">
              <p className="font-semibold">
                {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
                className="mx-auto"
              />
              <p>{Math.round(day.main.temp)}°F</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
