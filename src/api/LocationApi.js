const getIP = async () => {
  let response = await fetch(
    "https://geo.ipify.org/api/v1?apiKey=at_NUF1OP62ImD5gECto44MwWTeLMt2R"
  );
  let data = await response.json();
  let location = await data.location
  // console.log("from getIP", location);
  return location;
};

export default getIP;
