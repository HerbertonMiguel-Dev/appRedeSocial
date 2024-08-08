import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 5px;
`;

export const MessageBox = styled.View`
  border-radius: 5px;
  padding: 10px;
  background-color: ${({ isMyMessage }) => (isMyMessage ? '#DCF8C5' : '#FFF')};
  margin-left: ${({ isMyMessage }) => (isMyMessage ? '50px' : '0')};
  margin-right: ${({ isMyMessage }) => (isMyMessage ? '0' : '50px')};
`;

export const Name = styled.Text`
  color: #F53745;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Message = styled.Text``;