import {Theme as SchemaTheme} from "@truststack/schema";
import {Theme as TamaguiTheme} from "@truststack/ui";
import React, {useEffect} from "react";
import {addTheme} from "./theme";

export type ThemeProviderProps = {
  readonly children: React.ReactNode;
  readonly theme: Pick<SchemaTheme, "name" | "variables">;
};

export function ThemeProvider({
  children,
  theme,
}: ThemeProviderProps): JSX.Element {
  useEffect(() => {
    addTheme(theme);
  }, [theme]);

  return <TamaguiTheme name={theme.name as any}>{children}</TamaguiTheme>;
}
