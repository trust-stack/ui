import {Theme} from "@truststack/schema";
import {addTheme as addTamaguiTheme} from "@truststack/ui";

export function addTheme(theme: Pick<Theme, "name" | "variables">) {
  addTamaguiTheme({
    name: theme.name,
    insertCSS: true,
    theme: {
      ...theme.variables,
    },
  });
}
