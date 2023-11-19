import React from "react";

const ForecastDetails = ({ weatherData }) => {
  return (
    <div className="temperature">
      <h2>{weatherData.location.name}</h2>
      <h1>{weatherData.current.temp_c} &deg;C</h1>

      <p>
        Feels like {weatherData.current.feelslike_c}&deg;C |
        <span>&nbsp;{weatherData.current.condition.text}</span>
      </p>
    </div>
  );
};

export default ForecastDetails;
