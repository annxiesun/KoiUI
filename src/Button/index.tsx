import React, {FC, ReactElement, ReactText} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View} from 'react-native';
import {Typography} from '..';
import {useTheme} from '../Theme/theme';
import defaultTheme from '../Theme/defaultTheme';

interface ButtonProps {
  variant?: string;
  size?: string;
  style?: Object;
  children?: ReactElement | ReactText;
  onPress?: () => void;
  color?: string;
  status?: string;
  accentLeft?: React.ReactNode;
  accentRight?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  children,
  style,
  onPress,
  accentLeft,
  accentRight,
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
      {accentLeft && (
        <View style={[styles[variant].accentLeft, styles[size].accentLeft]}>
          {accentLeft}
        </View>
      )}
      <Typography
        variant={typography}
        style={[styles[variant].text, styles[size].text]}>
        {children}
      </Typography>
      {accentRight && (
        <View style={[styles[variant].accentRight, styles[size].accentRight]}>
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
};

Button.defaultProps = {
  variant: 'default',
  size: 'medium',
};
