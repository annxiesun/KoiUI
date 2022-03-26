import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';
import {Icon as EvaIcon} from 'react-native-eva-icons';

interface IconProps {
  name?: string;
  fill?: string;
  size?: number;
}

const Icon: FC<IconProps> = ({name, fill, size, ...props}) => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }

  return (
    <EvaIcon fill={fill} height={size} width={size} name={name} {...props} />
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
