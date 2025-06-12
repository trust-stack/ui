import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "@tamagui/lucide-icons";
import {
  flexRender,
  Row as TanstackRow,
  Table as TanstackTable,
} from "@tanstack/react-table";
import { Fragment, useContext, useState } from "react";
import {
  Body,
  Chip,
  createStyledContext,
  GetProps,
  IconButton,
  Label,
  ScrollView,
  Spinner,
  styled,
  ThemeableStack,
  Title,
  withStaticProperties,
  XStack,
} from "@truststack/ui";

const TableContext = createStyledContext<{}>({
  density: "0",
  transparent: false,
});

const Row = styled(ThemeableStack, {
  context: TableContext,
  flexDirection: "row",
  gap: 12,
  padding: 8,
  variants: {
    density: {
      "0": {},
      "-1": {
        padding: 6,
        gap: 8,
      },
      "-2": {
        padding: 4,
        gap: 6,
      },
      "-3": {
        padding: 2,
        gap: 2,
      },
    },
    outline: {
      true: {
        borderBottomWidth: "$border.outline",
        borderBottomColor: "$outlineVariant",
      },
      false: {},
    },
  } as const,
  defaultVariants: {
    outline: true,
  },
}) as unknown as typeof ThemeableStack;

const Cell = styled(ThemeableStack, {
  flexDirection: "row",
  alignItems: "center",
  context: TableContext,
  flexBasis: 1,
  flexGrow: 1,
  minHeight: 40,
  marginLeft: 16,
  marginRight: 16,
  variants: {
    align: {
      right: {
        justifyContent: "flex-end",
      },
      center: {
        justifyContent: "center",
      },
    },
    density: {
      "0": {},
      "-1": {
        minHeight: 36,
        marginLeft: 12,
        marginRight: 12,
      },
      "-2": {
        minHeight: 32,
        marginLeft: 8,
        marginRight: 8,
      },
      "-3": {
        minHeight: 28,
        marginLeft: 4,
        marginRight: 4,
      },
    },
    shrink: {
      true: {
        flexGrow: 0,
        flexShrink: 1,
      },
      false: {},
    },
  } as const,
}) as unknown as typeof ThemeableStack;

const Text = styled(Body, {
  name: "TableText",
  numberOfLines: 1,
  adjustsFontSizeToFit: true,
}) as unknown as typeof Body;

const HeaderCell = styled(ThemeableStack, {
  flexDirection: "row",
  alignItems: "center",
  context: TableContext,
  flexBasis: 1,
  flexGrow: 1,
  minHeight: 36,
  marginLeft: 16,
  marginRight: 16,
  variants: {
    align: {
      right: {
        justifyContent: "flex-end",
      },
      center: {
        justifyContent: "center",
      },
    },
    density: {
      "0": {},
      "-1": {
        minHeight: 32,
        marginLeft: 12,
        marginRight: 12,
      },
      "-2": {
        minHeight: 28,
        marginLeft: 8,
        marginRight: 8,
      },
      "-3": {
        minHeight: 24,
        marginLeft: 4,
        marginRight: 4,
      },
    },
    shrink: {
      true: {
        flexGrow: 0,
        flexShrink: 1,
      },
      false: {},
    },
  } as const,
}) as unknown as typeof ThemeableStack;

const HeaderLabel = styled(Label, {
  name: "HeaderLabel",
  size: "large",
  numberOfLines: 1,
  adjustsFontSizeToFit: true,
}) as unknown as typeof Label;

const TableBody = styled(ThemeableStack, {
  flexDirection: "column",
  context: TableContext,
  flexShrink: 1,
}) as unknown as typeof ThemeableStack;

const TableHead = styled(ThemeableStack, {
  flexDirection: "column",
  context: TableContext,
  flexShrink: 1,
  variants: {
    transparent: {
      true: {
        backgroundColor: "transparent",
      },
      false: {
        backgroundColor: "$surface",
      },
    },
  },
}) as unknown as typeof ThemeableStack;

const TableComp = styled(ThemeableStack, {
  context: TableContext,
  borderRadius: "$shape.corner_medium",
  overflow: "hidden",
  variants: {
    density: {
      "0": {},
      "-1": {},
      "-2": {},
      "-3": {},
    },
    transparent: {
      true: {
        backgroundColor: "transparent",
      },
      false: {
        backgroundColor: "$surface",
      },
    },
    rightFlat: {
      true: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      false: {},
    },
    leftFlat: {
      true: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
      false: {},
    },
  } as const,
  defaultVariants: {
    transparent: false,
  },
}) as unknown as typeof ThemeableStack;

const TableTitle = styled(Title, {
  name: "TableTitle",
  textAlign: "center",
}) as unknown as typeof Title;

function TableSpinner(): JSX.Element {
  return (
    <Row
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      padding={12}
    >
      <Spinner />
    </Row>
  );
}

type NoResultsProps = {
  readonly message?: string;
} & GetProps<typeof Row>;

function NoResults({
  message = "No results found.",
  ...props
}: NoResultsProps): JSX.Element {
  return (
    <Row
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      padding={12}
      {...props}
    >
      <Text>{message}</Text>
    </Row>
  );
}

type PaginationProps = {
  readonly onPageChange: (v: number) => void;
  readonly onRowsPerPageChange: (v: number) => void;
  readonly page: number;
  readonly rowsPerPage: number;
};

