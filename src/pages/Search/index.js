import React, { useState } from 'react'
import { View, Text } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import { Container, AreaInput, Input, List } from './styles'

function Search(){
  const [input, setInput] = useState('')

  return(
    <Container>
      <AreaInput>
        <Feather 
          name='search'
          size={20} 
          color="#004B8C"
        />
        <Input 
          placeholder="Procurando Usuario?"
          value={input}
          onChangeText={ (text) => setInput(text)}
          placeholderTextColor="#353840"

        />

      </AreaInput>
    </Container>
  )
}

export default Search;