import {Review} from '../../types/review.ts';
import Rating from '../rating/rating.tsx';

type ReviewsItemProps={
  review: Review;
}

function ReviewsItem({review}: ReviewsItemProps) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width={54}
            height={54}
            alt="ReviewsForm avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={review.rating} calculusSystem={5} className={'reviews'}/>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>
          {`${new Date(review.date).toLocaleString('en-US', { month: 'long' })} ${new Date(review.date).getFullYear()}`}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
