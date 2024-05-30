type OfferGalleryItemProps = {
  image: string;
}


function OfferGalleryItem({ image }: OfferGalleryItemProps) {
  return (
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={image}
        alt="Photo studio"
      />
    </div>
  );
}

export default OfferGalleryItem;
