import {defaultValues} from './defaultValues';
import {defaultFormTheme} from './formTheme';
import {Theme} from './theme';
import {createTheme} from './themeHooks';

const defaultTheme1: Theme = createTheme(defaultValues, {
  components: {
    KoiButton: {
      defaultProps: {
        variant: 'filled',
        size: 'medium',
      },
    },
  },
});

const defaultTheme = createTheme(defaultFormTheme, defaultTheme1);
export default defaultTheme;
