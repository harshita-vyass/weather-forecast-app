import React from "react";

const ForecastAdditionalDetails = ({ weatherData }) => {
  return (
    <div className="details">
      <h1>Weather conditions </h1>
      <p>
        <b>Wind: </b>
        <span>{weatherData.current.wind_kph}</span> kmph &nbsp;
        <span>{weatherData.current.wind_degree}</span>
        &deg;
        <span>{weatherData.current.wind_dir}</span>
      </p>
      <p>
        <b>Max Temperature : </b>
        <span>{weatherData.forecast.forecastday[0].day.maxtemp_c}</span>
      </p>
      <p>
        <b>Min Temperature : </b>
        <span>{weatherData.forecast.forecastday[0].day.mintemp_c}</span>
      </p>

      <p>
        <b>Pressure : </b>
        <span>{weatherData.current.pressure_in}</span> in
      </p>
      <p>
        <b>Humidity : </b>
        <span>{weatherData.current.humidity}</span>
      </p>
      <p>
        <b>UV Radiation : </b>
        <span>{weatherData.current.uv}</span>
      </p>
      <p>
        <b>Precipitation : </b>
        <span>{weatherData.current.precip_in}</span>
      </p>
    </div>
  );
};

export default ForecastAdditionalDetails;
