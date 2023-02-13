import {Theme} from './theme';
import {createTheme} from './themeHooks';

export const defaultValues: Theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Poppins',
      fontWeight: '600',
      fontSize: 48,
    },
    h2: {
      fontFamily: 'Poppins',
      fontWeight: '600',
      fontSize: 36,
    },
    h3: {
      fontFamily: 'Poppins',
      fontWeight: '500',
      fontSize: 24,
    },
    body1: {
      fontFamily: 'Poppins',
      fontWeight: '400',
      fontSize: 16,
    },
    body2: {
      fontFamily: 'Poppins',
      fontWeight: '400',
      fontSize: 14,
    },
  },
  palette: {
    success: {
      light: '#F0FDF6',
      default: '#3AE789',
    },
    warning: {
      light: '#FFD37E',
      default: '#FFFBF2',
    },
    error: {
      light: '#FFEEEE',
      default: '#FF5858',
    },
    primary: {
      light: '#EEF6FF',
      default: '#58A5FF',
    },
    basic: {
      1: '#000',
      2: '#222',
      3: '#444',
      4: '#666',
      5: '#888',
      6: '#AAA',
      7: '#CCC',
      8: '#EEE',
      9: '#F4F4F4',
      10: '#FFF',
    },
  },
  constants: {
    borderRadius: [0, 4, 8, 12, 16],
    spacing: [0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 64],
    dropShadow: [''],
    innerShadow: [''],
  },
});
