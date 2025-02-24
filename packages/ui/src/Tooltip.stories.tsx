import { Meta } from '@storybook/react';
import { Button } from './Button';
import { Tooltip } from './Tooltip';
import { RenderStage } from './storybook-utils';
import { Body } from './typography';

export default {
    component: Tooltip,
} as Meta<typeof Tooltip>;

export const Variants = () => {
    return (
        <RenderStage gap={100}>
            <Tooltip>
                <Tooltip.Trigger asChild>
                    <Body>Plain</Body>
                </Tooltip.Trigger>

                <Tooltip.Content>
                    <Tooltip.SupportingText>
                        Plain content
                    </Tooltip.SupportingText>
                </Tooltip.Content>
            </Tooltip>

            <Tooltip>
                <Tooltip.Trigger asChild>
                    <Body>Rich</Body>
                </Tooltip.Trigger>

                <Tooltip.Content rich>
                    <Tooltip.RichContent>
                        <Tooltip.Subhead>Subhead</Tooltip.Subhead>
                        <Tooltip.SupportingText>
                            More rich content for this tool tip, it has a
                            sub-head, a long description and even some actions.
                        </Tooltip.SupportingText>
                    </Tooltip.RichContent>
                    <Tooltip.Actions>
                        <Button>
                            <Button.Text>Button</Button.Text>
                        </Button>
                    </Tooltip.Actions>
                </Tooltip.Content>
            </Tooltip>
        </RenderStage>
    );
};
