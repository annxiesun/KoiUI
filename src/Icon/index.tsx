import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';
import {Icon as EvaIcon} from 'react-native-eva-icons';
import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

interface IconProps {
  name?: string;
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}

const Icon: FC<IconProps> = ({name, style, ...props}) => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }

  const styles = theme.components.KoiIcon.default;
  return <EvaIcon style={[styles.base, style]} name={name} {...props} />;
};

export default Icon;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

Icon.defaultProps = {};
