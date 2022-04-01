const createStyles = theme => ({
  filled: {
    base: {
      backgroundColor: theme.palette.primary.default,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
    },
    accentLeft: {
      fill: theme.palette.basic[10],
    },
    accentRight: {
      fill: theme.palette.basic[10],
    },
  },
  outline: {
    base: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.palette.primary.default,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: theme.palette.primary.default,
    },
    accentLeft: {
      fill: theme.palette.primary.default,
    },
    accentRight: {
      fill: theme.palette.primary.default,
    },
  },
  ghost: {
    base: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: theme.palette.primary.default,
    },
    accentLeft: {
      fill: theme.palette.primary.default,
    },
    accentRight: {
      fill: theme.palette.primary.default,
    },
  },
  small: {
    base: {
      paddingVertical: theme.constants.spacing[1],
      paddingHorizontal: theme.constants.spacing[2],
      borderRadius: theme.constants.borderRadius[3],
    },
    text: {},
    accentLeft: {
      marginRight: theme.constants.spacing[0],
    },
    accentRight: {
      marginLeft: theme.constants.spacing[0],
    },
  },
  medium: {
    base: {
      paddingVertical: theme.constants.spacing[2],
      paddingHorizontal: theme.constants.spacing[4],
      borderRadius: theme.constants.borderRadius[3],
    },
    text: {},
    accentLeft: {
      marginRight: theme.constants.spacing[1],
    },
    accentRight: {
      marginLeft: theme.constants.spacing[1],
    },
  },
  large: {
    base: {
      paddingVertical: theme.constants.spacing[3],
      paddingHorizontal: theme.constants.spacing[5],
      borderRadius: theme.constants.borderRadius[3],
    },
    text: {},
    accentLeft: {
      marginRight: theme.constants.spacing[2],
    },
    accentRight: {
      marginLeft: theme.constants.spacing[2],
    },
  },
});

export default createStyles;
