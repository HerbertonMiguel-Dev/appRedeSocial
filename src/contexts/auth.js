import React, { createContext, useState, useEffect } from 'react'

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext({});

function AuthProvider({ children }){

  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  
  async function signUp(email, password, name){
    setLoadingAuth(true);

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
        setLoadingAuth(false);
      })
    })
    .catch(() =>{
      alert('usuario não cadastrado')
      setLoadingAuth(false);
    })
  }

  async function signIn(email, password){
    setLoadingAuth(true);
    await auth().signInWithEmailAndPassword(email, password)
    .then(async(value) =>{
      let uid = value.user.uid;

      const userProfile = await firestore().collection('users')
      .doc(uid).get();

      let data = {
        uid: uid,
        nome: userProfile.data().nome,
        email: value.user.email
      }

      setUser(data)
      setLoadingAuth(false);

    })
    .catch(() =>{
      alert('login falhou')
      setLoadingAuth(false);
    })
  }


  return(
    <AuthContext.Provider value={{ signed: !! user, signUp, signIn, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  )
  
}


export default AuthProvider;