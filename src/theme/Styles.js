import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from './Theme';

const tabBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: colors.background,
  },
  button: {
    flex: 1,
    flexDireciton: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: colors.primary[50],
  },
  buttonTextSelected: {
    textAlign: 'center',
    color: colors.primary[500],
    // fontWeight: 'bold',
  },
});

export {tabBarStyle};
