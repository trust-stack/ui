import 'mapbox-gl/dist/mapbox-gl.css';
import { ReactNode } from 'react';
type Coordinate = [number, number];
type MapStyle = 'streets' | 'satellite';
export type MapProps = {
    readonly coordinates?: Coordinate[];
    readonly showMarkers?: boolean;
    readonly padding?: number;
    readonly children?: ReactNode;
    readonly mapStyle?: MapStyle;
};
export declare function Map({ coordinates, showMarkers, padding, children, mapStyle, }: MapProps): JSX.Element;
export {};
//# sourceMappingURL=Map.d.ts.map