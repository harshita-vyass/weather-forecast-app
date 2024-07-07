const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchWeather = async (cityName) => {
    console.log(cityName);
    const url = `${baseUrl}/forecast.json?q=${cityName}&days=3`;
    const options = {
      method: "GET",
      headers: getHeaders(),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      return data
    } catch (err) {
      console.error(err);
    }
};

const getHeaders = () => {
    return {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
      };
}
