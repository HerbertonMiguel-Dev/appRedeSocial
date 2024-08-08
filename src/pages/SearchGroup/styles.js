import styled from 'styled-components/native';

// Container principal da tela
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FFF;
`;

// Container que envolve o campo de entrada e o botão
export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-vertical: 14px;
`;

// Estilo do campo de entrada de texto
export const Input = styled.TextInput`
  background-color: #EBEBEB;
  margin-left: 10px;
  height: 50px;
  width: 80%;
  border-radius: 4px;
  padding: 5px;
`;

// Estilo do botão de pesquisa
export const ButtonSearch = styled.TouchableOpacity`
  background-color: #004B8C;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  width: 15%;
  margin-left: 5px;
  margin-right: 10px;
`;
