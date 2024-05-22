import {useRef, useEffect} from 'react';
import {Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map.ts';
import cn from 'classnames';
import {OfferFromList} from '../../types/offer.ts';
import {COORDINATES} from './city-points.ts';

type CityCoordinates = {
    latitude: number;
    longitude: number;
    zoom: number;
}

type MapProps = {
  className: string;
  offers?: OfferFromList[];
  city?: string;
}

function Map(props: MapProps){
  const {className, offers, city} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {

    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude
        });
        marker.addTo(markerLayer);
      });

      const cityCoordinates: CityCoordinates = {
        latitude: COORDINATES[city].latitude,
        longitude: COORDINATES[city].longitude,
        zoom: COORDINATES[city].zoom,
      };

      map.setView([cityCoordinates.latitude, cityCoordinates.longitude], cityCoordinates.zoom);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [offers, map, city]);

  return (
    <section
      className={cn('map', className)}
      style={{height: '500px', backgroundColor: 'white'}}
      ref={mapRef}
    />
  );
}

export default Map;
