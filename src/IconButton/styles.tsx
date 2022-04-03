const createStyles = theme => ({
  filled: {
    base: {
      backgroundColor: theme.palette.primary.default,
      alignSelf: 'flex-start',
    },
    icon: {
      fill: theme.palette.basic[10],
    },
  },
  outline: {
    base: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.palette.primary.default,
      alignSelf: 'flex-start',
    },
    icon: {
      fill: theme.palette.primary.default,
    },
  },
  ghost: {
    base: {
      alignSelf: 'flex-start',
    },
    icon: {
      fill: theme.palette.primary.default,
    },
  },
  small: {
    base: {
      alignItems: 'center',
      paddingVertical: theme.constants.spacing[1],
      paddingHorizontal: theme.constants.spacing[1],
      borderRadius: theme.constants.borderRadius[3],
    },
    icon: {
      width: 24,
      height: 24,
    },
  },
  medium: {
    base: {
      alignItems: 'center',
      paddingVertical: theme.constants.spacing[1],
      paddingHorizontal: theme.constants.spacing[1],
      borderRadius: theme.constants.borderRadius[3],
    },
    icon: {
      width: 32,
      height: 32,
    },
  },
  large: {
    base: {
      alignItems: 'center',
      paddingVertical: theme.constants.spacing[1],
      paddingHorizontal: theme.constants.spacing[1],
      borderRadius: theme.constants.borderRadius[3],
    },
    icon: {
      width: 48,
      height: 48,
    },
  },
});

export default createStyles;
