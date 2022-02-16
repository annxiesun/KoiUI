import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '../Theme';

interface ButtonProps {
  variant: string;
}

const Button = ({variant, label}): JSX.Element => {

  const theme = useTheme();
  console.log(theme);

  return (
    <View>
      {
        <TouchableOpacity style={theme ? theme.override.KoiButton : null}>
          <Text style={theme ? theme.override.KoiButton : null}>Hello</Text>
        </TouchableOpacity>
      }
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {},
});
