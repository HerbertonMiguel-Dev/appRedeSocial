import React from 'react';

import {
  Button,
  Row,
  Content,
  Header,
  NameText,
  ContentText,
} from './styles'

import { useNavigation } from '@react-navigation/native'

function ChatList({ data, deleteRoom }){
  const navigation = useNavigation();

  function openChat(){
    navigation.navigate("Messages", { thread: data })
  }

  return(
    <Button onPress={ openChat }  onLongPress={ () => deleteRoom && deleteRoom() }>
      <Row>
        <Content>
          <Header>
            <NameText numberOfLines={1}>{data.name} heheh</NameText>
          </Header>

          <ContentText numberOfLines={1}>{data.lastMessage.text}</ContentText>
          
        </Content>
      </Row>
    </Button>
  )
}

export default ChatList;