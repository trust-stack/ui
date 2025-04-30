import {Meta} from "@storybook/react";
import {Mail, Pencil, Plus} from "@truststack/icons-ui";
import {YStack} from "tamagui";
import {ExtendedFab} from "./ExtendedFab";
import {RenderStage} from "./storybook-utils";

export default {
  component: ExtendedFab,
} as Meta<typeof ExtendedFab>;

export const Variants = () => (
  <YStack>
    <RenderStage>
      <ExtendedFab variant="primary">
        <ExtendedFab.Icon Icon={Plus} />
        <ExtendedFab.Label>Add Item</ExtendedFab.Label>
      </ExtendedFab>

      <ExtendedFab variant="secondary">
        <ExtendedFab.Icon Icon={Pencil} />
        <ExtendedFab.Label>Compose</ExtendedFab.Label>
      </ExtendedFab>

      <ExtendedFab variant="tertiary">
        <ExtendedFab.Icon Icon={Mail} />
        <ExtendedFab.Label>Send</ExtendedFab.Label>
      </ExtendedFab>
    </RenderStage>

    <RenderStage>
      <ExtendedFab variant="primary">
        <ExtendedFab.Label>Add Item</ExtendedFab.Label>
      </ExtendedFab>

      <ExtendedFab variant="secondary">
        <ExtendedFab.Label>Compose</ExtendedFab.Label>
      </ExtendedFab>

      <ExtendedFab variant="tertiary">
        <ExtendedFab.Label>Send</ExtendedFab.Label>
      </ExtendedFab>
    </RenderStage>
  </YStack>
);
