import { Meta } from '@storybook/react';
import { YStack } from 'tamagui';
import { Card } from './Card';
import { RenderStage } from './storybook-utils';

export default {
    component: Card,
} as Meta<typeof Card>;

export const Variants = () => (
    <YStack>
        <RenderStage h={300} backgroundColor={'$surfaceContainerLowest'}>
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
        </RenderStage>
        <RenderStage h={300} backgroundColor={'$surfaceContainerLowest'}>
            <Card w={300} color="primary">
                <Card.Header>
                    <Card.Headline>Primary</Card.Headline>
                    <Card.Subheader>Subheader</Card.Subheader>
                </Card.Header>
            </Card>
            <Card w={300} color="secondary">
                <Card.Header>
                    <Card.Headline>Secondary</Card.Headline>
                    <Card.Subheader>Subheader</Card.Subheader>
                </Card.Header>
            </Card>

            <Card w={300} color="tertiary">
                <Card.Header>
                    <Card.Headline>Tertiary</Card.Headline>
                    <Card.Subheader>Subheader</Card.Subheader>
                </Card.Header>
            </Card>
        </RenderStage>

        <RenderStage h={300} backgroundColor={'$surfaceContainerLowest'}>
            <Card w={300} color="success">
                <Card.Header>
                    <Card.Headline>Success</Card.Headline>
                    <Card.Subheader>Subheader</Card.Subheader>
                </Card.Header>
            </Card>

            <Card w={300} color="error">
                <Card.Header>
                    <Card.Headline>Error</Card.Headline>
                    <Card.Subheader>Subheader</Card.Subheader>
                </Card.Header>
            </Card>

            <Card w={300} color="warning">
                <Card.Header>
                    <Card.Headline>Warning</Card.Headline>
                    <Card.Subheader>Subheader</Card.Subheader>
                </Card.Header>
            </Card>
        </RenderStage>
    </YStack>
);
