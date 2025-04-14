import { XStackProps } from 'tamagui';
type RenderStageProps = {
    readonly children: React.ReactNode;
} & XStackProps;
export declare function RenderStage({ children, ...props }: RenderStageProps): JSX.Element;
type RenderVariantsProps = {
    readonly title: string;
    readonly children: React.ReactNode;
};
export declare function RenderVariants({ title, children, }: RenderVariantsProps): JSX.Element;
export declare const PlatformDecorator: (platform: "web" | "android" | "ios" | "windows" | "macos") => (Story: any) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=storybook-utils.d.ts.map