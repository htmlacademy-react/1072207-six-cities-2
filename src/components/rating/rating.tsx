type RatingProps={
  rating: number;
  calculusSystem: 5 | 10;
  className: string;
}
const NUMBER_PERCENTAGES = 100;

function Rating(props: RatingProps): JSX.Element {
  const ratingRounded = Math.round(props.rating);
  const valueOnePointRating = NUMBER_PERCENTAGES / props.calculusSystem;
  const ratingToDisplay = `${valueOnePointRating * ratingRounded}%`;
  const classNameString = props.className;

  return (
    <div className={`${classNameString}__rating rating`}>
      <div className={`${classNameString}__stars rating__stars`}>
        <span style={{width: ratingToDisplay}}/>
        <span className="visually-hidden">Rating</span>
      </div>
      {(classNameString === 'offer') && <span className="offer__rating-value rating__value">{props.rating}</span>}
    </div>
  );
}

export default Rating;
