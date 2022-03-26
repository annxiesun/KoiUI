import {Theme} from './theme';
import createTheme from './createTheme';

const defaultPalette: Theme = createTheme({
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
  },
});

const defaultTheme: Theme = createTheme(defaultPalette, {
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
  override: {
    KoiButton: {
      default: {
        base: {
          backgroundColor: defaultPalette.palette.primary.default,
        },
        text: {
          color: 'white',
        },
      },
      outline: {
        base: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: defaultPalette.palette.primary.default,
        },
        text: {
          color: defaultPalette.palette.primary.default,
        },
      },
      ghost: {
        base: {},
        text: {
          color: defaultPalette.palette.primary.default,
        },
      },
      small: {
        base: {
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 4,
        },
        text: {},
      },
      medium: {
        base: {
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 30,
          borderRadius: 4,
        },
        text: {},
      },
      large: {
        base: {
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 40,
          borderRadius: 4,
        },
        text: {},
      },
    },
    KoiIcon: {
      default: {},
    },
  },
});

export default defaultTheme;
