import { Meta } from '@storybook/react';
import { YStack } from 'tamagui';
import { Alert } from './Alert';
import { RenderStage, RenderVariants } from './storybook-utils';

export default {
    component: Alert,
} as Meta<typeof Alert>;

export const Variants = () => (
    <YStack gap={'$4'}>
        <RenderStage>
            <RenderVariants title="standard">
                <Alert severity="info">
                    <Alert.Heading>Info</Alert.Heading>
                    <Alert.Text>Alert info text.</Alert.Text>
                </Alert>

                <Alert severity="warning">
                    <Alert.Heading>Warning</Alert.Heading>
                    <Alert.Text>Alert warning text.</Alert.Text>
                </Alert>

                <Alert severity="success">
                    <Alert.Heading>Success</Alert.Heading>
                    <Alert.Text>Alert success text.</Alert.Text>
                </Alert>

                <Alert severity="error">
                    <Alert.Heading>Error</Alert.Heading>
                    <Alert.Text>Alert error text.</Alert.Text>
                </Alert>
            </RenderVariants>
        </RenderStage>
    </YStack>
);
