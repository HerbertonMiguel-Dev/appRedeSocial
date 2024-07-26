import React, { createContext, useState, useEffect } from 'react'

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';




export const AuthContext = createContext({});

function AuthProvider({ children }){

  const [user, setUser] = useState(null);
  
  async function signUp(email, password, name){
    await auth().createUserWithEmailAndPassword(email, password)
    .then( async (value) =>{
      let uid = value.user.uid
      await firestore().collection('users')
      .doc(uid).set({
        nome: name,
        createAt: new Date(),
      })
      .then(() =>{
        let data = {
          uid: uid,
          nome: name,
          email: value.user.email
        }

        setUser(data);

      })
    })
    .catch(() =>{
      alert('')
    })
  }


  return(
    <AuthContext.Provider value={{ signed: !! user, signUp }}>
      {children}
    </AuthContext.Provider>
  )
  
}


export default AuthProvider;