import { H4, XStack, XStackProps } from 'tamagui';

type RenderStageProps = {
    readonly children: React.ReactNode;
} & XStackProps;

export function RenderStage({
    children,
    ...props
}: RenderStageProps): JSX.Element {
    return (
        <XStack
            bc={'$background'}
            h={'$12'}
            m={'auto'}
            jc="center"
            ai={'center'}
            gap={'$6'}
            style={{
                width: '100vw',
                maxWidth: '100vw',
            }}
            {...props}
        >
            {children}
        </XStack>
    );
}

type RenderVariantsProps = {
    readonly title: string;
    readonly children: React.ReactNode;
};

export function RenderVariants({
    title,
    children,
}: RenderVariantsProps): JSX.Element {
    return (
        <>
            <H4>{title}</H4>
            {children}
        </>
    );
}
