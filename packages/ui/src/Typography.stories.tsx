import { Meta } from '@storybook/react';
import { Stack } from 'tamagui';
import { RenderStage, RenderVariants } from './storybook-utils';
import { Body, Display, Headline, Label, Title } from './typography';

export default {} as Meta;

export const Typographies = () => (
    <Stack>
        <RenderStage h={'$8'}>
            <RenderVariants title="Display">
                <Display size="small">Small</Display>
                <Display size="medium">Medium</Display>
                <Display size="large">Large</Display>
            </RenderVariants>
        </RenderStage>
        <RenderStage h={'$8'}>
            <RenderVariants title="Heading">
                <Headline size="small">Small</Headline>
                <Headline size="medium">Medium</Headline>
                <Headline size="large">Large</Headline>
            </RenderVariants>
        </RenderStage>
        <RenderStage h={'$8'}>
            <RenderVariants title="Title">
                <Title size="small">Small</Title>
                <Title size="medium">Medium</Title>
                <Title size="large">Large</Title>
            </RenderVariants>
        </RenderStage>
        <RenderStage h={'$8'}>
            <RenderVariants title="Body">
                <Body size="small">Small</Body>
                <Body size="medium">Medium</Body>
                <Body size="large">Large</Body>
            </RenderVariants>
        </RenderStage>
        <RenderStage h={'$8'}>
            <RenderVariants title="Label">
                <Label size="small">Small</Label>
                <Label size="medium">Medium</Label>
                <Label size="large">Large</Label>
            </RenderVariants>
        </RenderStage>
    </Stack>
);
