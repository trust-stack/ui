import { Check, X } from '@tamagui/lucide-icons';
import React, { useEffect, useState } from 'react';
import { XStack, YStack, YStackProps } from 'tamagui';
import { Spinner } from './Spinner';
import { Body, Title } from './typography';

export type LineItemsProps = {
    readonly loading?: boolean;
    readonly lineItems: (
        | (LineItemProps & { hidden?: boolean })
        | React.ReactNode
    )[];
} & YStackProps;

export function LineItems({
    loading,
    lineItems = [],
    gap,
    ...props
}: LineItemsProps): JSX.Element {
    const [renderedLineItems, setRenderedLineItems] = useState<
        React.ReactNode[]
    >([]);

    useEffect(() => {
        if (!lineItems.length) return;

        const newLineItems = lineItems
            .filter((lineItem) => {
                if (typeof lineItem === 'object') return !lineItem['hidden'];

                return true;
            })
            .map((lineItem, index) =>
                // Can render a ReactNode, or a <LineItem />
                // First, check if lineItem is a validElement, if so
                // render as it. If not, deconstruct lineItem to a <LineItem />
                // component.
                React.isValidElement(lineItem) ? (
                    lineItem
                ) : (
                    <LineItem
                        {...(lineItem as LineItemProps)}
                        loading={loading}
                        key={index}
                    />
                )
            );

        setRenderedLineItems(newLineItems);
    }, [lineItems]);

    return (
        <YStack gap={gap || '$2'} {...props}>
            {renderedLineItems}
        </YStack>
    );
}

type WrapperFactory = ({
    children,
}: {
    children: React.ReactNode;
}) => JSX.Element;

export type LineItemProps = {
    readonly title: string | React.ReactNode;
    readonly value?: string | number | boolean | React.ReactNode;
    readonly inset?: boolean;
    readonly loading?: boolean;
    readonly wrapperFactory?: WrapperFactory;
    readonly subHeader?: boolean;
};

export function LineItem({
    title,
    value,
    inset,
    loading,
    wrapperFactory,
    subHeader,
}: LineItemProps): JSX.Element {
    let content: JSX.Element;

    if (subHeader) {
        content = <Title>{title}</Title>;
    } else if (loading) {
        content = (
            <XStack jc="space-between" gap={12} alignItems="center">
                <Body $sm={{ size: 'large' }} pl={inset ? 12 : undefined}>
                    {title}
                </Body>

                <Spinner size={'small'} />
            </XStack>
        );
    } else if (typeof value == 'boolean') {
        content = (
            <XStack jc="space-between" gap={12} alignItems="center">
                <Body $sm={{ size: 'large' }} pl={inset ? 12 : undefined}>
                    {title}
                </Body>
                {value ? <Check col={'$success'} /> : <X col={'$error'} />}
            </XStack>
        );
    } else {
        content = (
            <XStack jc="space-between" gap={12} alignItems="center">
                <Title size="small" pl={inset ? 12 : undefined}>
                    {title}
                </Title>

                <Body ta="right">{value || '-'}</Body>
            </XStack>
        );
    }

    return wrapperFactory ? wrapperFactory({ children: content }) : content;
}
