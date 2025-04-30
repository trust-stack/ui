import {ChevronUp} from "@truststack/icons-ui";
import {Dispatch, SetStateAction, useRef, useState} from "react";
import {FlatList, SectionList} from "react-native";
import {AnimatePresence, View} from "tamagui";
import {Chip} from "./Chip";

export type ScrollToProps = {
  readonly listRef: React.RefObject<SectionList> | React.RefObject<FlatList>;
  readonly offset: number;
};

export function ScrollTo({listRef, offset}: ScrollToProps): JSX.Element {
  const show = offset > 300;

  return (
    <AnimatePresence>
      {show && (
        <View
          position="absolute"
          bottom={10}
          zIndex={999}
          animation="bouncy"
          left={0}
          right={0}
          enterStyle={{
            opacity: 0,
            y: -10,
            scale: 0.9,
          }}
          exitStyle={{
            opacity: 0,
            y: 10,
            scale: 0.9,
          }}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          pointerEvents="none"
        >
          <Chip
            pointerEvents="auto"
            variant="filter"
            onPress={() => {
              if (listRef.current instanceof FlatList)
                listRef.current?.scrollToOffset({
                  offset: 0,
                  animated: true,
                });

              if (listRef.current instanceof SectionList)
                listRef.current?.scrollToLocation({
                  animated: true,
                  itemIndex: 0,
                  sectionIndex: 0,
                });
            }}
          >
            <Chip.Icon Icon={ChevronUp} />
            <Chip.Text>Scroll To Top</Chip.Text>
          </Chip>
        </View>
      )}
    </AnimatePresence>
  );
}

export const useScrollTo = () => {
  const [offset, setOffset] = useState<number>(0);
  const listRef = useRef<FlatList>(null);

  return [listRef, offset, setOffset] as [
    React.RefObject<FlatList>,
    number,
    Dispatch<SetStateAction<number>>
  ];
};

export const useScrollToSection = () => {
  const [offset, setOffset] = useState<number>(0);
  const listRef = useRef<SectionList>(null);

  return [listRef, offset, setOffset] as [
    React.RefObject<SectionList>,
    number,
    Dispatch<SetStateAction<number>>
  ];
};
