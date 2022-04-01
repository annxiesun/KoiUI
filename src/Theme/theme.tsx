import {createContext, useContext} from 'react';
import {StyleProp, ViewStyle, TextStyle, ImageStyle} from 'react-native';

function createCtx<A extends {} | null>() {
  const ctx = createContext<A | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined) {
      return undefined;
    }
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}

// Usage?:

// We still have to specify a type, but no default!
interface Color {
  [key: string]: string;
}

interface Button {
  base?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  text?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  accentLeft?: StyleProp<any>;
  accentRight?: StyleProp<any>;
}

interface IconButton {
  base?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  icon?: StyleProp<any>;
}

interface Icon {
  base?: StyleProp<any>;
}

interface Input {
  base?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  text?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  accentLeft?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  accentRight?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}

interface Select {
  base?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  wrapper?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  draggableIcon?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}

interface SelectItem {
  base?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  text?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  icon?: StyleProp<any>;
}

interface KoiButton {
  defaultProps?: {
    variant?: string;
    size?: string;
    accentLeft?: React.ReactNode;
    accentRight?: React.ReactNode;
  };
  styleOverrides?: {
    filled?: Button;
    outline?: Button;
    ghost?: Button;
    small?: Button;
    medium?: Button;
    large?: Button;
  };
}

interface KoiIconButton {
  filled?: IconButton;
  outline?: IconButton;
  ghost?: IconButton;
  small?: IconButton;
  medium?: IconButton;
  large?: IconButton;
}

interface KoiIcon {
  default?: Icon;
}

interface KoiInput {
  default?: Input;
  active?: Input;
}

interface KoiSelect {
  default?: Select;
}

interface KoiSelectItem {
  default?: SelectItem;
  active?: SelectItem;
}

interface Palette {
  primary?: Color;
  success?: Color;
  warning?: Color;
  error?: Color;
  basic?: Color;
}

interface Typography {
  h1?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  h2?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  h3?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  body1?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  body2?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}

interface Override {
  KoiButton?: KoiButton;
  KoiIcon?: KoiIcon;
  KoiInput?: KoiInput;
  KoiIconButton?: KoiIconButton;
  KoiSelect?: KoiSelect;
  KoiSelectItem?: KoiSelectItem;
}
export interface Theme {
  palette?: Palette;
  typography?: Typography;
  components?: Override;
  constants?: any;
}

export const [useTheme, ThemeProvider] = createCtx<Theme>();
