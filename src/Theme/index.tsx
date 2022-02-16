import {createContext, useContext} from 'react';

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
interface Component {
  [key: string]: string;
}

interface Palette {
  primary: Component;
  success: Component;
  warning: Component;
  error: Component;
}

interface Override {
  [key: string]: Component;
}
interface Theme {
  palette: Palette;
  override: Override;
}

export const [useTheme, ThemeProvider] = createCtx<Theme>();
