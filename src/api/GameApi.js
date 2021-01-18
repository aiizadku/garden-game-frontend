const harvestPlant = (plantId, row, column) => {
  const token = localStorage.getItem("token");
  return fetch('http://localhost:8000/gardens/harvest/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body: JSON.stringify({
      "plantId": plantId,
      "row": row,
      "column": column
    })
  })
}


const getSeeds = () => {
  const token = localStorage.getItem("token");
  
  return fetch('http://localhost:8000/gardens/available_plants/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  });
};


/* Expecting to send
data = {
  "row": rowColData[0],
  "column": rowColData[1],
  "plantId": plantId
}
*/
const plantSeed = (data) => {
  const token = localStorage.getItem("token");
  console.log("planting seed");

  return fetch('http://localhost:8000/gardens/plant/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body: JSON.stringify(data)
  });
}

const getPlantDetail = plantId => {
  const token = localStorage.getItem("token");
  return fetch(`http://localhost:8000/gardens/plants/${plantId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
  });
};


const loadGarden = () => {
  const token = localStorage.getItem("token");
  return fetch(`http://localhost:8000/gardens/load`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
  });
};


export { 
  harvestPlant,
  getSeeds,
  plantSeed,
  getPlantDetail, 
  loadGarden
 };
