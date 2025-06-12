import {shorthands} from "@tamagui/shorthands";
import {createTamagui} from "tamagui";
import {animations} from "./animations";
import {fonts} from "./fonts";
import {media} from "./media-queries";
import {themes} from "./theme";
import {tokens} from "./tokens";

export const config = createTamagui({
  defaultFont: "body",
  onlyAllowShorthands: false,
  animations,
  shorthands,
  fonts,
  themes,
  tokens,
  media,
  settings: {
    allowedStyleValues: "somewhat-strict",
  },
});

// for the compiler to find it
export default config;
