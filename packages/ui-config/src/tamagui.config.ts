import {createTamagui} from "@tamagui/core";
import {shorthands} from "@tamagui/shorthands";
import {fonts} from "./fonts";
import {media} from "./media-queries";
import {themes} from "./theme";
import {tokens} from "./tokens";

export const config = createTamagui({
  defaultFont: "body",
  onlyAllowShorthands: false,
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
