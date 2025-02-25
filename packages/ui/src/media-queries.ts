import {createMedia} from "tamagui";

export const media = createMedia({
  hoverNone: {hover: "none"},
  pointerCoarse: {pointer: "coarse"},
  sm: {
    maxWidth: 600,
  },
  compact: {
    maxWidth: 600,
  },
  medium: {maxWidth: 850},
  expanded: {maxWidth: 100000},
});
