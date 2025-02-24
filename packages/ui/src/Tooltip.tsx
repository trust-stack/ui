import {
    Tooltip as TTooltip,
    ThemeableStack,
    styled,
    withStaticProperties,
} from 'tamagui';
import { Body, Title } from './typography';

const Content = styled(TTooltip.Content, {
    name: 'TooltipContent',
    backgroundColor: '$inverseSurface',
    borderRadius: '$shape.corner_extra_small',
    minHeight: 24,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 0,
    paddingBottom: 0,
    enterStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },
    exitStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },
    scale: 1,
    x: 0,
    y: 0,
    opacity: 1,
    animation: [
        'quick',
        {
            opacity: {
                overshootClamping: true,
            },
        },
    ],
    variants: {
        rich: {
            true: {
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 12,
                paddingBottom: 8,
                width: 300,
            },
        },
    } as const,
});

const SupportingText = styled(Body, {
    name: 'TooltipSupportingText',
    col: '$inverseOnSurface',
    m: 8,
});

const Subhead = styled(Title, {
    size: 'small',
    col: '$inverseOnSurface',
});

const Actions = styled(ThemeableStack, {
    name: 'TooltipActions',
    mt: 12,
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
});

const RichContent = styled(ThemeableStack, {
    name: 'TooltipRichContent',
    flexDirection: 'column',
    gap: 4,
});

export const Tooltip = withStaticProperties(TTooltip, {
    displayName: 'Tooltip',
    Trigger: TTooltip.Trigger,
    RichContent,
    Content,
    SupportingText,
    Subhead,
    Actions,
});

export type CompactTooltipProps = {
    readonly label: string;
    readonly children: React.ReactNode;
};

export function CompactTooltip({
    label,
    children,
}: CompactTooltipProps): JSX.Element {
    return (
        <Tooltip>
            <Tooltip.Trigger>{children}</Tooltip.Trigger>
            <Tooltip.Content>
                <Tooltip.SupportingText>{label}</Tooltip.SupportingText>
            </Tooltip.Content>
        </Tooltip>
    );
}
