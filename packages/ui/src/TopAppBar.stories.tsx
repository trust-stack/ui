import { Meta, StoryObj } from '@storybook/react';
import { Calendar, File, Menu } from '@tamagui/lucide-icons';
import { YStack } from 'tamagui';
import { TopAppBar } from './TopAppBar';

export default {
    component: TopAppBar,
    parameters: {
        layout: 'fullscreen',
        viewport: {
            defaultViewport: 'mobile2',
        },
    },
} as Meta<typeof TopAppBar>;

type Story = StoryObj<typeof TopAppBar>;

export const Variants = () => {
    return (
        <YStack
            gap={20}
            backgroundColor={'$primaryContainer'}
            style={{ height: '100vh' }}
        >
            <TopAppBar size={'small'}>
                <TopAppBar.TopRail>
                    <TopAppBar.LeadingIcon icon={Menu} />
                    <TopAppBar.SmallHeadline>
                        Small App Bar
                    </TopAppBar.SmallHeadline>
                    <TopAppBar.TrailIconContainer>
                        <TopAppBar.TrailingIcon icon={Calendar} />
                        <TopAppBar.TrailingIcon icon={File} />
                    </TopAppBar.TrailIconContainer>
                </TopAppBar.TopRail>
            </TopAppBar>

            <TopAppBar size={'small'} centered>
                <TopAppBar.TopRail>
                    <TopAppBar.LeadingIcon icon={Menu} />
                    <TopAppBar.SmallHeadline>
                        Small Center
                    </TopAppBar.SmallHeadline>

                    <TopAppBar.TrailingIcon icon={File} />
                </TopAppBar.TopRail>
            </TopAppBar>

            <TopAppBar size="medium">
                <TopAppBar.TopRail>
                    <TopAppBar.LeadingIcon icon={Menu} />
                    <TopAppBar.TrailIconContainer>
                        <TopAppBar.TrailingIcon icon={Calendar} />
                        <TopAppBar.TrailingIcon icon={File} />
                    </TopAppBar.TrailIconContainer>
                </TopAppBar.TopRail>

                <TopAppBar.BottomRail>
                    <TopAppBar.MediumHeadline>
                        Medium App Bar
                    </TopAppBar.MediumHeadline>
                </TopAppBar.BottomRail>
            </TopAppBar>

            <TopAppBar size="large">
                <TopAppBar.TopRail>
                    <TopAppBar.LeadingIcon icon={Menu} />
                    <TopAppBar.TrailIconContainer>
                        <TopAppBar.TrailingIcon icon={Calendar} />
                        <TopAppBar.TrailingIcon icon={File} />
                    </TopAppBar.TrailIconContainer>
                </TopAppBar.TopRail>

                <TopAppBar.BottomRail>
                    <TopAppBar.LargeHeadline>
                        Large App Bar
                    </TopAppBar.LargeHeadline>
                </TopAppBar.BottomRail>
            </TopAppBar>
        </YStack>
    );
};
