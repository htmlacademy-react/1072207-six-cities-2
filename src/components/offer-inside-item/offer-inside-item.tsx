type OfferInsideItemProps = {
  good: string;
}

function OfferInsideItem({ good }: OfferInsideItemProps) {
  return (
    <li className="offer__inside-item">{good}</li>
  );
}

export default OfferInsideItem;
