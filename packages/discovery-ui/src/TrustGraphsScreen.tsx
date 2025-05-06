import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {Check, Eye, X} from "@truststack/icons-ui";
import {Breadcrumbs} from "@truststack/nav-ui";
import {ScreenHeader as TScreenHeader} from "@truststack/schema";
import {
  DataTable,
  dateToHumanReadableDay,
  Icon,
  IconButton,
  ScreenLayout,
  Table,
  TagChip,
  TopAppBar,
} from "@truststack/ui";
import {useMemo} from "react";

type TrustGraph = {
  batch: string;
  supplier: string;
  policies: string[];
  s3: number;
  compliant: boolean;
  declaration: string;
  date: Date;
};

type Data = {
  readonly header: TScreenHeader;
  readonly trustGraphs: TrustGraph[];
};

export type TrustGraphScreenProps = {
  readonly data: Data;
};

export function TrustGraphsScreen({data}: TrustGraphScreenProps) {
  const columns = [
    columnDef.accessor("date", {
      header: () => <Table.HeaderTextCell>Received At</Table.HeaderTextCell>,
      cell: (info) => (
        <Table.TextCell adjustsFontSizeToFit numberOfLines={1}>
          {dateToHumanReadableDay(info.getValue())}
        </Table.TextCell>
      ),
    }),
    columnDef.accessor("batch", {
      header: () => <Table.HeaderTextCell>Batch</Table.HeaderTextCell>,
      cell: (info) => (
        <Table.Cell>
          <TagChip color={"secondary"} density="-1">
            <TagChip.Text>{info.getValue()}</TagChip.Text>
          </TagChip>
        </Table.Cell>
      ),
    }),
    columnDef.accessor("supplier", {
      header: () => (
        <Table.HeaderCell>
          <Table.HeaderLabel>Supplier</Table.HeaderLabel>
        </Table.HeaderCell>
      ),
      cell: (info) => (
        <Table.Cell>
          <Table.Text adjustsFontSizeToFit numberOfLines={1}>
            {info.getValue()}
          </Table.Text>
        </Table.Cell>
      ),
    }),
    columnDef.accessor("declaration", {
      header: () => (
        <Table.HeaderCell>
          <Table.HeaderLabel>EPR</Table.HeaderLabel>
        </Table.HeaderCell>
      ),
      cell: (info) => (
        <Table.Cell>
          <Table.Text adjustsFontSizeToFit numberOfLines={1}>
            {info.getValue()}
          </Table.Text>
        </Table.Cell>
      ),
    }),

    columnDef.accessor("s3", {
      header: () => (
        <Table.HeaderCell>
          <Table.HeaderLabel>S3 (t/co2e)</Table.HeaderLabel>
        </Table.HeaderCell>
      ),
      cell: (info) => (
        <Table.Cell>
          <Table.Text adjustsFontSizeToFit numberOfLines={1}>
            {info.getValue()}
          </Table.Text>
        </Table.Cell>
      ),
    }),

    columnDef.accessor("policies", {
      header: () => <Table.HeaderTextCell>Policies</Table.HeaderTextCell>,
      cell: (info) => {
        const row = info.row.original.compliant;

        return (
          <Table.Cell>
            <TagChip variant={row ? "success-tonal" : "error-tonal"}>
              <TagChip.Icon Icon={row ? Check : X} />
              <TagChip.Text>{info.getValue().join(", ")}</TagChip.Text>
            </TagChip>
          </Table.Cell>
        );
      },
    }),

    columnDef.accessor("actions", {
      header: () => (
        <Table.HeaderTextCell align="right" maxWidth={60}>
          Actions
        </Table.HeaderTextCell>
      ),
      cell: () => (
        <Table.Cell align="right" maxWidth={60}>
          <IconButton>
            <Icon Icon={Eye} />
          </IconButton>
        </Table.Cell>
      ),
    }),
  ];

  const rows = useMemo(() => {
    return data?.trustGraphs ?? defaultData;
  }, [data]);

  const table = useReactTable<TData>({
    columns,
    data: rows,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <ScreenLayout
      header={
        <TopAppBar backgroundColor={"transparent"} size="medium">
          <TopAppBar.TopRail>
            <TopAppBar.LeadingItemsContainer>
              <Breadcrumbs
                items={[
                  {label: "Home", href: "/"},
                  {label: "Consignments", href: "/"},
                ]}
              />
            </TopAppBar.LeadingItemsContainer>
          </TopAppBar.TopRail>
          <TopAppBar.BottomRail>
            <TopAppBar.MediumHeadline>
              Recent Consignments
            </TopAppBar.MediumHeadline>
          </TopAppBar.BottomRail>
        </TopAppBar>
      }
    >
      <DataTable
        table={table}
        backgroundColor={"transparent"}
        pagination={{
          page: 1,
          onPageChange: () => {},
          rowsPerPage: 10,
          onRowsPerPageChange: () => {},
        }}
      />
    </ScreenLayout>
  );
}

const defaultData = [];

const columnDef = createColumnHelper<TData>();

type TData = TrustGraph & {
  actions: string;
};
