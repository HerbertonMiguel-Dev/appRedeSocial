import React, { useState, useEffect, useContext } from 'react';

import {Keyboard } from 'react-native'
import { Container, ContainerInput, Input, ButtonSearch, ListGroup  } from './styles';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useIsFocused } from '@react-navigation/native';
import ChatList from '../../components/ChatList';

import Header from '../../components/Header';

export default function SearchGroup() {
  const isFocused = useIsFocused();

  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);


  useEffect(() => {

    const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null;
    setUser(hasUser);


  }, [isFocused]);

  async function handleSearch(){
    if(input === '') return;

    const responseSearch = await firestore()
    .collection('MESSAGE_THREADS')
    .where('name', '>=', input)
    .where('name', '<=', input + '\uf8ff')
    .get()
    .then( (querySnapshot) => {

      const threads = querySnapshot.docs.map( documentSnapshot => {
        return{
          _id: documentSnapshot.id,
          name: '',
          lastMessage: { text: '' },
          ...documentSnapshot.data()
        }
      })

      setChats(threads);
      //console.log(threads)
      setInput('');
      Keyboard.dismiss();

    })

  }

 return (
   <Container>
    <Header />
    <ContainerInput>
      <Input 
        placeholder="Digite o nome da sala?"
        value={input}
        onChangeText={ (text) => setInput(text) }
        autoCapitalize={"none"}
      />
      <ButtonSearch onPress={handleSearch}>
        <MaterialIcons name="search" size={30} color="#FFF" />
      </ButtonSearch>
    </ContainerInput>

    <ListGroup
        showsVerticalScrollIndicator={false}
        data={chats}
        keyExtractor={ item => item._id}
        renderItem={ ({ item }) => <ChatList data={item} userStatus={user} /> }
     />
     
   </Container>
  );
}