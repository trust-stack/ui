import type {GenericFont} from "tamagui";
import {createFont, isWeb} from "tamagui";

const size = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  5: 15,
  6: 16,
  7: 18,
  8: 21,
  9: 28,
  10: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124,
} as const;

export const createSerifFont = <A extends GenericFont>(
  font: Partial<A> = {}
) => {
  return createFont({
    family: isWeb ? "Roboto Serif, -apple-system" : "Roboto Serif",
    size,
    weight: {
      400: 400,
      500: 500,
    },
    ...(font as any),
  });
};

export const createRobotoFont = <A extends GenericFont>(
  font: Partial<A> = {}
) => {
  return createFont({
    family: isWeb ? "Roboto, -apple-system" : "Roboto",
    size,
    weight: {
      400: 400,
      500: 500,
    },
    ...(font as any),
  });
};

export const fonts = {
  heading: createRobotoFont(),
  body: createRobotoFont(),
  serif: createSerifFont(),
};
