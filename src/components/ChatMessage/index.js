import React, { useMemo, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AuthContext } from "../../contexts/auth";


function ChatMessage({ data, }) {
  const { user } = useContext(AuthContext);

  const isMyMessage = useMemo(() => {
    return data?.user?._id === user.uid;
  }, [data]);

   //console.log('Display Name:', data?.user?.nome);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage ? '#DCF8C5' : '#FFF',
            marginLeft: isMyMessage ? 50 : 0,
            marginRight: isMyMessage ? 0 : 50,
          },
        ]}
      >
        {!isMyMessage && 
          <Text style={styles.name}>{data?.user?.nome}</Text>
        }
        <Text style={styles.message}>{data.text}</Text>
      </View>
    </View>
  );
}

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  messageBox: {
    borderRadius: 5,
    padding: 10,
  },
  name: {
    color: '#F53745',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    // Define other styles if needed
    fontSize: 16, // Example
  },
});
