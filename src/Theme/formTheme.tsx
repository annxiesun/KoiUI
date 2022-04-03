import {Theme} from './theme';
import {createTheme} from './themeHooks';

import {defaultValues} from './defaultValues';

export const defaultFormTheme: Theme = createTheme({
  components: {
    KoiSelect: {
      default: {
        base: {
          display: 'flex',
          width: '100%',
          alignItems: 'flex-end',
          padding: defaultValues.constants.spacing[1],
        },
        wrapper: {},
        draggableIcon: {},
      },
    },
    KoiSelectItem: {
      default: {
        base: {
          padding: defaultValues.constants.spacing[1],
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        text: {
          color: defaultValues.palette.basic[3],
        },
        icon: {
          fill: 'transparent',
          width: 18,
          height: 18,
        },
      },
      active: {
        base: {
          padding: defaultValues.constants.spacing[1],
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        text: {color: defaultValues.palette.primary.default},
        icon: {
          fill: defaultValues.palette.primary.default,
          width: 24,
          height: 24,
        },
      },
    },
  },
});
