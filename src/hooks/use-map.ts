import {useEffect, useState, useRef, MutableRefObject} from 'react';
import {Map , TileLayer} from 'leaflet';
import {COORDINATES} from '../components/map/city-points.ts';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city:string) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {

    if (mapRef.current !== null && !isRenderedRef.current && city !== null) {
      if (!isRenderedRef.current) {
        const instance = new Map(mapRef.current, {
          center: {
            lat: COORDINATES[city].latitude,
            lng: COORDINATES[city].longitude,
          },
          zoom: COORDINATES[city].zoom,
        });

        const layer = new TileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        );

        instance.addLayer(layer);
        setMap(instance);
        isRenderedRef.current = true;
      }
    }
  }, [mapRef, city]);
  return map;
}

export default useMap;
