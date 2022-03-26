import React, {FC, ReactElement, ReactText} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, GestureResponderEvent} from 'react-native';
import {Typography} from '..';
import {useTheme} from '../Theme/theme';
import defaultTheme from '../Theme/defaultTheme';

interface ButtonProps {
  variant?: string;
  size?: string;
  style?: Object;
  children?: ReactElement | ReactText;
  onPress?: (event: GestureResponderEvent) => void;
  color?: string;
  status?: string;
}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  children,
  style,
  onPress,
  ...other
}): JSX.Element => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }
  const styles = theme.override.KoiButton;

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

  return (
    <TouchableOpacity
      {...other}
      onPress={onPress}
      style={[style, styles[variant].base, styles[size].base]}>
      <Typography
        variant={typography}
        style={[styles[variant].text, styles[size].text]}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  style: PropTypes.object,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

Button.defaultProps = {
  variant: 'default',
  size: 'medium',
};
