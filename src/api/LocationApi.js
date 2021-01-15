const getIP = async () => {
  let response = await fetch(
    "https://geo.ipify.org/api/v1?apiKey=at_BxGYkD7fZRmbz2fjXxWOANPg5wyeG"
  );
  let data = await response.json();
  console.log("from getIP", data);
  return data;
};

export default getIP;
