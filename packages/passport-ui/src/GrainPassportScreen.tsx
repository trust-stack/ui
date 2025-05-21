import {yupResolver} from "@hookform/resolvers/yup";
import {
  FormDateTimePicker,
  FormInput,
  FormProvider,
  FormSelect,
  useForm,
} from "@truststack/form-ui";
import {Save} from "@truststack/icons-ui";
import {
  Alert,
  Button,
  Checkbox,
  Divider,
  Grid,
  ListItem,
  ScrollView,
  Title,
  TopAppBar,
  XStack,
  YStack,
} from "@truststack/ui";
import {Controller, useWatch} from "react-hook-form";
import {FlatList} from "react-native";
import {array, date, number, object, string, TypeOf} from "yup";

export function GrainPassportScreen() {
  const formMethods = useForm<FormValues>({
    resolver: yupResolver(form),
    defaultValues,
  });

  const [paddock] = useWatch({
    control: formMethods.control,
    name: ["paddock"],
  });

  return (
    <FormProvider formMethods={formMethods}>
      <YStack flex={1} flexGrow={1}>
        <TopAppBar size="small">
          <TopAppBar.TopRail>
            <TopAppBar.SmallHeadline>
              Harvest & Consignment
            </TopAppBar.SmallHeadline>
          </TopAppBar.TopRail>
        </TopAppBar>

        <ScrollView
          flex={1}
          padding={"$spacing.compact_margin"}
          showsVerticalScrollIndicator={false}
        >
          <Grid gap={"$spacing.form_gap"}>
            <Grid.Item>
              <Title>Where did the harvest occur?</Title>
            </Grid.Item>
            <Grid.Item>
              <FormSelect<FormValues>
                id={"farm"}
                label="Farm"
                options={[
                  {
                    label: "Coppergone Farms",
                    value: "famr-1",
                  },
                ]}
              />
            </Grid.Item>

            <Grid.Item>
              <FormSelect<FormValues>
                id={"paddock"}
                label="Paddock"
                options={[
                  {
                    label: "Paddock 1",
                    value: "padd-1",
                  },
                ]}
              />
            </Grid.Item>

            {paddock && (
              <Grid.Item>
                <Alert>
                  <Alert.Container>
                    <Alert.Heading>Harvest Declaration</Alert.Heading>
                    <Alert.Text>
                      Paddock 1 was sown with{" "}
                      <Alert.Text fontWeight={"bold"} display={"inline"}>
                        Canola, Bandit TT
                      </Alert.Text>
                      .
                    </Alert.Text>
                    <Alert.Text>
                      The Digital Grain Passport was capture this.
                    </Alert.Text>
                  </Alert.Container>
                </Alert>
              </Grid.Item>
            )}

            <Grid.Item>
              <Title>How much product was harvested?</Title>
            </Grid.Item>

            <Grid.Item>
              <FormInput<FormValues>
                id={"quantity"}
                label="Harvest Amount (t)"
                // endAdornment={<Body>t</Body>}
              />
            </Grid.Item>

            <Grid.Item>
              <Title>When did the harvest occur?</Title>
            </Grid.Item>

            <Grid.Item>
              <FormDateTimePicker<FormValues>
                id={"harvestDate"}
                label="Harvest Date"
                withNow
              />
            </Grid.Item>

            <Grid.Item>
              <Title>Who is the buyer?</Title>
            </Grid.Item>

            <Grid.Item>
              <FormSelect<FormValues>
                id={"partner"}
                label="Partner"
                options={partners}
              />
            </Grid.Item>

            <Grid.Item>
              <Title>What credentials do you want to show the buyer?</Title>
            </Grid.Item>

            <Grid.Item margin={-12}>
              <Controller
                control={formMethods.control}
                name={"credentials"}
                render={({field}) => (
                  <FlatList
                    data={credentials}
                    renderItem={({item}) => (
                      <ListItem>
                        <ListItem.Container>
                          <ListItem.Headline>{item.title}</ListItem.Headline>
                          <ListItem.SupportingText>
                            {item.description}
                          </ListItem.SupportingText>
                        </ListItem.Container>
                        <ListItem.TrailingItem>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onChange={(checked) => {
                              field.onChange(
                                checked
                                  ? [...field.value, item.id]
                                  : field.value.filter((id) => id !== item.id)
                              );
                            }}
                          />
                        </ListItem.TrailingItem>
                      </ListItem>
                    )}
                  />
                )}
              />
            </Grid.Item>
          </Grid>
        </ScrollView>

        <Divider />
        <XStack justifyContent="flex-end" padding={"$spacing.compact_margin"}>
          <Button variant="filled-tonal">
            <Button.Icon Icon={Save} />
            <Button.Text>Submit</Button.Text>
          </Button>
        </XStack>
      </YStack>
    </FormProvider>
  );
}

const form = object({
  farm: string().required(),
  quantity: number().required(),
  paddock: string().required(),
  harvestDate: date().required(),
  partner: string().required(),
  credentials: array().of(string().required()),
});

type FormValues = TypeOf<typeof form>;

const defaultValues: FormValues = {
  farm: "",
  quantity: undefined,
  paddock: "",
  harvestDate: new Date(),
  partner: "",
  credentials: [""],
};

const credentials = [
  {
    title: "EPA Deforestation",
    description: "CIBO labs issued deforestation assessment",
    id: "cibo-deforestation",
  },
  {
    title: "Emissions Profile",
    description: "AIA issued emissions profile",
    id: "aia-emissions",
  },
  {
    title: "Yield Validity",
    description: "DataFarming yield validity for Paddock 1",
    id: "datafarming-yield",
  },
];

const partners = [
  {
    label: "GrainCorp",
    value: "grain-corp",
  },
  {
    label: "Balco",
    value: "balco",
  },
  {
    label: "Viterra",
    value: "viterra",
  },
  {
    label: "ACME Brewery",
    value: "acme-brewery",
  },
];
