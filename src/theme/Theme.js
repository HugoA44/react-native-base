import {extendTheme} from 'native-base';

const colors = {
  primary: {
    50: '#EAF8F9',
    100: '#D5F1F3',
    200: '#C0E9ED',
    300: '#ABE2E7',
    400: '#96DBE2',
    500: '#81D4DC',
    600: '#6CCDD6',
    700: '#57C5D0',
    800: '#42BECA',
    900: '#2DB7C4',
  },
  background: '#0F172A',
};

const getTheme = isDarkMode => {
  console.log(isDarkMode);
  return extendTheme({
    colors: {
      ...colors,
    },
    components: {
      Box: {
        baseStyle: props => {
          return {
            backgroundColor: isDarkMode ? '#0F172A' : '#fff',
          };
        },
      },
    },
  });
};

export {getTheme, colors};
