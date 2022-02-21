/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Container, Fab, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import {PermissionsAndroid} from 'react-native';

function LinesScreen({navigation}) {
  const [mapMargin, setMapMargin] = useState(1);
  const onMapReady = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then(granted => {
      setMapMargin(0);
    });
  };

  return (
    <Container style={{maxWidth: '100%'}} h="100%" w="100%">
      <MapView
        style={{
          width: '100%',
          height: '100%',
          margin: mapMargin,
        }}
        zoomControlEnabled
        provider="google"
        showsUserLocation
        showsMyLocationButton
        showsCompass
        showsScale
        onMapReady={onMapReady}

        // initialRegion={{
        //   latitude: 37.78825,
        //   longitude: -122.4324,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
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
