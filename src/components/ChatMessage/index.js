import React,{ useMemo } from 'react';

import auth from '@react-native-firebase/auth';

import { Container, MessageBox, Name, Message } from './styles'


function ChatMessage({ data }){
  const user = auth().currentUser.toJSON();

   const isMyMessage = useMemo(() => {
    return data?.user?._id === user.uid
  }, [data])

  return(
    <Container>
      <MessageBox>
        { !isMyMessage && <Name>{data?.user?.displayName}</Name> }
        <Message>{data.text}</Message>
      </MessageBox>
    </Container>
  )

}

export default ChatMessage;