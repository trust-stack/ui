import {
  DataTable,
  dateToHumanReadableDay,
  Icon,
  IconButton,
  ScreenLayout,
  Table,
  YStack,
} from "@truststack/ui";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ScreenHeader as TScreenHeader } from "@truststack/schema";
import { ScreenHeader } from "@truststack/render-ui";
import { useMemo } from "react";
import { X, Check, View, Eye } from "@truststack/icons-ui";

type TrustGraph = {
  batch: string;
  supplier: string;
  policies: string[];
  s3: number;
  compliant: boolean;
  date: Date;
};

type Data = {
  readonly header: TScreenHeader;
  readonly trustGraphs: TrustGraph[];
};

export type TrustGraphScreenProps = {
  readonly data: Data;
};

export function TrustGraphsScreen({ data }: TrustGraphScreenProps) {
  const columns = [
    columnDef.accessor("batch", {
      header: () => (
        <Table.HeaderCell>
          <Table.HeaderLabel>Batch</Table.HeaderLabel>
        </Table.HeaderCell>
      ),
      cell: (info) => (
        <Table.Cell>
          <Table.Text>{`batch: ${info.getValue()}`}</Table.Text>
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
    columnDef.accessor("policies", {
      header: () => (
        <Table.HeaderCell>
          <Table.HeaderLabel>Policies</Table.HeaderLabel>
        </Table.HeaderCell>
      ),
      cell: (info) => (
        <Table.Cell>
          <Table.Text adjustsFontSizeToFit numberOfLines={2}>
            {info.getValue().join(", ")}
          </Table.Text>
        </Table.Cell>
      ),
    }),
    columnDef.accessor("s3", {
      header: () => (
        <Table.HeaderCell>
          <Table.HeaderLabel>S3 Emissions</Table.HeaderLabel>
        </Table.HeaderCell>
      ),
      cell: (info) => (
        <Table.Cell>
          <Table.Text adjustsFontSizeToFit numberOfLines={1}>
            {info.getValue() + "t/co2e"}
          </Table.Text>
        </Table.Cell>
      ),
    }),
    columnDef.accessor("compliant", {
      header: () => (
        <Table.HeaderCell>
          <Table.HeaderLabel>Compliant</Table.HeaderLabel>
        </Table.HeaderCell>
      ),
      cell: (info) => (
        <Table.Cell>
          <Icon
            color={info.getValue() ? "$success" : "$error"}
            icon={info.getValue() ? Check : X}
          />
        </Table.Cell>
      ),
    }),
    columnDef.accessor("date", {
      header: () => (
        <Table.HeaderCell>
          <Table.HeaderLabel>Date</Table.HeaderLabel>
        </Table.HeaderCell>
      ),
      cell: (info) => (
        <Table.Cell>
          <Table.Text adjustsFontSizeToFit numberOfLines={1}>
            {dateToHumanReadableDay(info.getValue())}
          </Table.Text>
        </Table.Cell>
      ),
    }),
    columnDef.accessor("actions", {
      header: () => (
        <Table.HeaderCell>
          <Table.HeaderLabel>Actions</Table.HeaderLabel>
        </Table.HeaderCell>
      ),
      cell: () => (
        <Table.Cell>
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
    <ScreenLayout header={<ScreenHeader data={data?.header} />}>
      <YStack padding={"$spacing.exp_margin"}>
        <DataTable table={table} backgroundColor={"transparent"} />
      </YStack>
    </ScreenLayout>
  );
}

const defaultData = [];

const columnDef = createColumnHelper<TData>();

type TData = TrustGraph & {
  actions: string;
};
