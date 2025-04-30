import { Meta } from '@storybook/react';
import { Text, View } from 'react-native';
import { RenderStage } from './storybook-utils';
import { Button, ButtonProps } from './Button';

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
        <Text>{title}</Text>
        <Button variant="elevated" {...buttonProps}>
            {/* <Button.Icon icon={Plus} /> */}
            <Button.Text>Elevated</Button.Text>
            {/* {loading && <Button.Spinner />} */}
        </Button>
        <Button variant="filled" {...buttonProps}>
            <Button.Text>Filled</Button.Text>
            {/* {loading && <Button.Spinner />} */}
        </Button>
        <Button variant="tonal" {...buttonProps}>
            <Button.Text>Tonal</Button.Text>
            {/* {loading && <Button.Spinner />} */}
        </Button>
        <Button variant="outlined" {...buttonProps}>
            <Button.Text>Outlined</Button.Text>
            {/* {loading && <Button.Spinner />} */}
        </Button>
        <Button variant="text" {...buttonProps}>
            <Button.Text>Text</Button.Text>
            {/* {loading && <Button.Spinner />} */}
        </Button>
        <Button variant="warning" {...buttonProps}>
            <Button.Text>Warning</Button.Text>
            {/* {loading && <Button.Spinner />} */}
        </Button>
    </RenderStage>
);

export const Variants = () => (
    <View className="gap-2 w-full">
        <Render title="Default" />
        <Render title="Disabled" buttonProps={{ disabled: true }} />
        <Render title="Loading" loading />
    </View>
);
