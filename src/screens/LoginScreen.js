/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  Image,
  Input,
  Text,
  View,
} from 'native-base';
import Images from '../images/images';
import LoginForm from '../components/forms/LoginForm';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {loginUser, useAuth} from '../contexts/AuthContext';
import {useColorScheme} from 'react-native';

function LoginScreen({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const {dispatch, state} = useAuth();

  const handleLogin = async credentials => {
    await loginUser(credentials, dispatch);
  };

  return (
    <Box style={{height: 500}}>
      <Center>
        <Image
          source={!isDarkMode ? Images.logoDark : Images.logoLight}
          size="2xl"
          resizeMode="contain"
          alt="logo covoit"
        />
        <LoginForm onLogin={handleLogin} />

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text>Je n'ai pas encore de compte</Text>
        </TouchableOpacity>
      </Center>
    </Box>
  );
}

export default LoginScreen;
