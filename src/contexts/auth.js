import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  async function signUp(email, password, name) {
    setLoadingAuth(true);

    try {
      const value = await auth().createUserWithEmailAndPassword(email, password);
      const uid = value.user.uid;

      await firestore().collection('users').doc(uid).set({
        nome: name,
        createAt: new Date(),
      });

      const data = {
        uid,
        nome: name,
        email: value.user.email,
      };

      setUser(data);
    } catch (error) {
      console.error('Erro durante o cadastro:', error);  // Adicionado para depuração
      handleAuthError(error);
    } finally {
      setLoadingAuth(false);
    }
  }

  async function signIn(email, password) {
    setLoadingAuth(true);

    try {
      const value = await auth().signInWithEmailAndPassword(email, password);
      const uid = value.user.uid;

      const userProfile = await firestore().collection('users').doc(uid).get();
      const data = {
        uid,
        nome: userProfile.data().nome,
        email: value.user.email,
      };

      setUser(data);
    } catch (error) {
      console.error('Erro durante o login:', error);  // Adicionado para depuração
      handleAuthError(error);
    } finally {
      setLoadingAuth(false);
    }
  }

  function handleAuthError(error) {
    console.error('Código de erro:', error.code);  // Adicionado para depuração

    switch (error.code) {
      case 'auth/invalid-credential':
        alert('As credenciais fornecidas são inválidas.');
        break;
      default:
        alert('Ocorreu um erro desconhecido. Por favor, tente novamente.');
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, signUp, signIn, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
