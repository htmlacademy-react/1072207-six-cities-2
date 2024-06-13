import OfferInsideItem from '../offer-inside-item/offer-inside-item.tsx';

type OfferInsideProps = {
  goods: string[];
}

function OfferInside({goods}: OfferInsideProps) {

  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What`&apos;`s inside</h2>
      <ul className="offer__inside-list">
        {
          goods.map((good, i) => (
            <OfferInsideItem key={`${i + 100}-key-${good}`} good={good} />
          ))
        }
      </ul>
    </div>
  );
}

export default OfferInside;
