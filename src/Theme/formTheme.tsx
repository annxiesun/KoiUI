import {Theme} from './theme';
import {createTheme} from './themeHooks';

import {defaultValues} from './defaultValues';

export const defaultFormTheme: Theme = createTheme({
  components: {
    KoiIconButton: {
      filled: {
        base: {
          backgroundColor: defaultValues.palette.primary.default,
          alignSelf: 'flex-start',
        },
        icon: {
          fill: defaultValues.palette.basic[10],
        },
      },
      outline: {
        base: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: defaultValues.palette.primary.default,
          alignSelf: 'flex-start',
        },
        icon: {
          fill: defaultValues.palette.primary.default,
        },
      },
      ghost: {
        base: {
          alignSelf: 'flex-start',
        },
        icon: {
          fill: defaultValues.palette.primary.default,
        },
      },
      small: {
        base: {
          alignItems: 'center',
          paddingVertical: defaultValues.constants.spacing[1],
          paddingHorizontal: defaultValues.constants.spacing[1],
          borderRadius: defaultValues.constants.borderRadius[3],
        },
        icon: {
          width: 24,
          height: 24,
        },
      },
      medium: {
        base: {
          alignItems: 'center',
          paddingVertical: defaultValues.constants.spacing[1],
          paddingHorizontal: defaultValues.constants.spacing[1],
          borderRadius: defaultValues.constants.borderRadius[3],
        },
        icon: {
          width: 32,
          height: 32,
        },
      },
      large: {
        base: {
          alignItems: 'center',
          paddingVertical: defaultValues.constants.spacing[1],
          paddingHorizontal: defaultValues.constants.spacing[1],
          borderRadius: defaultValues.constants.borderRadius[3],
        },
        icon: {
          width: 48,
          height: 48,
        },
      },
    },

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
