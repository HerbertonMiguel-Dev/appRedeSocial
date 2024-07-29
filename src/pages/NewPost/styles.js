import { TouchableOpacity, TextInput  } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #FBC07E ;
`;

export const Input = styled.TextInput`
  background-color: transparent;
  margin: 10px;
  color: #fff;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  margin-right: 7px;
  padding:  5px 12px;
  background-color: #004B8C ;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
color: #fff;
font-size: 16px;
  
`;



