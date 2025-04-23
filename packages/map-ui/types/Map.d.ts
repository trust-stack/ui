import 'mapbox-gl/dist/mapbox-gl.css';
type Point = [number, number];
type MapProps = {
    readonly markers?: Point[];
    readonly padding?: number;
};
export declare function Map({ markers, padding }: MapProps): JSX.Element;
export {};
//# sourceMappingURL=Map.d.ts.map