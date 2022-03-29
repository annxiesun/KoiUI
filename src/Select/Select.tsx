import React, {FC, useRef} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '../Theme';
import defaultTheme from '../Theme/defaultTheme';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Button} from '..';

interface SelectProps {
  children?: React.ReactNode | React.ReactNode[];
  value: number;
  label: string;
  cardHeight: number;
  accentLeft?: React.ReactNode;
  accentRight?: React.ReactNode;
  handleChange?: (i: number) => void;
}

const Select: FC<SelectProps> = ({
  children,
  handleChange,
  value,
  label,
  cardHeight,
  accentRight,
  accentLeft,
  ...props
}) => {
  var theme = useTheme();
  if (theme === undefined) {
    theme = defaultTheme;
  }
  const styles = theme.override.KoiSelect.default;
  const refRBSheet = useRef<any>(null);

  return (
    <>
      <Button
        variant="ghost"
        onPress={() =>
          refRBSheet.current !== null && refRBSheet?.current?.open()
        }
        accentLeft={accentLeft}
        accentRight={accentRight}
        {...props}>
        {label}
      </Button>
      <RBSheet
        height={cardHeight}
        customStyles={{
          wrapper: styles.wrapper,
          container: styles.base,
          draggableIcon: styles.draggableIcon,
        }}
        ref={refRBSheet}>
        {React.Children.map(children, (child, i) => {
          return React.cloneElement(child as React.ReactElement<any>, {
            selected: value === i,
            handleChange: handleChange,
            key: i,
          });
        })}
      </RBSheet>
    </>
  );
};

export default Select;

Select.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  label: PropTypes.string,
  handleChange: PropTypes.func,
};

Select.defaultProps = {};
