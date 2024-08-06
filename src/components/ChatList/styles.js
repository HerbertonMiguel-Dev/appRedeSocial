import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`

`;

export const Row = styled.View`
  padding-horizontal: 10px;
  padding-vertical: 15px;
  flex-direction: row;
  align-items: center;
  background-color: rgba(241, 240, 245, 0.5);
  margin-vertical: 4px;
`;

export const Content = styled.View`
  flex-shrink: 1;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const ContentText = styled.Text`
  color: #c1c1c1;
  font-size: 16px;
  margin-top: 2px;
`;

export const NameText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;