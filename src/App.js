import React from 'react';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Center,
  extendTheme,
  NativeBaseProvider,
  themeTools,
  useColorMode,
  useColorModeValue,
} from 'native-base';
import Navigator from './navigation/Navigator';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './contexts/AuthContext';
import {getTheme} from './theme/Theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = getTheme(isDarkMode);

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#fff',
      background: isDarkMode ? '#0F172A' : '#fff',
    },
  };

  return (
    <>
      <SafeAreaView />
      <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
        <AuthProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NavigationContainer theme={navigationTheme}>
            <NativeBaseProvider theme={theme}>
              <Navigator />
            </NativeBaseProvider>
          </NavigationContainer>
        </AuthProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
