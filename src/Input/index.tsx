import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, StyleSheet} from 'react-native';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';
import createStyles from './styles';

import {InputProps} from '../Props';

var merge = require('lodash.merge');

const Input: FC<InputProps> = ({
  placeholder,
  accentLeft,
  accentRight,
  onChangeText,
  value,
  sx,
  ...props
}) => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }
  const styleOverrides = theme?.components?.KoiInput?.styleOverrides;

  let styles = !styleOverrides
    ? createStyles(theme)
    : merge(createStyles(theme), theme.components.KoiIconButton.styleOverrides);

  let inlineStyles;
  if (typeof sx === 'function') {
    inlineStyles = sx(theme);
  } else if (typeof sx === 'object') {
    inlineStyles = sx;
  }

  return (
    <View style={[const_styles.view, styles.base, inlineStyles?.base]}>
      <View style={[styles.accentLeft, inlineStyles?.accentLeft]}>
        {accentLeft && accentLeft}
      </View>
      <TextInput
        placeholder={placeholder}
        style={[const_styles.input, styles.text, inlineStyles?.text]}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
      <View style={[styles.accentRight, inlineStyles?.accentRight]}>
        {accentRight && accentRight}
      </View>
    </View>
  );
};

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string,
  accentLeft: PropTypes.node,
  accentRight: PropTypes.node,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {};

const const_styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
});
