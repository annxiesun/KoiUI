import {ReactElement, ReactText} from 'react';
import {ViewProps,StyleProp} from 'react-native';
import {Theme} from '../Theme';

export interface ButtonProps {
  variant?: 'filled' | 'outline' | 'ghost' | string;
  size?: 'small' | 'medium' | 'large' | string;
  style?: Object;
  children?: ReactElement | ReactText;
  onPress?: () => void;
  color?: string;
  status?: string;
  accentLeft?: React.ReactNode;
  accentRight?: React.ReactNode;
  sx?: ((theme: Theme) => Object) | Object;
}

export interface IconProps {
  name?: string;
  style?: StyleProp<any>;
  sx?: ((theme: Theme) => Object) | Object;
}

export interface IconButtonProps {
  variant?: 'filled' | 'outline' | 'ghost' | string;
  size?: 'small' | 'medium' | 'large' | string;
  style?: Object;
  children?: ReactElement | ReactText;
  onPress?: () => void;
  color?: string;
  status?: string;
  name?: string;
  sx?: ((theme: Theme) => Object) | Object;
}

export interface InputProps {
  placeholder?: string;
  accentLeft?: React.ReactNode;
  accentRight?: React.ReactNode;
  onChangeText?: (text: string) => void;
  value?: string;
  sx?: ((theme: Theme) => Object) | Object;
}

export interface SelectProps {
  children?: React.ReactNode | React.ReactNode[];
  value: number;
  label: string;
  cardHeight: number;
  accentLeft?: React.ReactNode;
  accentRight?: React.ReactNode;
  handleChange?: (i: number) => void;
}

export interface SelectItemProps {
  value: number;
  selected?: boolean;
  label: string;
  icon: string;
  handleChange?: (i: number) => void;
}

export interface CardProps extends ViewProps {
  variant?: 'light' | 'dark' | string;
  transparency?: number,
  sx?: ((theme: Theme) => Object) | Object;
  header?: string;
  body?: string;
}