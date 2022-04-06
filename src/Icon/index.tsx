import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';
import {Icon as EvaIcon} from 'react-native-eva-icons';
import createStyles from './styles';

import {IconProps} from '../Props';

var merge = require('lodash.merge');

const Icon: FC<IconProps> = ({name, style, sx, ...props}) => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }

  const styleOverrides = theme?.components?.KoiIcon?.styleOverrides;

  let styles = !styleOverrides
    ? createStyles(theme)
    : merge(createStyles(theme), theme.components.KoiIconButton.styleOverrides);

  let inlineStyles;
  if (typeof sx === 'function') {
    inlineStyles = sx(theme);
  } else if (typeof sx === 'object') {
    inlineStyles = sx;
  }

  return (
    <EvaIcon
      style={[styles?.default?.base, inlineStyles?.base, style]}
      name={name}
      {...props}
    />
  );
};

export default Icon;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

Icon.defaultProps = {};
