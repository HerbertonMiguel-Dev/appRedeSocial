import React, {useState} from 'react'
import { View, Text } from 'react-native'

import { Container, Title, Input, Button, ButtonText, SignUpButton, SignUpText, TitleSenac } from './styles'

function Login(){
  const [login, setLogin] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


 function toggleLogin(){
  setLogin(!login)
  setName('')
  setEmail('')
  setPassword('')
 }

 function handleSignIn(){
    if(email === '' && password === ''){
        alert('Por favor, preencha os campos Email e senha');
        return
    }if (email === '') {
        alert('Por favor, preencha o campo de email.');
        return;
    }

    if (password === '') {
        alert('Por favor, preencha o campo de senha.');
        return;
    }
  }

  function handleSignUp(){
    if(name === '' && email === '' && password === ''){
        alert('Por favor, preencha os campos Nome, Email e Senha');
        return
    }if (name === '') {
        alert('Por favor, preencha o campo de Nome.');
        return;
    }

    if (email === '') {
        alert('Por favor, preencha o campo de Email.');
        return;
    }
    if (password === '') {
        alert('Por favor, preencha o campo de Senha.');
        return;
    }
  }



  if(login){
      return(
      <Container>
        <Title>
          Dev<Text style={{color: '#F7921C'}}>Post</Text><Text style={{color: '#004B8C', fontSize: 75}}> Senac</Text>
          </Title>
        <Input 
          placeholder="Seu email"
          value={email}
          onChangeText={ (text)  => setEmail(text) }
        />

        <Input 
          placeholder="*********"
          value={password}
          onChangeText={ (text) => setPassword(text)}
          secureTextEntry={true}
        />

        <Button onPress={handleSignIn}>
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
        value={name}
        onChangeText={ (text)  => setName(text) }
      />

      <Input 
        placeholder="Seu email"
        value={email}
        onChangeText={ (text)  => setEmail(text) }
      />

      <Input 
        placeholder="*********"
        value={password}
        onChangeText={ (text) => setPassword(text)}
        secureTextEntry={true}
      />

      <Button onPress={handleSignUp}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <SignUpButton onPress={toggleLogin}>
        <SignUpText>Já Tenho uma conta</SignUpText>
      </SignUpButton>
    </Container>
  )
}

export default Login;