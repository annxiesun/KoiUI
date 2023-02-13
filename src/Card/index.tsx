import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {useTheme} from '../Theme';
import createStyles from './styles';
import defaultTheme from '../Theme/defaultTheme';
import {CardProps} from '../Props';
import Typography from '../Typography';

var merge = require('lodash.merge');

const Card: FC<CardProps> = ({
  variant,
  transparency,
  style,
  sx,
  header,
  body,
  ...props
}) => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }

  const styleOverrides = theme?.components?.KoiCard?.styleOverrides;

  let styles = !styleOverrides
    ? createStyles(theme)
    : merge(createStyles(theme), styleOverrides);

  let inlineStyles;
  if (typeof sx === 'function') {
    inlineStyles = sx(theme);
  } else if (typeof sx === 'object') {
    inlineStyles = sx;
  }

  let defaultProps = theme.components.KoiCard?.defaultProps;
  if (!transparency) transparency = defaultProps?.transparency || 3;
  if (!variant) variant = defaultProps?.variant || 'default';

  return (
    <View
      style={[
        inlineStyles?.base,
        style,
        styles[variant]?.base,
        styles[variant]?.base[`t${transparency}`],
      ]}
      {...props}>
      <Typography style={[inlineStyles?.header]} variant="h3">
        {header}
      </Typography>

      <Typography style={[inlineStyles?.text]} variant="body2">
        {body}
      </Typography>
    </View>
  );
};

export default Card;

Card.propTypes = {
  transparency: PropTypes.number,
};

Card.defaultProps = {
  transparency: 3,
};
