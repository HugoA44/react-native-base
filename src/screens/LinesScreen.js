/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, Fab, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

function LinesScreen({navigation}) {
  return (
    <Container style={{maxWidth: '100%'}} h="100%" w="100%">
      <MapView
        style={{
          width: '100%',
          height: '100%',
        }}
        provider="google"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Fab
        onPress={() => navigation.navigate('Modal')}
        position="absolute"
        size="lg"
        bottom={90}
        right={5}
        icon={<Icon name="add" size={25} />}
      />
    </Container>
  );
}

export default LinesScreen;
