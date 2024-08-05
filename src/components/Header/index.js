import React, {} from 'react'
import { View, Text } from 'react-native'
import { Container, Title, } from './styles'

function Header(){
  return(
    <Container>
      <Title>
          Dev<Text style={{fontStyle: 'italic', color: "#F7921C" }}>Post</Text>
          <Text style={{ color: "#004B8C", fontSize: 35 }}> Senac</Text>
        </Title>
    </Container>
  )
}

export default Header;