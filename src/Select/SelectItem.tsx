import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';
import {Typography, Icon} from '..';

interface SelectItemProps {
  value: number;
  selected?: boolean;
  label: string;
  icon: string;
  handleChange?: (i: number) => void;
}

const SelectItem: FC<SelectItemProps> = ({
  selected,
  label,
  handleChange,
  value,
  icon,
  ...props
}) => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }
  const styles = theme.override.KoiSelectItem;

  return (
    <TouchableOpacity
      onPress={() => handleChange && handleChange(value)}
      style={styles[selected ? 'active' : 'default'].base}
      {...props}>
      <Typography
        variant="body1"
        style={[styles[selected ? 'active' : 'default'].text]}>
        {label}
      </Typography>
      {selected && (
        <Icon
          name={icon}
          style={styles[selected ? 'active' : 'default'].icon}
        />
      )}
    </TouchableOpacity>
  );
};

export default SelectItem;

SelectItem.propTypes = {
  value: PropTypes.number,
  selected: PropTypes.bool,
  handleChange: PropTypes.func,
  label: PropTypes.string,
};

SelectItem.defaultProps = {};
