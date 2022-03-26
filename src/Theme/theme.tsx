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

// Usage:

// We still have to specify a type, but no default!
interface Color {
  [key: string]: string;
}

interface Button {
  base: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  text: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}

interface Icon {}

interface KoiButton {
  default: Button;
  outline: Button;
  ghost: Button;
  small: Button;
  medium: Button;
  large: Button;
}

interface KoiIcon {
  default: Icon;
}

interface Palette {
  primary: Color;
  success: Color;
  warning: Color;
  error: Color;
}

interface Typography {
  h1?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  h2?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  h3?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  body1?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  body2?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}

interface Override {
  KoiButton: KoiButton;
  KoiIcon: KoiIcon;
}
export interface Theme {
  palette?: Palette;
  typography?: Typography;
  override?: Override;
}

export const [useTheme, ThemeProvider] = createCtx<Theme>();
