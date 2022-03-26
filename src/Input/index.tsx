import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, StyleSheet} from 'react-native';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';
import Icon from '../Icon';

interface InputProps {
  placeholder?: string;
  iconLeft?: string;
  iconRight?: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  iconLeft,
  iconRight,
  onChangeText,
  value,
  ...props
}) => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }
  const styles = theme.override.KoiInput.default;

  return (
    <View style={[const_styles.view, styles.base]}>
      {iconLeft && <Icon style={styles.iconLeft} name={iconLeft} size={32} />}
      <TextInput
        placeholder={placeholder}
        style={[const_styles.input, styles.text]}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
      {iconRight && <Icon style={styles.iconRight} name={iconLeft} size={32} />}
    </View>
  );
};

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
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
