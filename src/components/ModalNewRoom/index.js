import React,{ useContext, useState } from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import { Text } from 'react-native';

import {
  Container,
  ModalOverlay,
  ModalContent,
  Title,
  Input,
  ButtonCreate,
  ButtonText,
  BackButton,
 } from './styles'

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { AuthContext} from '../../contexts/auth'

function ModalNewRoom({ setVisible, setUpdateScreen }){
  const [roomName, setRoomName] = useState('');
  const {user} = useContext(AuthContext)

  function handleButtonCreate(){
    if(roomName === '') return;

    firestore().collection('MESSAGE_THREADS')
    .get()
    .then((snapshot)=>{
      let myThreads = 0;

      snapshot.docs.map( docItem => {
        if(docItem.data().owner === user.uid){
          myThreads += 1;
        }
      })

      if(myThreads >= 4){
        alert('Você já atingiu o limite de grupos por usuario.');
      }else{
        createRoom();
      }

    })
  }

    // Criar nova sala no firestore (banco do firebase)
  function createRoom(){
    firestore()
    .collection('MESSAGE_THREADS')
    .add({
      name: roomName,
      owner: user.uid,
      lastMessage:{
        text: `Grupo ${roomName} criado. Bem vindo(a)!`,
        createdAt: firestore.FieldValue.serverTimestamp(),
      }
    })
    .then((docRef)=>{
      docRef.collection('MESSAGES').add({
        text: `Grupo ${roomName} criado. Bem vindo(a)!`,
        createdAt: firestore.FieldValue.serverTimestamp(),
        system: true,
      })
      .then(()=>{
        setVisible();
        setUpdateScreen()
      })
      
    })
    .catch((err)=>{
      console.log(err);
    })

  }

  return(
    <Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <ModalOverlay></ModalOverlay>
      </TouchableWithoutFeedback>
      
      <ModalContent>
        <Title>Criar um novo Grupo?</Title>
        <Input 
          value={roomName}
          onChangeText={(text) => setRoomName(text)}
          placeholder="Nome para sua sala?"
        />

        <ButtonCreate onPress={handleButtonCreate}>
          <ButtonText>Criar sala</ButtonText>
        </ButtonCreate>

        <BackButton onPress={setVisible}>
          <Text>Voltar</Text>
        </BackButton>
      </ModalContent>
    </Container>
  )
}

export default ModalNewRoom;