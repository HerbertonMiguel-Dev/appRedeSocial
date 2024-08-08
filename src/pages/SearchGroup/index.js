import React, { useState } from 'react';

import { Container, ContainerInput, Input, ButtonSearch,  } from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';

export default function SearchGroup() {
  const [input, setInput] = useState('');

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
      <ButtonSearch>
        <MaterialIcons name="search" size={30} color="#FFF" />
      </ButtonSearch>
    </ContainerInput>
     
   </Container>
  );
}