function Pagination({
  onRowsPerPageChange,
  rowsPerPage,
  page,
  onPageChange,
}: PaginationProps): JSX.Element {
  const { density } = useContext(TableContext as any) as any;

  const padding =
    density === "0" ? 16 : density === "-1" ? 12 : density === "-2" ? 8 : 4;

  return (
    <XStack
      gap={20}
      alignItems="center"
      justifyContent="flex-end"
      width={"100%"}
      padding={padding}
    >
      <Text>
        Showing {page * rowsPerPage + 1} - {page * rowsPerPage + rowsPerPage}
      </Text>

      <XStack gap={12}>
        <Chip
          variant={rowsPerPage == 5 ? "filter" : "assist"}
          onPress={() => onRowsPerPageChange(5)}
        >
          <Chip.Text>5</Chip.Text>
        </Chip>

        <Chip
          variant={rowsPerPage == 10 ? "filter" : "assist"}
          onPress={() => onRowsPerPageChange(10)}
        >
          <Chip.Text>10</Chip.Text>
        </Chip>

        <Chip
          variant={rowsPerPage == 20 ? "filter" : "assist"}
          onPress={() => onRowsPerPageChange(20)}
        >
          <Chip.Text>20</Chip.Text>
        </Chip>
      </XStack>

      <XStack gap={12}>
        <IconButton
          variant={page == 0 ? "standard" : "filled-tertiary"}
          onPress={() => onPageChange(0)}
          disabled={page == 0}
        >
          <IconButton.Icon Icon={ChevronFirst} />
        </IconButton>

        <IconButton
          variant="standard"
          disabled={page == 0}
          onPress={() => onPageChange(page - 1)}
        >
          <IconButton.Icon Icon={ChevronLeft} />
        </IconButton>

        <IconButton variant="standard" onPress={() => onPageChange(page + 1)}>
          <IconButton.Icon Icon={ChevronRight} />
        </IconButton>

        <IconButton variant="standard" disabled>
          <IconButton.Icon Icon={ChevronLast} />
        </IconButton>
      </XStack>
    </XStack>
  );
}

const TextCell = Cell.styleable(({ children, ...props }, ref) => {
  return (
    <Cell {...props} ref={ref}>
      <Text>{children}</Text>
    </Cell>
  );
}) as unknown as typeof Cell;

const HeaderTextCell = HeaderCell.styleable(({ children, ...props }, ref) => {
  return (
    <HeaderCell {...props} ref={ref}>
      <HeaderLabel>{children}</HeaderLabel>
    </HeaderCell>
  );
}) as unknown as typeof HeaderCell;

export const Table = withStaticProperties(TableComp, {
  props: TableContext.Provider,
  Body: TableBody,
  Cell,
  Head: TableHead,
  HeaderCell,
  HeaderLabel,
  HeaderTextCell,
  NoResults,
  Pagination,
  Row,
  Spinner: TableSpinner,
  Text,
  TextCell,
  Title: TableTitle,
}) as typeof TableComp & {
  Body: typeof TableBody;
  Cell: typeof Cell;
  Head: typeof TableHead;
  HeaderCell: typeof HeaderCell;
  HeaderLabel: typeof HeaderLabel;
  HeaderTextCell: typeof HeaderTextCell;
  NoResults: typeof NoResults;
  Pagination: typeof Pagination;
  Row: typeof Row;
  Spinner: typeof TableSpinner;
  Text: typeof Text;
  TextCell: typeof TextCell;
  Title: typeof TableTitle;
};

export type TableProps = GetProps<typeof Table>;
export type TableHeadProps = GetProps<typeof TableHead>;

export type DataTableProps<TData> = {
  readonly table: TanstackTable<TData>;
  readonly pagination?: GetProps<typeof Pagination>;
  readonly loading?: boolean;
  readonly TableHeadProps?: TableHeadProps;
  readonly noResultsMessage?: string;
  readonly scrollViewHeight?: number;
  readonly expandedRow?: (row: TanstackRow<TData>) => JSX.Element;
} & TableProps;

export function DataTable<TData>({
  table,
  loading,
  pagination,
  TableHeadProps = {},
  noResultsMessage,
  expandedRow,
  scrollViewHeight,
  ...props
}: DataTableProps<TData>): JSX.Element {
  const rows = table.getRowCount();
  const noResults = !rows && !loading;
  const headerGroups = table.getHeaderGroups();
  const tableRows = table.getRowModel().rows;

  return (
    <Table backgroundColor={"$surfaceContainerHigh"} {...props}>
      <Table.Head {...TableHeadProps}>
        {headerGroups.map((headerGroup) => (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header, index) => (
              <Fragment key={`header-${index}`}>
                {flexRender(
                  typeof header.column.columnDef.header === "string" ? (
                    <Table.HeaderTextCell>
                      {header.column.columnDef.header}
                    </Table.HeaderTextCell>
                  ) : (
                    header.column.columnDef.header
                  ),
                  header.getContext()
                )}
              </Fragment>
            ))}
          </Table.Row>
        ))}
      </Table.Head>
      <Table.Body>
        <ScrollView
          maxHeight={scrollViewHeight}
          showsVerticalScrollIndicator={true}
        >
          {loading && <Table.Spinner />}

          {noResults && <Table.NoResults message={noResultsMessage} />}

          {tableRows.map((row) => (
            <Fragment key={row.id}>
              <Table.Row key={row.id}>
                {row.getVisibleCells().map((cell, index) => (
                  <Fragment key={`cell-${index}`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Fragment>
                ))}
              </Table.Row>
              {row.getIsExpanded() && expandedRow && expandedRow(row)}
            </Fragment>
          ))}
        </ScrollView>
      </Table.Body>
      {pagination && <Table.Pagination {...pagination} />}
    </Table>
  );
}

type UsePaginationProps = {
  readonly rowsPerPage?: number;
};

export const usePagination = (
  { rowsPerPage: defaultRowsPerPage }: UsePaginationProps = {
    rowsPerPage: 10,
  }
) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultRowsPerPage);

  return {
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    offset: page * rowsPerPage,
    limit: rowsPerPage,
  };
};
