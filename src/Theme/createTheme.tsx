import {Theme} from './theme';

var merge = require('lodash.merge');

const createTheme = (theme1: Theme, theme2?: Theme): Theme => {
  if (!theme2) {
    return theme1;
  }
  let copy_theme1 = {...theme1};
  let copy_theme2 = {...theme2};
  return merge(copy_theme1, copy_theme2);
};

export default createTheme;
