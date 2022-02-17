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
        },
        text: {
          color: 'red',
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
          borderRadius: 4,
        },
        text: {},
      },
      medium: {
        base: {
          paddingVertical: 10,
          paddingHorizontal: 30,
          borderRadius: 4,
        },
        text: {},
      },
      large: {
        base: {
          paddingVertical: 10,
          paddingHorizontal: 40,
          borderRadius: 4,
        },
        text: {},
      },
    },
  },
};

export default defaultTheme;
