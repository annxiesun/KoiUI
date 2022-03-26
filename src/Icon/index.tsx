import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';
import {Icon as EvaIcon} from 'react-native-eva-icons';
import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

interface IconProps {
  name?: string;
  fill?: string;
  size?: number;
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}

const Icon: FC<IconProps> = ({name, fill, size, style, ...props}) => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }

  return (
    <EvaIcon
      style={style}
      fill={fill}
      height={size}
      width={size}
      name={name}
      {...props}
    />
  );
};

export default Icon;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  fill: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  fill: 'black',
  size: 32,
};
