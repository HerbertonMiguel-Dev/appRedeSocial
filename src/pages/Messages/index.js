import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';

import {Container, StyledFlatList,ContainerInput, MainContainerInput,StyledTextInput, ButtonContainer  } from './styles'

import { useNavigation } from '@react-navigation/native'

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

 return (
   <Container >
    <Header />

      <StyledFlatList 
        data={messages}
        keyExtractor={ item => item._id}
        renderItem={ ({item}) => <ChatMessage data={item} />  }
      />

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? "padding" : 'height'}
        style={{ width: '100%' }}
        keyboardVerticalOffset={100}
      >
      </KeyboardAvoidingView>

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

        <TouchableOpacity>
          <ButtonContainer>
            <Feather name="send" size={22} color="#FFF"/>
          </ButtonContainer>
        </TouchableOpacity>

      </ContainerInput>
     
   </Container>
  );
}
