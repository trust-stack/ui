import {Meta} from "@storybook/react";
import {Calendar, Check, Heart, X} from "@truststack/icons-ui";
import {H1, H2, H3, H4, H5, H6, Paragraph, View, XStack} from "tamagui";
import {Alert} from "../Alert";
import {Button} from "../Button";
import {Card} from "../Card";
import {Chip} from "../Chip";
import {Divider} from "../Divider";
import {IconButton} from "../IconButton";
import {SearchBar} from "../Search";
import {Spinner} from "../Spinner";

export default {
  title: "Component Library/Component Overview",
  decorators: [
    (Story) => (
      <View maw={1200} m="auto">
        <Story />
      </View>
    ),
  ],
} as Meta;

const options = [
  {label: "Option A", value: "A"},
  {label: "Option B", value: "B"},
];

export const Overview = () => {
  return (
    <View dsp="flex" gap={"$4"} bg={"$background"} p={"$2"}>
      <XStack gap={"$4"}>
        <Card w={300}>
          <Card.Header>
            <Card.Headline>Elevated</Card.Headline>
            <Card.Subheader>Subheader</Card.Subheader>
          </Card.Header>
        </Card>

        <Card variant="filled" w={300}>
          <Card.Header>
            <Card.Headline>Filled</Card.Headline>
            <Card.Subheader>Subheader</Card.Subheader>
          </Card.Header>
        </Card>
        <Card variant="outlined" w={300}>
          <Card.Header>
            <Card.Headline>Outlined</Card.Headline>
            <Card.Subheader>Subheader</Card.Subheader>
          </Card.Header>
        </Card>
      </XStack>

      <Divider />

      <XStack gap={"$4"}>
        <Button>
          <Button.Text>Button</Button.Text>
        </Button>
        <Button variant="outlined">
          <Button.Text>Button</Button.Text>
        </Button>
        <Button variant="tonal">
          <Button.Text>Button</Button.Text>
        </Button>
        <Button variant="elevated">
          <Button.Icon icon={Check} />
          <Button.Text>Button</Button.Text>
        </Button>
        <Button variant="text">
          <Button.Text>Button</Button.Text>
        </Button>
      </XStack>

      <XStack gap="$4">
        <IconButton variant="filled">
          <IconButton.Icon icon={Heart} />
        </IconButton>

        <IconButton variant="filled-tonal">
          <IconButton.Icon icon={Heart} />
        </IconButton>

        <IconButton variant="outlined">
          <IconButton.Icon icon={Heart} />
        </IconButton>

        <IconButton variant="standard">
          <IconButton.Icon icon={Heart} />
        </IconButton>
      </XStack>

      <XStack gap={"$4"}>
        <Spinner />
        <Spinner size="large" />
      </XStack>

      <XStack gap={"$4"}>
        <Chip>
          <Chip.Icon icon={Calendar} />
          <Chip.Text>Assist</Chip.Text>
        </Chip>

        <Chip variant="filter">
          <Chip.Icon icon={Check} />
          <Chip.Text>Filter</Chip.Text>
        </Chip>

        <Chip variant="input">
          <Chip.Text>Input</Chip.Text>
          <Chip.Icon icon={X} />
        </Chip>

        <Chip variant="suggestion">
          <Chip.Text>Suggestion</Chip.Text>
        </Chip>
      </XStack>

      <XStack>
        <SearchBar />
      </XStack>

      <XStack gap={"$4"}>
        <Alert severity="info">
          <Alert.Container>
            <Alert.Heading>Info</Alert.Heading>
            <Alert.Text>Alert info text.</Alert.Text>
          </Alert.Container>
        </Alert>

        <Alert severity="warning">
          <Alert.Container>
            <Alert.Heading>Warning</Alert.Heading>
            <Alert.Text>Alert warning text.</Alert.Text>
          </Alert.Container>
        </Alert>

        <Alert severity="success">
          <Alert.Container>
            <Alert.Heading>Success</Alert.Heading>
            <Alert.Text>Alert success text.</Alert.Text>
          </Alert.Container>
        </Alert>

        <Alert severity="error">
          <Alert.Container>
            <Alert.Heading>Error</Alert.Heading>
            <Alert.Text>Alert error text.</Alert.Text>
          </Alert.Container>
        </Alert>
      </XStack>

      <XStack gap={"$4"} ai="center">
        <H1>H1</H1>
        <H2>H2</H2>
        <H3>H3</H3>
        <H4>H4</H4>
        <H5>H5</H5>
        <H6>H6</H6>
      </XStack>

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    </View>
  );
};
