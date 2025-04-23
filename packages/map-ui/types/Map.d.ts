import 'mapbox-gl/dist/mapbox-gl.css';
import { Point } from 'geojson';
import { ReactNode } from 'react';
export type MapProps = {
    readonly coordinates?: Point[];
    readonly showMarkers?: boolean;
    readonly padding?: number;
    readonly children?: ReactNode;
};
export declare function Map({ coordinates, showMarkers, padding, children, }: MapProps): JSX.Element;
//# sourceMappingURL=Map.d.ts.map