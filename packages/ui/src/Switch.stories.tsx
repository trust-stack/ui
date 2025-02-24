import { Meta } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';
import { RenderStage } from './storybook-utils';

export default { component: Switch } as Meta<typeof Switch>;

export const Switches = () => {
    const [active, setActive] = useState<boolean>(false);
    return (
        <RenderStage>
            <Switch active={active} onChange={setActive} />
        </RenderStage>
    );
};
