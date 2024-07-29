import React, { useState, useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpText,
} from "./styles";

import { AuthContext } from "../../contexts/auth";

function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, signIn, loadingAuth } = useContext(AuthContext);

  function toggleLogin() {
    setLogin(!login);
    setName("");
    setEmail("");
    setPassword("");
  }

  async function handleSignIn() {
    if (email === "" && password === "") {
      alert("Por favor, preencha os campos Email e senha");
      return;
    }
    if (email === "") {
      alert("Por favor, preencha o campo de email.");
      return;
    }

    if (password === "") {
      alert("Por favor, preencha o campo de senha.");
      return;
    }

    await signIn(email, password);
  }

  async function handleSignUp() {
    if (name === "" && email === "" && password === "") {
      alert("Por favor, preencha os campos Nome, Email e Senha");
      return;
    }
    if (name === "") {
      alert("Por favor, preencha o campo de Nome.");
      return;
    }

    if (email === "") {
      alert("Por favor, preencha o campo de Email.");
      return;
    }
    if (password === "") {
      alert("Por favor, preencha o campo de Senha.");
      return;
    }

    await signUp(email, password, name);
  }

  if (login) {
    return (
      <Container>
        <Title>
          Dev<Text style={{fontStyle: 'italic', color: "#F7921C" }}>Post</Text>
          <Text style={{ color: "#004B8C", fontSize: 75 }}> Senac</Text>
        </Title>
        <Input
          placeholder="Seu email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="*********"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Button onPress={handleSignIn}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <ButtonText>Acessar</ButtonText>
          )}
        </Button>

        <SignUpButton onPress={toggleLogin}>
          <SignUpText>Criar uma conta</SignUpText>
        </SignUpButton>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        Dev<Text style={{ color: "#F7921C" }}>Post</Text>
        <Text style={{ color: "#004B8C", fontSize: 75 }}> Senac</Text>
      </Title>

      <Input
        placeholder="Seu Seu nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Input
        placeholder="Seu email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Input
        placeholder="*********"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <Button onPress={handleSignUp}>
        {loadingAuth ? (
          <ActivityIndicator size={20} color="#fff" />
        ) : (
          <ButtonText>Cadastrar</ButtonText>
        )}
      </Button>

      <SignUpButton onPress={toggleLogin}>
        <SignUpText>Já Tenho uma conta</SignUpText>
      </SignUpButton>
    </Container>
  );
}

export default Login;
