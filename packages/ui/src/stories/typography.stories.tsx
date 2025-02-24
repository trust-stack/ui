import { Meta } from '@storybook/react';
import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Paragraph,
    Separator,
    Stack,
    Text,
    View,
} from 'tamagui';

export default {
    title: 'Component Library/Text & Headings',
    decorators: [
        (Story) => (
            <View maw={400}>
                <Story />
            </View>
        ),
    ],
} as Meta;

export const Overview = () => {
    return (
        <Stack gap="$2">
            <Text>Text</Text>

            <Separator />

            <Paragraph>This is a paragraph.</Paragraph>

            <Paragraph fow={'200'}>
                This is a paragraph with 200 font weight.
            </Paragraph>

            <Paragraph fow={'400'}>
                This is a paragraph with 400 font weight.
            </Paragraph>

            <Paragraph fow={'600'}>
                This is a paragraph with 600 font weight.
            </Paragraph>

            <Paragraph fow={'800'}>
                This is a paragraph with 800 font weight.
            </Paragraph>

            <Separator />

            <H1>H1</H1>
            <H2>H2</H2>
            <H3>H3</H3>
            <H4>H4</H4>
            <H5>H5</H5>
            <H6>H6</H6>
        </Stack>
    );
};
