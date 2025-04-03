export declare const dateToHumanReadable: (date: Date) => string;
export declare const dateToHumanReadableDay: (date: Date) => string;
export declare const dateToHumanReadableTime: (date: Date) => string;
export declare const dateToHumanReadableRange: (start: Date, end: Date, includeTime?: boolean) => string;
export declare const toCapitalCase: (str: string) => string;
export declare const toSentenceCase: (str: string) => string;
type RenderNameProps = {
    readonly firstName?: string;
    readonly middleName?: string;
    readonly lastName?: string;
};
export declare const renderName: ({ firstName, middleName, lastName, }: RenderNameProps) => string;
export declare const locationToAddress: (location: {
    streetAddressOne: string;
    city: string;
    postalCode: string;
    stateOrRegion: string;
}) => string;
export declare const renderFileSize: (sizeInBytes: number) => string;
export {};
//# sourceMappingURL=render.d.ts.map