import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Body,
  DataTable,
  Headline,
  Table,
  TagChip,
  YStack,
} from "@truststack/ui";
import { useMemo } from "react";

export type SoldSustainableVolume = {
  contractNumber: string;
  buyer: string;
  quantity: number;
  unit: string;
  country: string;
};

export type SoldSustainableVolumeTableProps = {
  readonly soldSustainableVolume: SoldSustainableVolume[];
};

export function SoldSustainableVolumeTable({
  soldSustainableVolume,
}: SoldSustainableVolumeTableProps) {
  const columns = [
    columnDef.accessor("contractNumber", {
      header: () => (
        <Table.HeaderTextCell>Contract Number</Table.HeaderTextCell>
      ),
      cell: (info) => (
        <Table.TextCell adjustsFontSizeToFit numberOfLines={1}>
          {info.getValue()}
        </Table.TextCell>
      ),
    }),
    columnDef.accessor("buyer", {
      header: () => <Table.HeaderTextCell>Buyer</Table.HeaderTextCell>,
      cell: (info) => (
        <Table.Cell>
          <TagChip color={"secondary"} density="-1">
            <TagChip.Text>{info.getValue()}</TagChip.Text>
          </TagChip>
        </Table.Cell>
      ),
    }),
    columnDef.accessor("quantity", {
      header: () => (
        <Table.HeaderCell>
          <Table.HeaderLabel>Quantity</Table.HeaderLabel>
        </Table.HeaderCell>
      ),
      cell: (info) => (
        <Table.Cell>
          <Table.Text adjustsFontSizeToFit numberOfLines={1}>
            {info.getValue()} {info.row.original.unit}
          </Table.Text>
        </Table.Cell>
      ),
    }),
    columnDef.accessor("country", {
      header: () => (
        <Table.HeaderCell>
          <Table.HeaderLabel>Country</Table.HeaderLabel>
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
  ];

  const rows = useMemo(() => {
    return soldSustainableVolume ?? defaultData;
  }, [soldSustainableVolume]);

  const table = useReactTable<TData>({
    columns,
    data: rows,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <YStack padding={"$spacing.exp_margin"}>
        <Headline size="small">Sold Sustainable Volume</Headline>
        <Body>Quantity of product traded as sustainable</Body>
      </YStack>

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
    </>
  );
}

const defaultData = [];

const columnDef = createColumnHelper<TData>();

type TData = SoldSustainableVolume;
