import { ReactNode } from 'react';
export type MapboxContextProps = {
    readonly token: string;
};
export type MapboxProviderProps = {
    readonly children: ReactNode;
} & MapboxContextProps;
declare const MapboxContext: import("react").Context<MapboxContextProps>;
declare function MapboxProvider({ children, token }: MapboxProviderProps): JSX.Element;
export { MapboxContext, MapboxProvider };
export declare const useMapbox: () => MapboxContextProps;
//# sourceMappingURL=MapboxProvider.d.ts.map