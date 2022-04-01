import {defaultValues} from './defaultValues';
import {defaultFormTheme} from './formTheme';
import {Theme} from './theme';
import {createTheme} from './themeHooks';

const defaultTheme1: Theme = createTheme(defaultValues, {
  components: {
    KoiIcon: {
      default: {
        base: {
          fill: defaultValues.palette.primary.default,
          width: 32,
          height: 32,
        },
      },
    },
    KoiInput: {
      default: {
        base: {
          color: 'black',
          borderWidth: 0,
          backgroundColor: defaultValues.palette.basic['800'],
          padding: defaultValues.constants.spacing[1],
          borderRadius: defaultValues.constants.borderRadius[4],
        },
        text: {
          fontFamily: 'Poppins',
          fontSize: 18,
          color: defaultValues.palette.basic['500'],
        },
        accentLeft: {
          marginRight: defaultValues.constants.spacing[2],
        },
        accentRight: {
          marginLeft: defaultValues.constants.spacing[2],
        },
      },
      active: {
        base: {
          color: 'black',
          borderWidth: 0,
          backgroundColor: defaultValues.palette.basic['800'],
          padding: 8,
          borderRadius: defaultValues.constants.borderRadius[4],
        },
        text: {
          fontFamily: 'Poppins',
          fontSize: 16,
        },
        accentLeft: {
          marginRight: defaultValues.constants.spacing[2],
        },
        accentRight: {
          marginLeft: defaultValues.constants.spacing[2],
        },
      },
    },
  },
});

const defaultTheme = createTheme(defaultFormTheme, defaultTheme1);
export default defaultTheme;
