import {Theme} from './index';

const defaultTheme: Theme = {
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
      default: '##58A5FF',
    },
  },
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
      filled: {
        base: {
          backgroundColor: 'red',
          borderRadius: 4,
        },
        text: {
          color: 'white',
        },
      },
      outline: {
        base: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: 'red',
          borderRadius: 4,
        },
        text: {
          color: 'red',
          borderRadius: 4,
        },
      },
      ghost: {
        base: {},
        text: {
          color: 'red',
        },
      },
      small: {
        base: {
          paddingVertical: 10,
          paddingHorizontal: 15,
        },
        text: {},
      },
      medium: {
        base: {
          paddingVertical: 15,
          paddingHorizontal: 20,
        },
        text: {},
      },
      large: {
        base: {
          paddingVertical: 20,
          paddingHorizontal: 25,
        },
        text: {},
      },
    },
  },
};

export default defaultTheme;
