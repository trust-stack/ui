import { Meta } from '@storybook/react';
import { Menu, MenuItem } from './Menu';

export default {
    component: Menu,
} as Meta<typeof Menu>;

export const Example = () => (
    <Menu>
        <MenuItem>
            <MenuItem.Label>Item 1</MenuItem.Label>
        </MenuItem>

        <MenuItem>
            <MenuItem.Label>Item 2</MenuItem.Label>
        </MenuItem>
    </Menu>
);
