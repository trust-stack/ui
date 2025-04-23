import { MapProps } from './Map';
type HeatMapLayer = 'heatmap' | 'marker';
type HeatMapProps = {
    readonly layer: HeatMapLayer;
} & MapProps;
export declare function HeatMap({ layer, coordinates, ...props }: HeatMapProps): JSX.Element;
export {};
//# sourceMappingURL=HeatMap.d.ts.map