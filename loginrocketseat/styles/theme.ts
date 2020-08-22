import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Roboto, stystem-ui, sans-serif',
    heading: 'Roboto, stystem-ui, sans-serif',
    mono: 'Menlo, monospace',
  },

  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },

  //border radius
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },

  fontSizes: {
    ...theme.fontSizes,
    '6xl': '54px',
  },

  colors: {
    ...theme.colors,
    purple: {
      ...theme.colors.purple,
      500: '#8257e5',
    },

    gray: {
      ...theme.colors.gray,
      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      800: '#121214',
    },
  },
};

export default customTheme;
