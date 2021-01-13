import React, { createContext, useReducer, useEffect } from 'react';
import { userReducer } from '../reducers/UserReducer'
import UserAPI from '../api/UserApi'


export const UserContext = createContext()

const UserContextProvider = (props) => {

  const [user, dispatch] = useReducer(userReducer, {}, () => {
    const localData = localStorage.getItem('token');
    if (localData) {
      UserAPI.currentUser(localData)
      .then(res => res.json())
      .then(data => {
        console.log('current user', data['username'])
        if (data['username']) {
          dispatch({type: 'TOKEN_USER', data})
        } else {
          // localStorage.removeItem('token')
        }
      })
    }
  })

  console.log('looking for user', user)

  useEffect(() => {
    if (user && user['token']) {
      localStorage.setItem('token', user['token'])
    }
  }, [user])

  return (
    <UserContext.Provider value={{user, dispatch}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
