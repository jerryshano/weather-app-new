import React, { useState } from "react";

export default function SearchBar({ fetchWeather }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    fetchWeather(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex w-full max-w-sm">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 w-full rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}
