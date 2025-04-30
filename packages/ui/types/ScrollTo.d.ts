import { Dispatch, SetStateAction } from "react";
import { FlatList, SectionList } from "react-native";
export type ScrollToProps = {
    readonly listRef: React.RefObject<SectionList> | React.RefObject<FlatList>;
    readonly offset: number;
};
export declare function ScrollTo({ listRef, offset }: ScrollToProps): JSX.Element;
export declare const useScrollTo: () => [React.RefObject<FlatList>, number, Dispatch<SetStateAction<number>>];
export declare const useScrollToSection: () => [React.RefObject<SectionList>, number, Dispatch<SetStateAction<number>>];
//# sourceMappingURL=ScrollTo.d.ts.map