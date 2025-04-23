import 'mapbox-gl/dist/mapbox-gl.css';
import { Point } from 'geojson';
import { ReactNode } from 'react';
export type MapProps = {
    readonly markers?: Point[];
    readonly showMarkers?: boolean;
    readonly padding?: number;
    readonly children?: ReactNode;
};
export declare function Map({ markers, showMarkers, padding, children, }: MapProps): JSX.Element;
//# sourceMappingURL=Map.d.ts.map