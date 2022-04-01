import React, {FC, ReactElement, ReactText} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {Icon} from '..';
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
  name?: string;
}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  style,
  onPress,
  name,
  ...other
}): JSX.Element => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }
  const styles = theme.components.KoiIconButton;

  return (
    <TouchableOpacity
      {...other}
      onPress={onPress}
      style={[style, styles[variant].base, styles[size].base]}>
      <Icon
        name={name}
        style={{...styles[variant].icon, ...styles[size].icon}}
      />
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  style: PropTypes.object,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Button.defaultProps = {
  variant: 'filled',
  size: 'medium',
};
