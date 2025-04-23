import { Layer, LayerProps, MapRef, Source } from 'react-map-gl/mapbox';
import { FeatureCollection, Point } from 'geojson';
import { useEffect, useMemo, useRef } from 'react';
import { Map, MapProps } from './Map';

type HeatMapLayer = 'heatmap' | 'marker';

type HeatMapProps = {
    readonly layer: HeatMapLayer;
} & MapProps;

export function HeatMap({
    layer = 'heatmap',
    markers,
    ...props
}: HeatMapProps): JSX.Element {
    const mapRef = useRef<MapRef>(null);

    const circlePointLayer = useCirclePointLayer();
    const heatmapLayer = useHeatMapLayer();

    const features: FeatureCollection<Point> = useMemo(() => {
        if (!markers?.length)
            return { type: 'FeatureCollection', features: [] };

        return {
            type: 'FeatureCollection',
            features: markers.map((marker) => {
                return {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [marker[0], marker[1]],
                    },
                    properties: {},
                };
            }),
        };
    }, [markers]);

    useEffect(() => {
        mapRef?.current?.on('load', () => {
            mapRef?.current?.getMap()?.setFog({
                color: 'rgb(186, 210, 235)',
                'horizon-blend': 0.02,
                'star-intensity': 0.1,
            });
        });
    }, [mapRef?.current]);

    return (
        <Map markers={markers} showMarkers={false} {...props}>
            {layer == 'marker' && (
                <Source id={LayerID.SOURCE} type="geojson" data={features}>
                    <Layer {...circlePointLayer} />
                </Source>
            )}
            {layer == 'heatmap' && (
                <Source id={LayerID.HEATMAP} type="geojson" data={features}>
                    <Layer {...heatmapLayer} />
                </Source>
            )}
        </Map>
    );
}

enum LayerID {
    SOURCE = 'main-source',
    HEATMAP = 'heatmap',
    CIRCLE_POINT = 'circle-point',
}

const CREAM = '#F3F1E6';
const ORANGE = '#FBAC50';
const PINK = '#F48999';

const useCirclePointLayer = (): LayerProps => {
    const layer: LayerProps = {
        id: LayerID.CIRCLE_POINT,
        type: 'circle',
        source: LayerID.SOURCE,
        paint: {
            // Size circle radius by zoom level
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                6,
                8,
                10,
                12,
            ],
            'circle-color': PINK,
            'circle-stroke-color': PINK,
        },
    };
    return layer;
};

const MAX_ZOOM_LEVEL = 9;

const useHeatMapLayer = (): LayerProps => {
    const layer: LayerProps = {
        id: LayerID.HEATMAP,
        type: 'heatmap',
        source: LayerID.SOURCE,
        maxzoom: MAX_ZOOM_LEVEL,
        paint: {
            // Increase the heatmap weight based on frequency and property magnitude
            'heatmap-weight': [
                'interpolate',
                ['linear'],
                ['get', 'magnitude'],
                0,
                0,
                6,
                1,
            ],
            // Increase the heatmap color weight weight by zoom level
            // heatmap-intensity is a multiplier on top of heatmap-weight
            'heatmap-intensity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                1,
                9,
                3,
            ],
            // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
            // Begin color ramp at 0-stop with a 0-transparancy color
            // to create a blur-like effect.
            'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(33,102,172,0)',
                0.2,
                ORANGE,
                0.6,
                CREAM,
                0.8,
                'rgb(239,138,98)',
                0.9,
                PINK,
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                2,
                MAX_ZOOM_LEVEL,
                20,
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                7,
                1,
                9,
                0,
            ],
        },
    };
    return layer;
};
