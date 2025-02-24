import { Meta } from '@storybook/react';
import { SubmitButton } from './SubmitButton';
import { RenderStage } from './storybook-utils';

export default {
    component: SubmitButton,
} as Meta<typeof SubmitButton>;

export const Variants = () => (
    <RenderStage>
        <SubmitButton />
        <SubmitButton loading />
        <SubmitButton disabled />
    </RenderStage>
);
