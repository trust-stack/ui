import { useDay } from '@datepicker-react/hooks';
import { useRef } from 'react';
import { View, styled } from 'tamagui';
import { IconButton, IconButtonProps } from '../IconButton';
import { Body } from '../typography';
import { useDatepickerContext } from './DatePickerProvider';

export type DayProps = {
    readonly date: Date;
    readonly dayLabel: string;
} & Partial<IconButtonProps>;

export function Day({ dayLabel, date, ...props }: DayProps) {
    const dayRef = useRef(null);
    const datepickerContext = useDatepickerContext();
    const {
        isSelected,
        isSelectedStartOrEnd,
        disabledDate,
        onClick,
        isWithinHoverRange,
    } = useDay({
        date,
        dayRef,
        ...datepickerContext,
    });

    if (!dayLabel) return <View />;

    return (
        <DayButton
            ref={dayRef as any}
            onPress={onClick}
            cursor="pointer"
            disabled={disabledDate}
            w={48}
            h={48}
            hoverStyle={{
                col: '$onSurfaceVariant',
            }}
            col={'$onSurface'}
            selected={isSelected}
            selectedStartOrEnd={isSelectedStartOrEnd}
            isWithinHoverRange={isWithinHoverRange}
            today={isToday(date)}
            {...props}
        >
            <DayText selectedStartOrEnd={isSelectedStartOrEnd}>
                {dayLabel}
            </DayText>
        </DayButton>
    );
}

const DayButton = styled(IconButton, {
    name: 'DayButton',
    w: 48,
    h: 48,
    bc: 'transparent',
    hoverStyle: {
        col: '$onSurfaceVariant',
    },
    variants: {
        selected: {
            true: {
                backgroundColor: '$outlineVariant',
            },
        },
        selectedStartOrEnd: {
            true: {
                backgroundColor: '$outline',
            },
        },
        today: {
            true: {
                borderWidth: '$border.outline',
                borderColor: '$primary',
                borderRadius: 100,
            },
        },
    } as const,
});

const DayText = styled(Body, {
    name: 'DayText',
    bc: 'transparent',
    variants: {
        selectedStartOrEnd: {
            true: {
                color: '$onTertiary',
            },
        },
    },
});

function isToday(date: Date): boolean {
    const today = new Date();

    return (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
    );
}
