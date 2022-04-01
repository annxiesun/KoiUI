import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, StyleSheet} from 'react-native';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';

interface InputProps {
  placeholder?: string;
  accentLeft?: React.ReactNode;
  accentRight?: React.ReactNode;
  onChangeText?: (text: string) => void;
  value?: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  accentLeft,
  accentRight,
  onChangeText,
  value,
  ...props
}) => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }
  const styles = theme.components.KoiInput.default;

  return (
    <View style={[const_styles.view, styles.base]}>
      <View style={styles.accentLeft}>{accentLeft && accentLeft}</View>
      <TextInput
        placeholder={placeholder}
        style={[const_styles.input, styles.text]}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
      <View>{accentRight && accentRight}</View>
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
