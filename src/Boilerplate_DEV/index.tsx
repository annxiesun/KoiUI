import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';

interface SOMETHINGProps {
  variant?: string;
}

const SOMETHING: FC<SOMETHINGProps> = ({variant}) => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }
  const styles = theme.override.KoiButton;
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default SOMETHING;

SOMETHING.propTypes = {
  variant: PropTypes.string.isRequired,
};

SOMETHING.defaultProps = {
  variant: 'filled',
};
