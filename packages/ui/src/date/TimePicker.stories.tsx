import { Meta } from '@storybook/react';
import { format } from 'date-fns';
import { useState } from 'react';
import { YStack } from 'tamagui';
import { RenderStage } from '../storybook-utils';
import { Body, Title } from '../typography';
import { TimePicker } from './TimePicker';

export default {
    component: TimePicker,
} as Meta<typeof TimePicker>;

export const Picker = () => {
    const [date, setDate] = useState<Date>(new Date());

    return (
        <RenderStage height={240}>
            <YStack gap={20} justifyContent="center" alignItems="center">
                <TimePicker value={date} onChange={setDate} />

                <Title>Date state:</Title>
                <Body size={'large'}>{format(date, "hh:mm aaaaa'm'")}</Body>
            </YStack>
        </RenderStage>
    );
};
