import React, {FC, ReactElement, ReactText} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View} from 'react-native';
import {Typography} from '..';
import {useTheme, defaultTheme, Theme} from '../Theme';
import createStyles from './styles';

var merge = require('lodash.merge');

interface ButtonProps {
  variant?: 'filled' | 'outline' | 'ghost' | string;
  size?: 'small' | 'medium' | 'large' | string;
  style?: Object;
  children?: ReactElement | ReactText;
  onPress?: () => void;
  color?: string;
  status?: string;
  accentLeft?: React.ReactNode;
  accentRight?: React.ReactNode;
  sx?: ((theme: Theme) => Object) | Object;
}

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

  const styleOverrides = theme?.components.KoiButton?.styleOverrides;

  let styles = !styleOverrides
    ? createStyles(theme)
    : merge(createStyles(theme), theme.components.KoiButton.styleOverrides);

  let defaultProps = theme.components.KoiButton?.defaultProps;
  if (defaultProps) {
    if (!variant) variant = defaultProps.variant || 'filled';
    if (!size) size = defaultProps.size || 'medium';
    if (!accentLeft) accentLeft = defaultProps.accentLeft;
    if (!accentRight) accentRight = defaultProps.accentRight;
  }

  let typography;

  switch (size) {
    case 'small':
      typography = 'body2';
      break;
    case 'large':
      typography = 'h3';
      break;
    default:
      typography = 'body1';
  }

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

Button.propTypes = {
  style: PropTypes.object,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  accentLeft: PropTypes.node,
  accentRight: PropTypes.node,
  sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
