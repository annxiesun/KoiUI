import {Theme} from './index';

const createTheme = (theme1: Theme, theme2?: Theme): Theme => {
  if (!theme2) {
    return theme1;
  }
  return {...theme1, ...theme2};
};

export default createTheme;
