import {useRef, useEffect} from 'react';
import {Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map.ts';
import cn from 'classnames';
import {OfferFromList} from '../../types/offer.ts';
import {COORDINATES} from './city-points.ts';

type MapProps = {
  className: string;
  offers: OfferFromList[];
  city: string;
}

function Map(props: MapProps): JSX.Element {
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

        // marker.setIcon(
        // // Если нужен будет новый кастомный маркер смотри гит с примером,
        //   // добавляется через объект/выбор объекта в зависимости
        //   // от условия(можно) ссылка на изображение, размеры.
        // )

        marker.addTo(markerLayer);
      });

      map.setView([COORDINATES[city].latitude, COORDINATES[city].longitude], COORDINATES[city].zoom);

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
