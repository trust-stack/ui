import { GetProps, ViewProps } from "tamagui";
type ContainerProps = {
    readonly children: React.ReactElement[] | React.ReactElement | React.ReactNode | React.ReactNode[];
} & ViewProps;
declare function Container({ children, gap, ...props }: ContainerProps): JSX.Element;
type ItemProps = {
    readonly exp?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    readonly compact?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    readonly medium?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    readonly children?: React.ReactNode;
} & ViewProps;
declare function Item({ children, exp, compact, medium, ...props }: ItemProps): JSX.Element;
export declare const Grid: typeof Container & {
    Item: typeof Item;
};
export type GridProps = GetProps<typeof Grid>;
export {};
//# sourceMappingURL=Grid.d.ts.map