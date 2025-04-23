import 'mapbox-gl/dist/mapbox-gl.css';
import MapGl, { LngLatBoundsLike, MapRef, Marker } from 'react-map-gl/mapbox';
import { Point } from 'geojson';
import { useEffect, useRef, useState } from 'react';
import { useMapbox } from './MapboxProvider';

type MapProps = {
    readonly markers?: Point[]; // [longitude, latitude][]
    readonly padding?: number;
};

export function Map({ markers, padding = 100 }: MapProps): JSX.Element {
    const mapRef = useRef<MapRef>(null);
    const { token } = useMapbox();

    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 100,
        zoom: 2.5,
        bearing: 0,
        pitch: 0,
    });

    const onLoad = () => {
        if (!markers?.length || !mapRef.current) return;

        const bounds: LngLatBoundsLike = markers.reduce(
            (acc, marker) => [
                Math.min(acc[0], marker[0]),
                Math.min(acc[1], marker[1]),
                Math.max(acc[2], marker[0]),
                Math.max(acc[3], marker[1]),
            ],
            [Infinity, Infinity, -Infinity, -Infinity]
        );
        mapRef.current.fitBounds(bounds, { padding });
    };

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
        <MapGl
            {...viewport}
            ref={mapRef}
            onLoad={onLoad}
            mapboxAccessToken={token}
            initialViewState={{
                latitude: -25.734968,
                longitude: 134.489563,
                zoom: 4,
            }}
            attributionControl={false}
            style={{
                width: '100%',
                height: '100%',
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            onMove={(e) => {
                setViewport(e.viewState);
            }}
        >
            {markers?.map((marker, index) => (
                <Marker
                    key={`${marker[0]}-${marker[1]}-${index}`}
                    anchor={'center'}
                    latitude={marker[1]}
                    longitude={marker[0]}
                />
            ))}
        </MapGl>
    );
}
