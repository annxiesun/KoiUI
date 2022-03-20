import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';

interface TypographyProps {
  variant?: string;
  style?: object;
}

const Typography: FC<TypographyProps> = ({
  variant,
  children,
  style,
  ...other
}) => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }

  const typography = theme.typography;

  return (
    <Text {...other} style={[style, typography[variant]]}>
      {children}
    </Text>
  );
};

export default Typography;

Typography.propTypes = {
  variant: PropTypes.string.isRequired,
};

Typography.defaultProps = {
  variant: 'body1',
};
