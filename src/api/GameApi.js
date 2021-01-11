const harvestPlant = (plantId) => {
  console.log(plantId)
  const token = localStorage.getItem("token");
  console.log(token);
  return fetch('http://localhost:8000/gardens/harvest/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body: JSON.stringify({"plantId": plantId})
  })
}


export { harvestPlant };
