import 'mapbox-gl/dist/mapbox-gl.css';
import MapGl, { LngLatBoundsLike, MapRef, Marker } from 'react-map-gl/mapbox';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useMapbox } from './MapboxProvider';

type Coordinate = [number, number];

export type MapProps = {
    readonly coordinates?: Coordinate[]; // [longitude, latitude][]
    readonly showMarkers?: boolean;
    readonly padding?: number;
    readonly children?: ReactNode;
};

export function Map({
    coordinates,
    showMarkers = true,
    padding = 100,
    children,
}: MapProps): JSX.Element {
    const mapRef = useRef<MapRef>(null);
    const { token } = useMapbox();

    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 100,
        zoom: 2.5,
        bearing: 0,
        pitch: 0,
    });

    const fitBoundsToCoordinates = () => {
        if (!coordinates?.length || !mapRef.current) return;

        const bounds: LngLatBoundsLike = coordinates.reduce(
            (acc, coord) => [
                Math.min(acc[0], coord[0]),
                Math.min(acc[1], coord[1]),
                Math.max(acc[2], coord[0]),
                Math.max(acc[3], coord[1]),
            ],
            [Infinity, Infinity, -Infinity, -Infinity]
        );
        mapRef.current.fitBounds(bounds, { padding });
    };

    const onLoad = () => {
        fitBoundsToCoordinates();
    };

    useEffect(() => {
        fitBoundsToCoordinates();
    }, [coordinates]);

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
            {children}
            {showMarkers &&
                coordinates?.map((coord, index) => (
                    <Marker
                        key={`${coord[0]}-${coord[1]}-${index}`}
                        anchor={'center'}
                        latitude={coord[1]}
                        longitude={coord[0]}
                    />
                ))}
        </MapGl>
    );
}
