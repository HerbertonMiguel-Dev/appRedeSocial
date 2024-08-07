import React, { useMemo } from 'react';

import {Container, MessageBox, Message, Name } from './styles'

import auth from '@react-native-firebase/auth';

function ChatMessage({ data  }){
  const user = auth().currentUser.toJSON();

  const isMyMessage = useMemo(() => {
    return data?.user?._id === user.uid
  }, [data])

  return(
    <Container>
      <MessageBox isMyMessage={isMyMessage}>
        { !isMyMessage && <Name>{data?.user?.displayName}</Name> }
        <Message>{data.text}</Message>
      </MessageBox>
    </Container>
  )
}

export default ChatMessage;