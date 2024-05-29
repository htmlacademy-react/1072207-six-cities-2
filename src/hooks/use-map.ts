import {useEffect, useState, useRef, MutableRefObject} from 'react';
import {Map , TileLayer} from 'leaflet';
import {CitiesCoordinatesKeys, CITIES__COORDINATES} from '../const/city-points.ts';
import {USE_MAP_URL_TAMPLATE, USE_MAP_OPTION_ATTRIBUTE} from '../const/map-const.ts';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city:CitiesCoordinatesKeys) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {

    if (mapRef.current !== null && !isRenderedRef.current && city !== null) {
      if (!isRenderedRef.current) {
        const instance = new Map(mapRef.current, {
          center: {
            lat: CITIES__COORDINATES[city].latitude,
            lng: CITIES__COORDINATES[city].longitude,
          },
          zoom: CITIES__COORDINATES[city].zoom,
        });

        const layer = new TileLayer(
          USE_MAP_URL_TAMPLATE,
          {
            attribution: USE_MAP_OPTION_ATTRIBUTE,
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
