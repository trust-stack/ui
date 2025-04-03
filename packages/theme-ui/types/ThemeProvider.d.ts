import { Theme as SchemaTheme } from "@truststack/schema";
import React from "react";
export type ThemeProviderProps = {
    readonly children: React.ReactNode;
    readonly theme: Pick<SchemaTheme, "name" | "variables">;
};
export declare function ThemeProvider({ children, theme, }: ThemeProviderProps): JSX.Element;
//# sourceMappingURL=ThemeProvider.d.ts.map