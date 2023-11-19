import React, { useState } from "react";
import "./Forecast.css";
import Header from "../components/Header";
import ForecastAdditionalDetails from "./ForecastAdditionalDetails";
import ThreeDayForecast from "../components/ThreeDayForecast";
import ForecastDetails from "../components/ForecastDetails";

const Forecast = () => {
  const [city, setCity] = useState("");
  const [isDataAvialable, setIsDataAvailable] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(city === "") {
        alert("Please select a city!")
        return;
    }
    console.info("Saved " + city);
    fetchWeather(city);
  };

  const saveData = (response) => {
    setIsDataAvailable(true);
    setWeatherData(response);
  };

  const fetchWeather = async (cityName) => {
    const city = cityName;
    console.log(city);

    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "73479c8263msh7151a96153185e9p1788aajsn1d611c727f5c",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      saveData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getDate = (dateString) => {
    const arr = dateString.split("-");
    const date = new Date(arr[0], arr[1] - 1, arr[2]);
    const day = date.toLocaleString("default", { day: "2-digit" });
    const month = date.toLocaleString("default", { month: "short" });
    const formattedDate = month + " " + day;
    return formattedDate;
  };
  console.log(isDataAvialable);

  return (
    <div>
      <Header setCity={setCity} handleSubmit={handleSubmit} />
      {!isDataAvialable && <h1 className="defaultMsg">Data is not available, please select city!</h1>}
      <div className="container">
        <section className="main">
          {weatherData && <ForecastDetails weatherData={weatherData} />}
          {weatherData && (
            <ForecastAdditionalDetails weatherData={weatherData} />
          )}
        </section>

        {weatherData && (
          <ThreeDayForecast weatherData={weatherData} getDate={getDate} />
        )}
      </div>
    </div>
  );
};

export default Forecast;
