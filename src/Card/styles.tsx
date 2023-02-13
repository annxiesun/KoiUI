const createStyles = theme => ({
  default: {
    base: {
      backgroundColor: 'white',
      borderRadius: theme.constants.borderRadius[2],
      padding: theme.constants.spacing[4],

      t0: {
        opacity: 0
      },
      t1: {
        opacity: 0.2
      },
      t2: {
        opacity: 0.4
      },
      t3: {
        opacity: 0.6
      },
      t4: {
        opacity: 0.8
      },
      t5: {
        opacity: 1.0
      },
    }
  },
});

export default createStyles;
