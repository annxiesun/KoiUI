import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';

interface ButtonProps {
  variant: string;
}

const Button = ({variant, size, label}): JSX.Element => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }
  const styles = theme.override.KoiButton;

  let variantStyle;
  let sizeStyle;

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
      break;
    case 'large':
      sizeStyle = styles.large;
      break;
    default:
      sizeStyle = styles.medium;
  }

  return (
    <View>
      {
        <TouchableOpacity style={[variantStyle.base, sizeStyle.base]}>
          <Text style={[variantStyle.text, sizeStyle.text]}>Hello</Text>
        </TouchableOpacity>
      }
    </View>
  );
};

export default Button;

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

Button.defaultProps = {
  variant: 'filled',
  size: 'medium',
};
