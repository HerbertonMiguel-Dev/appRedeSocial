import React,{ useContext, useState, useEffect } from 'react';
import { Modal, ActivityIndicator, FlatList, Alert} from 'react-native';

import { AuthContext} from '../../contexts/auth'
import { useNavigation, useIsFocused } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import FabButton from '../../components/FabButton';
import ModalNewRoom from '../../components/ModalNewRoom';
import ChatList from '../../components/ChatList';

import {Container, HeaderRoom, HeaderRoomLeft, Title, ButtonSearch } from './styles'

import firestore from '@react-native-firebase/firestore';

import Header from '../../components/Header';

export default function ChatRoom() {
  const navigation = useNavigation()
  const isFocused = useIsFocused();

  const {user, signOut } = useContext(AuthContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateScreen, setUpdateScreen] = useState(false);

  

  async function handleSignOut(){
    await signOut();
    
  }
  

  useEffect(()=>{
    let isActive = true;

    function getChats(){
      firestore()
      .collection('MESSAGE_THREADS')
      .orderBy('lastMessage.createdAt', 'desc')
      .limit(10)
      .get()
      .then((snapshot)=>{
        const threads = snapshot.docs.map( documentSnapshot => {
          return {
            _id:  documentSnapshot.id,
            name: '',
            lastMessage: { text: '' },
            ...documentSnapshot.data()
          }
        })

        if(isActive){
          setThreads(threads);
          setLoading(false);
          //console.log(threads)
        }


      })

    }

    getChats();


    return () => {
       isActive = false;
    }

  }, [isFocused, updateScreen]);


  function deleteRoom(ownerId, idRoom){
    // Se o cara que está tentando deletar nao é dono dessa sala.
    if(ownerId !== user?.uid) return;

    Alert.alert(
      "Atenção!",
      "Você tem certeza que deseja deletar essa sala?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => handleDeleteRoom(idRoom)
        }
      ]
    )

  }

  async function handleDeleteRoom(idRoom){
    await firestore()
    .collection('MESSAGE_THREADS')
    .doc(idRoom)
    .delete();

    setUpdateScreen(!updateScreen);

  }

   if(loading){
    return(
      <ActivityIndicator  size={20} color="#fff"/>
    )
  }

 return (
  
   <Container>
    <Header /> 

     <HeaderRoom>
      <HeaderRoomLeft>
        <Title>Grupos</Title>
      </HeaderRoomLeft>
      
      <ButtonSearch>
        <MaterialIcons name="search" size={28} color="#FFF"/>
      </ButtonSearch>
     </HeaderRoom>

     <FlatList
        data={threads}
        keyExtractor={ item => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => (
          <ChatList data={item} deleteRoom={ () => deleteRoom(item.owner, item._id) }/>
      )}
     />

     <FabButton  FabButton setVisible={ () => setModalVisible(true) }  />

     <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <ModalNewRoom  
        setVisible={ () => setModalVisible(false) } 
          setUpdateScreen={ () => setUpdateScreen(!updateScreen) }
      />
     </Modal>

   </Container>
  );
}

