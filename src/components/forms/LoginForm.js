import React, {useState} from 'react';
import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  WarningOutlineIcon,
} from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';

function LoginForm({onLogin}) {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    identifier: 'hugo.aunette@my-digital-school.org',
    password: 'azertyuiop',
  });

  return (
    <Box w="80%">
      <FormControl mb="3">
        <FormControl.Label>Email</FormControl.Label>
        <Input
          placeholder="Entrez votre email"
          type="email"
          value={credentials.identifier}
          onChangeText={text => {
            setCredentials({...credentials, identifier: text});
          }}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          Une erreurs s'est produite
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl mb="5">
        <FormControl.Label>Mot de passe</FormControl.Label>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Entrez votre mot de passe"
          value={credentials.password}
          onChangeText={text => {
            setCredentials({...credentials, password: text});
          }}
          InputRightElement={
            <Button
              size="xs"
              rounded="none"
              w="1/6"
              h="full"
              onPress={() => setShowPassword(!showPassword)}>
              <Icon name={showPassword ? 'eye' : 'eye-off'} size={25} />
            </Button>
          }
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          Une erreurs s'est produite
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={() => onLogin(credentials)} size="md" mb="2">
        Se connecter
      </Button>
    </Box>
  );
}

export default LoginForm;
