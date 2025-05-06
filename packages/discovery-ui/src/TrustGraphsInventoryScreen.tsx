import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {Check, Eye, File, X} from "@truststack/icons-ui";
import {Breadcrumbs} from "@truststack/nav-ui";
import {ScreenHeader as TScreenHeader} from "@truststack/schema";
import {
  Alert,
  Body,
  Button,
  createStyledContext,
  DataTable,
  dateToHumanReadableDay,
  Dialog,
  Divider,
  Headline,
  Icon,
  IconButton,
  Image,
  ScreenLayout,
  styled,
  Table,
  TagChip,
  Title,
  TopAppBar,
  View,
  ViewProps,
  withStaticProperties,
  XStack,
  YStack,
} from "@truststack/ui";
import {useMemo} from "react";

type InventoryHistory = {
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
  readonly inventoryHistory: InventoryHistory[];
};

export type TrustGraphsInventoryScreen = {
  readonly data: Data;
};

export function TrustGraphsInventoryScreen({data}: TrustGraphsInventoryScreen) {
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
        const row = info.row.getValue("compliant");

        return (
          <Table.Cell>
            <TagChip variant={"success-tonal"}>
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
    return data?.inventoryHistory ?? defaultData;
  }, [data]);

  const table = useReactTable<TData>({
    columns,
    data: rows,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Dialog>
      <ScreenLayout
        header={
          <TopAppBar size="medium" backgroundColor={"transparent"}>
            <TopAppBar.TopRail>
              <TopAppBar.LeadingItemsContainer>
                <Breadcrumbs
                  items={[
                    {
                      label: "Home",
                      href: "/",
                    },
                    {
                      label: "Inventory",
                      href: "/",
                    },
                  ]}
                />
              </TopAppBar.LeadingItemsContainer>

              <TopAppBar.TrailItemsContainer>
                <Dialog.Trigger asChild>
                  <Button variant="tonal-info">
                    <Button.Icon Icon={File} />
                    <Button.Text>Request Export Certificate</Button.Text>
                  </Button>
                </Dialog.Trigger>
              </TopAppBar.TrailItemsContainer>
            </TopAppBar.TopRail>

            <TopAppBar.BottomRail>
              <TopAppBar.MediumHeadline>
                {data?.header.title}
              </TopAppBar.MediumHeadline>
            </TopAppBar.BottomRail>
          </TopAppBar>
        }
      >
        <XStack gap={12} padding={"$spacing.exp_margin"}>
          <SummaryCard variant="info" width={320}>
            <XStack alignItems="flex-end">
              <SummaryCard.Label>2045.23</SummaryCard.Label>
              <SummaryCard.UnitLabel> t</SummaryCard.UnitLabel>
            </XStack>
            <SummaryCard.Divider />
            <SummaryCard.SubLabel>Current Inventory</SummaryCard.SubLabel>
          </SummaryCard>

          <SummaryCard variant="success" width={320}>
            <XStack alignItems="flex-end">
              <SummaryCard.Label>Compliant</SummaryCard.Label>
            </XStack>
            <SummaryCard.Divider />
            <SummaryCard.Description>
              All consignments are US EPA compliant. Chain of Custody is met,
              and export requirements are achievable.
            </SummaryCard.Description>
          </SummaryCard>
        </XStack>

        <YStack padding={"$spacing.exp_margin"}>
          <Headline size="small">Inventory History</Headline>
          <Body>
            The inventory history is a list of all the consignments into this
            inventory location, and associated data found via linked Digital
            Grain Passports.
          </Body>
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
      </ScreenLayout>

      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content minWidth={600} minHeight={400} padding={0}>
          <YStack padding={"$spacing.exp_margin"} flexGrow={1} gap={12}>
            <Dialog.Title>Request Export Certificate</Dialog.Title>

            <XStack justifyContent="center">
              <Image src={"/daff-logo.png"} width={320} height={120} />
            </XStack>

            <Alert>
              <Alert.Icon />
              <Alert.Container>
                <Alert.Heading>Export Worthiness</Alert.Heading>
                <Alert.Text>
                  Based on the consignment history, the bunker is compliant with
                  the <Alert.Text fontWeight="bold">US EPA</Alert.Text> and{" "}
                  <Alert.Text fontWeight="bold">Chain of Custody</Alert.Text>{" "}
                  requirements.
                </Alert.Text>

                <Alert.Text>
                  You can request an export certificate for the bunker by
                  clicking the button below.
                </Alert.Text>

                <Alert.Text>
                  Only product in this bunker system is eligible for export.
                </Alert.Text>
              </Alert.Container>
            </Alert>
          </YStack>

          <XStack
            justifyContent="flex-end"
            gap={12}
            paddingHorizontal={"$spacing.exp_margin"}
            paddingBottom={8}
          >
            <Button variant="text">
              <Button.Icon Icon={X} />
              <Button.Text>Cancel</Button.Text>
            </Button>

            <Button>
              <Button.Icon Icon={Check} />
              <Button.Text>Request</Button.Text>
            </Button>
          </XStack>

          <Divider />

          <XStack
            backgroundColor={"$warningContainer"}
            padding={4}
            justifyContent="center"
            alignItems="center"
          >
            <Title>FOR DEMONSTRATION PURPOSES ONLY</Title>
          </XStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
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

function Item({value, unit, subtitle, ...props}: ItemProps): JSX.Element {
  const [intPart, decimalPart] =
    typeof value === "number" ? splitFloat(value) : [value, ""];

  return (
    <SummaryCard>
      <View {...props} px={12}>
        <YStack gap={4} minWidth={0} flex={1}>
          <View display="inline" minWidth={0} flex={1}>
            <SummaryCard.Label adjustsFontSizeToFit alignSelf="flex-end">
              {intPart || 0}
            </SummaryCard.Label>
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
    </SummaryCard>
  );
}

function splitFloat(num: number): [number, number] {
  const numString = num.toFixed(1).toString();
  const [intPart, decimalPart] = numString.split(".").map(Number);
  return [intPart, decimalPart];
}

const SummaryCardContext = createStyledContext({
  variant: "info",
});

const Frame = styled(YStack, {
  name: "SummaryCardFrame",
  context: SummaryCardContext,
  gap: 8,
  padding: "$spacing.card_body",
  borderRadius: "$shape.corner_m",
  borderWidth: 1,
  variants: {
    variant: {
      info: {
        backgroundColor: "$infoContainer",
        borderColor: "$info",
      },
      success: {
        backgroundColor: "$successContainer",
        borderColor: "$success",
      },
    },
  } as const,
});

const FrameLabel = styled(Headline, {
  name: "SummaryCardLabel",
  context: SummaryCardContext,
  size: "large",
  variants: {
    variant: {
      info: {
        color: "$onInfoContainer",
      },
      success: {
        color: "$onSuccessContainer",
      },
    },
  } as const,
});

const FrameSubLabel = styled(Headline, {
  name: "SummaryCardSubLabel",
  context: SummaryCardContext,
  size: "small",
  variants: {
    variant: {
      info: {
        color: "$onInfoContainer",
      },
      success: {
        color: "$onSuccessContainer",
      },
    },
  } as const,
});

const FrameUnitLabel = styled(Title, {
  name: "SummaryCardUnitLabel",
  context: SummaryCardContext,
  size: "large",
  variants: {
    variant: {
      info: {
        color: "$onInfoContainer",
      },
      success: {
        color: "$onSuccessContainer",
      },
    },
  } as const,
});

const FrameDivider = styled(Divider, {
  name: "SummaryCardDivider",
  context: SummaryCardContext,
  variants: {
    variant: {
      info: {
        borderColor: "$onInfoContainer",
      },
      success: {
        borderColor: "$onSuccessContainer",
      },
    },
  } as const,
});

const FrameDescription = styled(Body, {
  name: "SummaryCardDescription",
  context: SummaryCardContext,
  variants: {
    variant: {
      info: {
        color: "$onInfoContainer",
      },
      success: {
        color: "$onSuccessContainer",
      },
    },
  },
});
const SummaryCard = withStaticProperties(Frame, {
  Props: SummaryCardContext.Provider,
  Label: FrameLabel,
  SubLabel: FrameSubLabel,
  Divider: FrameDivider,
  UnitLabel: FrameUnitLabel,
  Description: FrameDescription,
});
