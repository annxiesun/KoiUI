import React, {FC, ReactElement, ReactText} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {Icon} from '..';
import {Theme, useTheme} from '../Theme/theme';
import defaultTheme from '../Theme/defaultTheme';
import createStyles from './styles';

var merge = require('lodash.merge');

interface IconButtonProps {
  variant?: 'filled' | 'outline' | 'ghost' | string;
  size?: 'small' | 'medium' | 'large' | string;
  style?: Object;
  children?: ReactElement | ReactText;
  onPress?: () => void;
  color?: string;
  status?: string;
  name?: string;
  sx?: ((theme: Theme) => Object) | Object;
}

const IconButton: FC<IconButtonProps> = ({
  variant,
  size,
  style,
  onPress,
  name,
  sx,
  ...other
}): JSX.Element => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }
  const styleOverrides = theme?.components?.KoiIconButton?.styleOverrides;

  let styles = !styleOverrides
    ? createStyles(theme)
    : merge(createStyles(theme), theme.components.KoiIconButton.styleOverrides);

  let defaultProps = theme.components.KoiIconButton?.defaultProps;

  if (!variant) variant = defaultProps?.variant || 'filled';
  if (!size) size = defaultProps?.size || 'medium';

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
        styles[variant]?.base,
        styles[size]?.base,
        inlineStyles?.base,
        style,
      ]}>
      <Icon
        name={name}
        style={{
          ...styles[variant]?.icon,
          ...styles[size]?.icon,
          ...inlineStyles?.icon,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

IconButton.propTypes = {
  style: PropTypes.object,
  variant: PropTypes.string,
  size: PropTypes.string,
  name: PropTypes.string.isRequired,
};
