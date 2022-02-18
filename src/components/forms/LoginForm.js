import React, {useState} from 'react';
import {
  Box,
  Button,
  FormControl,
  Icon,
  Input,
  Text,
  WarningOutlineIcon,
} from 'native-base';

function LoginForm({onLogin}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box w="80%">
      <FormControl mb="3">
        <FormControl.Label>Email</FormControl.Label>
        <Input placeholder="Entrez votre email" type="email" />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          Une erreurs s'est produite
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl mb="5">
        <FormControl.Label>Mot de passe</FormControl.Label>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Entrez votre mot de passe"
          InputRightElement={
            <Button
              size="xs"
              rounded="none"
              w="1/6"
              h="full"
              onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Masquer' : 'Afficher'}
            </Button>
          }
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          Une erreurs s'est produite
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={onLogin} size="md" mb="2">
        Se connecter
      </Button>
    </Box>
  );
}

export default LoginForm;
