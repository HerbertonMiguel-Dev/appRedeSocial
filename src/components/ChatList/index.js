import React,{ useContext, useState, useEffect } from 'react';

import {
  Button,
  Row,
  Content,
  Header,
  NameText,
  ContentText,
} from './styles'

function ChatList({ data, deleteRoom }){
  return(
    <Button onPress={ () => {} }  onLongPress={ () => deleteRoom && deleteRoom() }>
      <Row>
        <Content>
          <Header>
            <NameText numberOfLines={1}>{data.name}</NameText>
          </Header>

          <ContentText numberOfLines={1}>{data.lastMessage.text}</ContentText>
          
        </Content>
      </Row>
    </Button>
  )
}

export default ChatList;