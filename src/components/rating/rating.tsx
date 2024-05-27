type RatingProps={
  rating: number;
  calculusSystem: 5 | 10;
  className: string;
}
const NUMBER_PERCENTAGES = 100;

function Rating(offer: RatingProps): JSX.Element {
  const ratingRounded = Math.round(offer.rating);
  const valueOnePointRating = NUMBER_PERCENTAGES / offer.calculusSystem;
  const ratingToDisplay = `${valueOnePointRating * ratingRounded}%`;
  const classNameString = offer.className;
  return (
    <div className={`${classNameString}__rating rating`}>
      <div className={`${classNameString}__stars rating__stars`}>
        <span style={{width: ratingToDisplay}}/>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default Rating;
