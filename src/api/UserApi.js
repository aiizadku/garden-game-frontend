const registerUser = (userInfo) => {
  // console.log(userInfo)
  return fetch('http://localhost:8000/gardens/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
}

const login = async (userInfo) => {
  // console.log(userInfo)
  try {
    
    let response = await fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    return response
  }
  catch(err) {
    console.log(err)
  }
}

const currentUser = (token) => {
  return fetch('http://localhost:8000/gardens/current_user/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  })
}

const userGarden = (token) => {
  return fetch('http://localhost:8000/gardens/garden/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  })
}

const fetchUserBalanceByID = (userID) => {
  return fetch(`http://127.0.0.1:8000/api/profile/${userID}`).then((response) => response.json())
}

const addToBalanceByID = (userID, addedAmountObject) => {
  console.log("Updating player balance to ", addedAmountObject);
  return fetch(`http://127.0.0.1:8000/api/profile/${userID}/`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(addedAmountObject)
  }).then((response) => response.json())
}

const fetchUserStats = () => {
  return fetch(`http://127.0.0.1:8000/api/stats/`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  }).then((response) => response.json())
}

// const addToExpByID = (userID, addedAmountObject) => {
//   return fetch(`http://127.0.0.1:8000/api/profile/${userID}/`, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     method: 'PUT',
//     body: JSON.stringify(addedAmountObject)
//   }).then((response) => response.json())
// }

export default {
  registerUser,
  login,
  currentUser,
  userGarden,
  fetchUserBalanceByID,
  addToBalanceByID,
  fetchUserStats
}