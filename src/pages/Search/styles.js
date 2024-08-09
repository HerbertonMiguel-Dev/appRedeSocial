import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex:1;
  background-color: #FBC07E;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #e3e3e3;
  margin: 10px;
  border-radius: 4px;
  padding: 5px 10px;
`;

export const Input = styled.TextInput`
  width: 90%;
  background-color: #e3e3e3; 
  height: 40px;
  padding-left: 8px;
  font-size: 17px;
  color: #121212;
`;


export const List = styled.FlatList`
  flex:1;
`;