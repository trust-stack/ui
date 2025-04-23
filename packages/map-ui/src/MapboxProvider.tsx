import { createContext, ReactNode, useContext } from 'react';

export type MapboxContextProps = {
    readonly token: string;
};

export type MapboxProviderProps = {
    readonly children: ReactNode;
} & MapboxContextProps;

const MapboxContext = createContext<MapboxContextProps>({
    token: 'NOT-SET',
});

function MapboxProvider({ children, token }: MapboxProviderProps): JSX.Element {
    return (
        <MapboxContext.Provider value={{ token }}>
            {children}
        </MapboxContext.Provider>
    );
}

export { MapboxContext, MapboxProvider };

export const useMapbox = () => useContext(MapboxContext);
