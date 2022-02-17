import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';

interface TypographyProps {
  variant?: string;
}

const Typography: FC<TypographyProps> = ({variant, children, ...other}) => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }

  const typography = theme.typography;

  return (
    <View {...other}>
      <Text style={typography[variant]}>{children}</Text>
    </View>
  );
};

export default Typography;

Typography.propTypes = {
  variant: PropTypes.string.isRequired,
};

Typography.defaultProps = {
  variant: 'body1',
};
