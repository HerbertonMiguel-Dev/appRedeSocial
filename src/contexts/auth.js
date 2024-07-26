import React, { createContext, useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){

  const [user, setUser] = useState(null); 


  return(
    <AuthContext.Provider value={{ signed: !! user, }}>
      {children}
    </AuthContext.Provider>
  )
  
}


export default AuthProvider;