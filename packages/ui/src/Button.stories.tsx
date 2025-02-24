import { Meta } from '@storybook/react';
import { Plus } from '@tamagui/lucide-icons';
import { ButtonProps, H4, YStack } from 'tamagui';
import { Button } from './Button';
import { RenderStage } from './storybook-utils';

export default {
    component: Button,
} as Meta<typeof Button>;

type RenderProps = {
    readonly buttonProps?: Partial<ButtonProps>;
    readonly title: string;
    readonly loading?: boolean;
};

const Render = ({ buttonProps = {}, title, loading }: RenderProps) => (
    <RenderStage>
        <H4>{title}</H4>
        <Button variant="elevated" {...buttonProps}>
            <Button.Icon icon={Plus} />
            <Button.Text>Elevated</Button.Text>
            {loading && <Button.Spinner />}
        </Button>
        <Button variant="filled" {...buttonProps}>
            <Button.Text>Filled</Button.Text>
            {loading && <Button.Spinner />}
        </Button>
        <Button variant="tonal" {...buttonProps}>
            <Button.Text>Tonal</Button.Text>
            {loading && <Button.Spinner />}
        </Button>
        <Button variant="outlined" {...buttonProps}>
            <Button.Text>Outlined</Button.Text>
            {loading && <Button.Spinner />}
        </Button>
        <Button variant="text" {...buttonProps}>
            <Button.Text>Text</Button.Text>
            {loading && <Button.Spinner />}
        </Button>
    </RenderStage>
);

export const Variants = () => (
    <YStack gap={'$2'} w="100%">
        <Render title="Default" />
        <Render title="Disabled" buttonProps={{ disabled: true }} />
        <Render title="Loading" loading />
    </YStack>
);
