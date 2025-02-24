import { Meta } from '@storybook/react';
import { Search } from './Search';
import { RenderStage } from './storybook-utils';

export default {
    component: Search,
} as Meta<typeof Search>;

export const SearchBar = () => (
    <RenderStage>
        <Search />
    </RenderStage>
);
