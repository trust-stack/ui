import { Meta } from '@storybook/react';
import { File, Home, Settings } from '@tamagui/lucide-icons';
import { Theme, View } from 'tamagui';
import { NavDrawer, NavDrawerItem, NavDrawerModel } from './NavDrawer';

export default {
    component: NavDrawer,
    parameters: {
        viewport: {
            defaultViewport: 'tablet',
        },
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <Theme name="sustainability">
                <View
                    style={{
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: '$surface',
                    }}
                >
                    <Story />
                </View>
            </Theme>
        ),
    ],
} as Meta<typeof NavDrawer>;

export const Example = () => (
    <NavDrawer backgroundColor={'$surfaceContainerHigh'}>
        <NavDrawer.Content>
            <NavDrawer.Headline>Headline</NavDrawer.Headline>
            <NavDrawerItem active>
                <NavDrawerItem.Icon Icon={Home} />
                <NavDrawerItem.Label>Home</NavDrawerItem.Label>
                <NavDrawerItem.Label trailing>24</NavDrawerItem.Label>
            </NavDrawerItem>
            <NavDrawerItem>
                <NavDrawerItem.Icon Icon={File} />
                <NavDrawerItem.Label>Reports</NavDrawerItem.Label>
            </NavDrawerItem>
            <NavDrawerItem>
                <NavDrawerItem.Icon Icon={Settings} />
                <NavDrawerItem.Label>Settings</NavDrawerItem.Label>
            </NavDrawerItem>

            <NavDrawer.Divider />

            <NavDrawer.Headline>More</NavDrawer.Headline>
            <NavDrawerItem>
                <NavDrawerItem.Label>Tasks</NavDrawerItem.Label>
            </NavDrawerItem>
            <NavDrawerItem>
                <NavDrawerItem.Label>Notifications</NavDrawerItem.Label>
            </NavDrawerItem>
        </NavDrawer.Content>
    </NavDrawer>
);

export const Modal = () => (
    <NavDrawerModel open={true}>
        <NavDrawerModel.Portal>
            <NavDrawerModel.Content>
                <NavDrawer>
                    <NavDrawer.Content>
                        <NavDrawer.Headline>Headline</NavDrawer.Headline>
                        <NavDrawerItem active>
                            <NavDrawerItem.Icon Icon={Home} />
                            <NavDrawerItem.Label>Home</NavDrawerItem.Label>
                            <NavDrawerItem.Label trailing>
                                24
                            </NavDrawerItem.Label>
                        </NavDrawerItem>
                        <NavDrawerItem>
                            <NavDrawerItem.Icon Icon={File} />
                            <NavDrawerItem.Label>Reports</NavDrawerItem.Label>
                        </NavDrawerItem>
                        <NavDrawerItem>
                            <NavDrawerItem.Icon Icon={Settings} />
                            <NavDrawerItem.Label>Settings</NavDrawerItem.Label>
                        </NavDrawerItem>

                        <NavDrawer.Divider />

                        <NavDrawer.Headline>More</NavDrawer.Headline>
                        <NavDrawerItem>
                            <NavDrawerItem.Label>Tasks</NavDrawerItem.Label>
                        </NavDrawerItem>
                        <NavDrawerItem>
                            <NavDrawerItem.Label>
                                Notifications
                            </NavDrawerItem.Label>
                        </NavDrawerItem>
                    </NavDrawer.Content>
                </NavDrawer>
            </NavDrawerModel.Content>
        </NavDrawerModel.Portal>
    </NavDrawerModel>
);
