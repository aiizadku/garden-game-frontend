const getWeather = async (userCity, userState) => {
  const response = await fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?q=${userCity}%2C${userState}%2CUSA&units=imperial`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4ab69b1810msh51028b54397015fp118da9jsncfcfc8892b86",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    }
  );
  // const condition = await response.json();
  // const weather = await condition.weather[0].main;
  // // console.log('WeatherAPI Condition: ', condition)
  // return weather;

  // Prevent crash from undefined weather
  const condition = await response.json();
  let weather;
  if (await condition.weather) {
    weather = await condition.weather[0].main;
  }
  else
    console.log("Undefined weather");
  // console.log('WeatherAPI Condition: ', condition)
  return weather;
};

export default getWeather;
