import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: rgba(34, 34, 34, 0.4);
`;

export const ModalOverlay = styled.View`
  flex: 1;
`;

export const ModalContent = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 15px;
`;

export const Title = styled.Text`
  margin-top: 14px;
  text-align: center;
  font-weight: bold;
  font-size: 19px;
  color: #000;
`;

export const Input = styled.TextInput`
  border-radius: 4px;
  height: 45px;
  background-color: #ddd;
  margin-vertical: 15px;
  font-size: 16px;
  padding-horizontal: 5px;
`;

export const ButtonCreate = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: #004B8C;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: #fff;
`;

export const BackButton = styled.TouchableOpacity`
 margin-top: 10px;
 align-items: center;
 justify-content: center;
`;