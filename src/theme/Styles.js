import {StyleSheet} from 'react-native';
import {colors} from './Theme';

const tabBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: colors.background,
    paddingVertical: 10,
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
  },
});

const loginStyle = StyleSheet.create({
  input: {
    marginVertical: 30,
  },
  button: {
    marginVertical: 30,
  },
});

export {tabBarStyle, loginStyle};
