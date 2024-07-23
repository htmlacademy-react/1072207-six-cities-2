import {Review} from '../../types/review.ts';
import ReviewsItem from '../reviews-item/reviews-item.tsx';
import {REVIEWS} from '../../const/reviews.ts';

type ReviewsListProps={
  reviews: Review[];
}

function ReviewsList({reviews} : ReviewsListProps) {
  const sortedReviews = [...reviews].sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  return (
    <ul className="reviews__list">
      {
        sortedReviews.map((item, index) => {
          if (index < REVIEWS.MaxReviewsToPage) {
            return <ReviewsItem key={item.id} review={item} />;
          }
        }
        )
      }
    </ul>
  );
}

export default ReviewsList;
