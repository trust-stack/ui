import {Plus} from "@truststack/icons-ui";
import {Adapt} from "tamagui";
import {Dialog} from "./Dialog";
import {Fab} from "./Fab";
import {Sheet} from "./Sheet";

export type NavFabProps = {
  readonly children?: React.ReactNode;
};

export function NavFab({children}: NavFabProps): JSX.Element {
  return (
    <Dialog modal>
      <Dialog.Trigger asChild style={{borderStyle: "hidden"}}>
        <Fab>
          <Fab.Icon icon={Plus} />
        </Fab>
      </Dialog.Trigger>

      <Adapt when={"sm"} platform="touch">
        <Sheet
          animation={"medium"}
          zIndex={200000}
          modal
          dismissOnOverlayPress
          dismissOnSnapToBottom
        >
          <Sheet.Overlay />
          <Sheet.Handle />
          <Sheet.Frame>
            <Adapt.Contents />
          </Sheet.Frame>
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
