import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map.ts';
import cn from 'classnames';
import {OfferFromList} from '../../types/offer.ts';
import {CitiesCoordinatesKeys, CITIES__COORDINATES} from '../../const/city-points.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getIdActiveOffer} from '../../store/app-state/app-state.selectors.ts';
import './styles.css';
import {getOffer} from '../../store/offer-page-data/offer-page-data.selectors.ts';

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

const activeCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map(props: MapProps){
  const {className, offers, city} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const selectedCardIdOfferStore = useAppSelector(getIdActiveOffer);
  const offerLoad = useAppSelector(getOffer);
  let cardIdToMainMarker = '';

  if (className === 'offer__map' && offerLoad) {
    cardIdToMainMarker = offerLoad.id;
  }

  if (className === 'cities__map') {
    cardIdToMainMarker = selectedCardIdOfferStore;
  }

  useEffect(() => {

    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        let iconToMarker = defaultCustomIcon;
        if (offer.id === selectedCardIdOfferStore) {
          iconToMarker = activeCustomIcon;
        }

        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        }, {
          icon: iconToMarker,
        });
        marker.addTo(markerLayer);
      });

      if (className === 'offer__map' && offerLoad) {
        const marker = new Marker({
          lat: offerLoad.location.latitude,
          lng: offerLoad.location.longitude
        }, {
          icon: activeCustomIcon,
        });
        marker.addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [offers, map, cardIdToMainMarker]);

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
      ref={mapRef}
    />
  );
}

export default Map;
