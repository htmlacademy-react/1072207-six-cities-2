import OfferGalleryItem from '../offer-gallery-item/offer-gallery-item.tsx';

const MAX_IMAGES_IN_GALLERY_ITEMS = 6;

type OfferGalleryProps = {
  images: string[];
}

function OfferGallery({images}: OfferGalleryProps) {

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {
          images.map((image, index) => {
            if (index < MAX_IMAGES_IN_GALLERY_ITEMS) {
              return <OfferGalleryItem key={`${image} + 'key'`} image={image}/>;
            }
          })
        }
      </div>
    </div>
  );
}

export default OfferGallery;
