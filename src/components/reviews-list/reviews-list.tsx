import {Review} from '../../types/review.ts';
import ReviewsItem from '../reviews-item/reviews-item.tsx';

type ReviewsListProps={
  reviews: Review[];
}

function ReviewsList({reviews} : ReviewsListProps) {
  // При неверном порядке отрисовки по датам изменить путем перестановки значений вычитания.
  reviews.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  return (

    <ul className="reviews__list">
      {
        reviews.map((item) =>
          <ReviewsItem key={item.id} review={item} />
        )
      }
    </ul>
  );
}

export default ReviewsList;
