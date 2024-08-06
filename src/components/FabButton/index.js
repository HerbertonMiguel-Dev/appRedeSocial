import React from 'react';

import { ContainerButton, ContainerView, ButtonText } from './styles'

function FabButton({ setVisible }){
  
  function handleNavigateButton() {
    setVisible();
  }

 return(
  <ContainerButton
    activeOpacity={0.9}
    onPress={handleNavigateButton}
  >
    <ContainerView>
      <ButtonText>+</ButtonText>
    </ContainerView>
  </ContainerButton>
 )
}

export default FabButton;