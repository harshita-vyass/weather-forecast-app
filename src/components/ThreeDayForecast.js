import React from "react";

const ThreeDayForecast = ({ weatherData, getDate }) => {
  const forecastData = weatherData.forecast.forecastday;

  return (
    <section className="box">
      {forecastData.map((day) => (
        <div className="card" >
          <h1>{getDate(day.date)}</h1>
          <h2>{day.day.maxtemp_c}&deg;C</h2>
          <p>sunrise :{day.astro.sunrise}</p>
          <p>sunset : {day.astro.sunset}</p>
        </div>
      ))}
    </section>
  );
};

export default ThreeDayForecast;
