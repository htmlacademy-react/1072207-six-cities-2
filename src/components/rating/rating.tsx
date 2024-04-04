type RatingProps={
  rating: number;
  calculusSystem: 5 | 10;
}
const NUMBER_PERCENTAGES = 100;

function Rating(offer: RatingProps): JSX.Element {
  const ratingRounded = Math.round(offer.rating);
  const valueOnePointRating = NUMBER_PERCENTAGES / offer.calculusSystem;
  const ratingToDisplay = `${valueOnePointRating * ratingRounded}%`;

  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: ratingToDisplay}}/>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default Rating;
