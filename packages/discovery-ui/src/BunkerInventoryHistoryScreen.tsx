import {
  DataTable,
  dateToHumanReadableDay,
  Divider,
  Headline,
  Icon,
  IconButton,
  Table,
  Title,
  ViewProps,
  YStack,
  View,
  XStack,
  Card,
  TopAppBar,
  Chip,
} from "@truststack/ui";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ScreenHeader as TScreenHeader } from "@truststack/schema";
import { Fragment, useMemo } from "react";
import { X, Check, Eye, ArrowDown, File } from "@truststack/icons-ui";
import { Button } from "@truststack/ui";

type InventoryHistory = {
  batch: string;
  supplier: string;
  policies: string[];
  s3: number;
  compliant: boolean;
  date: Date;
};

type Data = {
  readonly header: TScreenHeader;
  readonly inventoryHistory: InventoryHistory[];
};

export type BunkerInventoryHistoryScreenProps = {
  readonly data: Data;
};

export function BunkerInventoryHistoryScreen({
  data,
}: BunkerInventoryHistoryScreenProps) {
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
    return data?.inventoryHistory ?? defaultData;
  }, [data]);

  const table = useReactTable<TData>({
    columns,
    data: rows,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Fragment>
      <TopAppBar size="medium">
        <TopAppBar.TopRail>
          <TopAppBar.LeadingItemsContainer>
            <Chip variant="success-tonal">
              <Chip.Icon Icon={Check} />
              <Chip.Text>US EPA Compliant</Chip.Text>
            </Chip>
          </TopAppBar.LeadingItemsContainer>

          <TopAppBar.TrailItemsContainer>
            <Button variant="tonal-info">
              <Button.Icon Icon={File} />
              <Button.Text>Request Export Certificate</Button.Text>
            </Button>
          </TopAppBar.TrailItemsContainer>
        </TopAppBar.TopRail>

        <TopAppBar.BottomRail>
          <TopAppBar.MediumHeadline>
            {data?.header.title}
          </TopAppBar.MediumHeadline>
        </TopAppBar.BottomRail>
      </TopAppBar>

      <Card m={"$spacing.margin_compact"} width={160}>
        <XStack margin={8}>
          <Item value={"2045.23"} unit="t" subtitle="Current Inventory" />
        </XStack>
      </Card>

      <YStack padding={"$spacing.exp_margin"}>
        <DataTable table={table} backgroundColor={"transparent"} />
      </YStack>
    </Fragment>
  );
}

const defaultData = [];

const columnDef = createColumnHelper<TData>();

type TData = InventoryHistory & {
  actions: string;
};

type ItemProps = {
  readonly value?: number | string;
  readonly unit?: string;
  readonly subtitle?: string;
} & ViewProps;

function Item({ value, unit, subtitle, ...props }: ItemProps): JSX.Element {
  const [intPart, decimalPart] =
    typeof value === "number" ? splitFloat(value) : [value, ""];

  return (
    <View {...props} px={12}>
      <YStack gap={4} minWidth={0} flex={1}>
        <View display="inline" minWidth={0} flex={1}>
          <Headline
            adjustsFontSizeToFit
            numberOfLines={1}
            alignSelf="flex-end"
            marginBottom={0}
            size={"small"}
          >
            {intPart || 0}
          </Headline>
          {!!decimalPart && (
            <Title adjustsFontSizeToFit numberOfLines={1} size={"large"}>
              .{decimalPart}
            </Title>
          )}
          {!!unit && (
            <Title size={"large"} adjustsFontSizeToFit numberOfLines={1}>
              {unit}
            </Title>
          )}
        </View>

        <Divider />

        <Title adjustsFontSizeToFit numberOfLines={1}>
          {subtitle}
        </Title>
      </YStack>
    </View>
  );
}

function splitFloat(num: number): [number, number] {
  const numString = num.toFixed(1).toString();
  const [intPart, decimalPart] = numString.split(".").map(Number);
  return [intPart, decimalPart];
}
