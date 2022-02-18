import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {useAuth} from '../contexts/AuthContext';
import HomeScreen from '../screens/HomeScreen';
import TabBar from './TabBar';
import ProfileScreen from '../screens/ProfileScreen';

const MainNavigator = createBottomTabNavigator();
const AuthNavigator = createNativeStackNavigator();

function AuthStack() {
  return (
    <AuthNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthNavigator.Screen name="Login" component={LoginScreen} />
      <AuthNavigator.Screen name="Register" component={RegisterScreen} />
    </AuthNavigator.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <MainNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <MainNavigator.Screen
        name="Home"
        options={{tabBarIcon: 'home'}}
        component={HomeScreen}
      />
      <MainNavigator.Screen
        name="Profile"
        options={{tabBarIcon: 'user'}}
        component={ProfileScreen}
      />
    </MainNavigator.Navigator>
  );
}

function Navigator() {
  const {state} = useAuth();
  console.log(state);

  if (state.user && state.token) {
    return <MainTabNavigator />;
  }

  return <AuthStack />;
}

export default Navigator;