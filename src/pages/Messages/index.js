import React, { useState, useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';

import {Container, ContainerInput, MainContainerInput, StyledTextInput, ButtonContainer } from './styles'

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import ChatMessage from '../../components/ChatMessage';
import Header from '../../components/Header';

import Feather from 'react-native-vector-icons/Feather';




export default function Messages({ route }) {

  const { thread } = route.params;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const user = auth().currentUser.toJSON();


  useEffect(() => {

    const unsubscribeListener = firestore().collection('MESSAGE_THREADS')
    .doc(thread._id)
    .collection('MESSAGES')
    .orderBy('createdAt', 'desc')
    .onSnapshot( querySnapshot => {
        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data()

          const data = {
            _id: doc.id,
            text: '',
            createdAt: firestore.FieldValue.serverTimestamp(),
            ...firebaseData
          }

          if(!firebaseData.system){
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.displayName
            }
          }

          return data;

        })

        setMessages(messages)

    })



    return () => unsubscribeListener()

  }, []);


  async function handleSend(){
    if(input === '') return;

    await firestore()
    .collection('MESSAGE_THREADS')
    .doc(thread._id)
    .collection('MESSAGES')
    .add({
      text: input,
      createdAt: firestore.FieldValue.serverTimestamp(),
      user: {
        _id: user.uid,
        displayName: user.displayName
      }
    })

    await firestore()
    .collection('MESSAGE_THREADS')
    .doc(thread._id)
    .set(
      {
        lastMessage: {
          text: input,
          createdAt: firestore.FieldValue.serverTimestamp(),
        }
      },
      { merge: true }
    )

    setInput('');

  }

 return (
   <Container>
    <Header />
     <FlatList
      style={{ width: '100%'}}
      data={messages}
      keyExtractor={ item => item._id}
      renderItem={ ({item}) => <ChatMessage data={item} />  }
      inverted={true}
     />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : 'height'}
        style={{ width: '100%' }}
        keyboardVerticalOffset={100}
      >
        <ContainerInput>
          <MainContainerInput>
            <StyledTextInput 
              placeholder="Sua mensagem..."
              value={input}
              onChangeText={ (text) => setInput(text) }
              multiline={true}
              autoCorrect={false}
            />
          </MainContainerInput>

          <TouchableOpacity onPress={handleSend}>
            <ButtonContainer>
              <Feather name="send" size={22} color="#FFF"/>
            </ButtonContainer>
          </TouchableOpacity>

        </ContainerInput>
        
      </KeyboardAvoidingView>

   </Container>
  );
}

