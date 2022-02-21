import React from 'react';
import {Button, Container} from 'native-base';

function ModalScreen({navigation}) {
  return (
    <Container h="100%" w="100%">
      <Button onPress={() => navigation.goBack()}>Fermer</Button>
    </Container>
  );
}

export default ModalScreen;
