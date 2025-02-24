import {Children} from "react";
import {
  GetProps,
  View,
  ViewProps,
  useMedia,
  withStaticProperties,
} from "tamagui";

type ContainerProps = {
  readonly children:
    | React.ReactElement[]
    | React.ReactElement
    | React.ReactNode
    | React.ReactNode[];
} & ViewProps;

function Container({
  children,
  gap = "$spacing.form_gap",
  ...props
}: ContainerProps): JSX.Element {
  let rowSpan = 0;
  let currentRow: React.ReactNode[] = [];
  const rows: React.ReactNode[][] = [];

  const media = useMedia();

  Children.forEach(children, (child, index) => {
    // Child span
    let childSpan = media?.compact
      ? child?.props?.compact
      : media?.medium
      ? child?.props?.medium
      : media?.expanded
      ? child?.props?.exp
      : 12;

    if (!childSpan) childSpan = 12;

    if (childSpan) {
      // If overflowing row
      if (rowSpan + childSpan > 12) {
        if (12 - rowSpan > 0)
          currentRow.push(<View flex={12 - rowSpan} key={`filler-${index}`} />);

        rows.push(currentRow);

        // Reset to next row
        currentRow = [];
        rowSpan = 0;
      }

      // Push grid item to row
      currentRow.push(child);

      // Increment row span counter
      rowSpan += childSpan;
    }
  });

  // Ensure to push final row to render
  if (currentRow?.length > 0) {
    // Check if final row needs a spacer
    if (rowSpan < 12)
      currentRow.push(<View flex={12 - rowSpan} key={`final-row`} />);
    rows.push(currentRow);
  }

  return (
    <View
      display={"flex"}
      flexDirection="column"
      width={"100%"}
      {...props}
      gap={gap}
    >
      {rows.map((row, index) => (
        <View
          display="flex"
          flexDirection="row"
          gap={gap}
          key={`grid-row-${index}`}
          width={"100%"}
        >
          {row}
        </View>
      ))}
    </View>
  );
}

type ItemProps = {
  readonly exp?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  readonly compact?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  readonly medium?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  readonly children?: React.ReactNode;
} & ViewProps;

function Item({
  children,
  exp = 12,
  compact = 12,
  medium = 12,
  ...props
}: ItemProps): JSX.Element {
  const media = useMedia();

  const flex = media?.compact
    ? compact
    : media?.medium
    ? medium
    : media?.expanded
    ? exp
    : exp;

  return (
    <View {...props} flex={flex} width={0}>
      {children}
    </View>
  );
}

export const Grid = withStaticProperties(Container, {
  Item,
});

export type GridProps = GetProps<typeof Grid>;
