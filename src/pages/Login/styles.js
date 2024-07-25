import { TouchableOpacity, TextInput  } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #FBC07E;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 45px;
  font-weight: bold;
  font-style: italic;
`;



export const Input = styled.TextInput`
  width: 80%;
  background-color: #fff;
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  font-size: 17px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  background-color: #004B8C;
  border-radius: 8px;
  margin-top: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color:  #fff;
  font-size: 20px;

`;

export const SignUpButton = styled.TouchableOpacity`
 width: 100%;
 align-items: center;
 margin-top: 10px;
 justify-content: center;

`;

export const SignUpText = styled.Text`
  color: #fff;
  font-size: 15px;
`;