const getLocation = async() => {
  const response = await fetch(
    "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9d1fd4c712msh8524d11d1eeb2b0p1de58ajsn856245a097d9",
        "x-rapidapi-host":
          "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
      },
    }
  );
  const location = await response.json();
  // console.log (location)
//   const userCity = await location.city
//   const userState = await location.state

  return location
};

export default getLocation