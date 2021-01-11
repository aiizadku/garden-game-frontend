const getWeather = async (userCity, userState) => {
  const response = await fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?q=${userCity}%2C${userState}%2CUSA&units=imperial`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9787f1e58amshcbfb9f8a0dfd985p1cb905jsn7b1c9d802fc2",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    }
  );
  const condition = await response.json();
  const weather = await condition.weather[0].main;
  console.log(weather)
  return weather;
};

export default getWeather;
