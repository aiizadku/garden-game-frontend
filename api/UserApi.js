const registerUser = (userInfo) => {
  console.log(userInfo)
  return fetch('http://localhost:8000/gardens/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
}

const login = async (userInfo) => {
  console.log(userInfo)
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

export default {
  registerUser,
  login,
  currentUser,
 
}