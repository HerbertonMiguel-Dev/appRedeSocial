import React, {useState} from 'react'
import { View, Text } from 'react-native'

import { Container, Title, Input, Button, ButtonText, SignUpButton, SignUpText, TitleSenac } from './styles'

function Login(){
  const [login, setLogin] = useState(true)

 function toggleLogin(){
  setLogin(!login)
 }


  if(login){
      return(
      <Container>
        <Title>
          Dev<Text style={{color: '#F7921C'}}>Post</Text><Text style={{color: '#004B8C', fontSize: 75}}> Senac</Text>
          </Title>
        <Input 
          placeholder="Seu email"
        />

        <Input 
          placeholder="*********"
        />

        <Button>
          <ButtonText>Acessar</ButtonText>
        </Button>

        <SignUpButton onPress={toggleLogin}>
          <SignUpText>Criar uma conta</SignUpText>
        </SignUpButton>
      </Container>
    )
  }

  return(
    <Container>
       <Title>
          Dev<Text style={{color: '#F7921C'}}>Post</Text><Text style={{color: '#004B8C', fontSize: 75}}> Senac</Text>
          </Title>

      <Input 
        placeholder="Seu Seu nome"
      />

      <Input 
        placeholder="Seu email"
      />

      <Input 
        placeholder="*********"
      />

      <Button>
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <SignUpButton onPress={toggleLogin}>
        <SignUpText>Já Tenho uma conta</SignUpText>
      </SignUpButton>
    </Container>
  )
}

export default Login;