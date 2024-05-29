import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map.ts';
import cn from 'classnames';
import {OfferFromList} from '../../types/offer.ts';
import {CitiesCoordinatesKeys, CITIES__COORDINATES} from '../../const/city-points.ts';

type CityCoordinates = {
    latitude: number;
    longitude: number;
    zoom: number;
}

type MapProps = {
  className: string;
  offers: OfferFromList[];
  city: CitiesCoordinatesKeys;
}

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

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
        }, {
          icon: defaultCustomIcon,
        });
        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [offers, map]);

  useEffect(() => {
    if (map) {
      const cityCoordinates: CityCoordinates = {
        latitude: CITIES__COORDINATES[city].latitude,
        longitude: CITIES__COORDINATES[city].longitude,
        zoom: CITIES__COORDINATES[city].zoom,
      };

      map.setView([cityCoordinates.latitude, cityCoordinates.longitude], cityCoordinates.zoom);
    }

  }, [map, city]);

  return (
    <section
      className={cn('map', className)}
      style={{height: '500px', backgroundColor: 'white'}}
      ref={mapRef}
    />
  );
}

export default Map;
