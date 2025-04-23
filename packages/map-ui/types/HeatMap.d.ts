import { MapProps } from './Map';
type HeatMapLayer = 'heatmap' | 'marker';
type HeatMapProps = {
    readonly layer: HeatMapLayer;
} & MapProps;
export declare function HeatMap({ layer, markers, ...props }: HeatMapProps): JSX.Element;
export {};
//# sourceMappingURL=HeatMap.d.ts.map