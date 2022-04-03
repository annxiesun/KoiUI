import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Theme, useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';
import {Icon as EvaIcon} from 'react-native-eva-icons';
import {StyleProp} from 'react-native';
import createStyles from './styles';

var merge = require('lodash.merge');

interface IconProps {
  name?: string;
  style?: StyleProp<any>;
  sx?: ((theme: Theme) => Object) | Object;
}

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
