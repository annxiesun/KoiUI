const createStyles = theme => ({
  default: {
    base: {
      color: 'black',
      borderWidth: 0,
      backgroundColor: theme.palette.basic['800'],
      padding: theme.constants.spacing[1],
      borderRadius: theme.constants.borderRadius[4],
    },
    text: {
      fontFamily: 'Poppins',
      fontSize: 18,
      color: theme.palette.basic['500'],
    },
    accentLeft: {
      marginRight: theme.constants.spacing[2],
    },
    accentRight: {
      marginLeft: theme.constants.spacing[2],
    },
  },
  active: {
    base: {
      color: 'black',
      borderWidth: 0,
      backgroundColor: theme.palette.basic['800'],
      padding: 8,
      borderRadius: theme.constants.borderRadius[4],
    },
    text: {
      fontFamily: 'Poppins',
      fontSize: 16,
    },
    accentLeft: {
      marginRight: theme.constants.spacing[2],
    },
    accentRight: {
      marginLeft: theme.constants.spacing[2],
    },
  },
});

export default createStyles;
