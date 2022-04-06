import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View} from 'react-native';
import {Typography} from '..';
import {useTheme, defaultTheme} from '../Theme';
import createStyles from './styles';

import {ButtonProps} from '../Props';

var merge = require('lodash.merge');

const Button: FC<ButtonProps> = ({
  variant,
  size,
  children,
  style,
  onPress,
  accentLeft,
  accentRight,
  sx,
  ...other
}): JSX.Element => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }

  const styleOverrides = theme?.components?.KoiButton?.styleOverrides;

  let styles = !styleOverrides
    ? createStyles(theme)
    : merge(createStyles(theme), theme.components.KoiButton.styleOverrides);

  let defaultProps = theme.components.KoiButton?.defaultProps;
  if (!variant) variant = defaultProps?.variant || 'filled';
  if (!size) size = defaultProps?.size || 'medium';
  if (!accentLeft) accentLeft = defaultProps?.accentLeft;
  if (!accentRight) accentRight = defaultProps?.accentRight;

  let typography = textSizes[size];

  let inlineStyles;
  if (typeof sx === 'function') {
    inlineStyles = sx(theme);
  } else if (typeof sx === 'object') {
    inlineStyles = sx;
  }

  return (
    <TouchableOpacity
      {...other}
      onPress={onPress}
      style={[
        styles[variant].base,
        styles[size].base,
        style,
        inlineStyles?.base,
      ]}>
      {accentLeft && (
        <View
          style={[
            styles[variant].accentLeft,
            styles[size].accentLeft,
            inlineStyles?.accentLeft,
          ]}>
          {accentLeft}
        </View>
      )}
      <Typography
        variant={typography}
        style={[styles[variant].text, styles[size].text, inlineStyles?.text]}>
        {children}
      </Typography>
      {accentRight && (
        <View
          style={[
            styles[variant].accentRight,
            styles[size].accentRight,
            inlineStyles?.accentRight,
          ]}>
          {accentRight}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const textSizes = {
  small: 'body2',
  medium: 'body1',
  large: 'h3',
};

Button.propTypes = {
  style: PropTypes.object,
  variant: PropTypes.string,
  size: PropTypes.string,
  accentLeft: PropTypes.node,
  accentRight: PropTypes.node,
  sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
