import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {Icon} from '..';
import {useTheme} from '../Theme/theme';
import defaultTheme from '../Theme/defaultTheme';
import createStyles from './styles';

import {IconButtonProps} from '../Props';

var merge = require('lodash.merge');

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
