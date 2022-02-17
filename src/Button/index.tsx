import React, {FC, ReactElement, ReactText} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {Typography} from '..';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';

interface ButtonProps {
  variant?: string;
  size?: string;
  style?: Object;
  children?: ReactElement | ReactText;
}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  children,
  style,
  ...other
}): JSX.Element => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }
  const styles = theme.override.KoiButton;

  let variantStyle;
  let sizeStyle;
  let typography;

  switch (variant) {
    case 'outline':
      variantStyle = styles.outline;
      break;
    case 'ghost':
      variantStyle = styles.ghost;
      break;
    default:
      variantStyle = styles.filled;
  }

  switch (size) {
    case 'small':
      sizeStyle = styles.small;
      typography = 'body2';
      break;
    case 'large':
      sizeStyle = styles.large;
      typography = 'h3';
      break;
    default:
      sizeStyle = styles.medium;
      typography = 'body1';
  }

  return (
    <View style={style} {...other}>
      <TouchableOpacity style={[variantStyle.base, sizeStyle.base]}>
        <Typography
          variant={typography}
          style={[variantStyle.text, sizeStyle.text]}>
          {children}
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

Button.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

Button.defaultProps = {
  variant: 'filled',
  size: 'medium',
};
