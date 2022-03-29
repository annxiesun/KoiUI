import {Theme, createTheme} from '.';
import {defaultValues} from './defaultValues';

export const defaultFormTheme: Theme = createTheme({
  override: {
    KoiButton: {
      default: {
        base: {
          backgroundColor: defaultValues.palette.primary.default,
          display: 'flex',
          flexDirection: 'row',
        },
        text: {
          color: 'white',
        },
      },
      outline: {
        base: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: defaultValues.palette.primary.default,
          display: 'flex',
          flexDirection: 'row',
        },
        text: {
          color: defaultValues.palette.primary.default,
        },
      },
      ghost: {
        base: {
          display: 'flex',
          flexDirection: 'row',
        },
        text: {
          color: defaultValues.palette.primary.default,
        },
      },
      small: {
        base: {
          alignItems: 'center',
          paddingVertical: defaultValues.constants.spacing[1],
          paddingHorizontal: defaultValues.constants.spacing[2],
          borderRadius: defaultValues.constants.borderRadius[3],
        },
        text: {},
      },
      medium: {
        base: {
          alignItems: 'center',
          paddingVertical: defaultValues.constants.spacing[1],
          paddingHorizontal: defaultValues.constants.spacing[4],
          borderRadius: defaultValues.constants.borderRadius[3],
        },
        text: {},
      },
      large: {
        base: {
          alignItems: 'center',
          paddingVertical: defaultValues.constants.spacing[2],
          paddingHorizontal: defaultValues.constants.spacing[5],
          borderRadius: defaultValues.constants.borderRadius[3],
        },
        text: {},
      },
    },

    KoiIconButton: {
      default: {
        base: {
          backgroundColor: defaultValues.palette.primary.default,
        },
        icon: {
          fill: defaultValues.palette.basic[1000],
        },
      },
      outline: {
        base: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: defaultValues.palette.primary.default,
        },
        icon: {
          fill: defaultValues.palette.primary.default,
        },
      },
      ghost: {
        base: {},
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
          color: defaultValues.palette.basic[300],
        },
        icon: {},
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
          width: 18,
          height: 18,
        },
      },
    },
  },
});
