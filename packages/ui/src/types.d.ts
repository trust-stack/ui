import {config} from "@truststack/ui-config";

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
  interface TypeOverride {
    groupNames(): string | boolean;
  }
}
