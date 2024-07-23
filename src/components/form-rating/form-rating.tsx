import {StarsList} from '../form-rating-star/const.ts';
import {FormRatingStar} from '../form-rating-star/form-rating-star.tsx';
import {ChangeEvent} from 'react';

type FormRatingProps={
  starsArr: StarsList;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  rating: number;
}

function FormRating({starsArr, handleChange, disabled, rating}: FormRatingProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {
        starsArr.map((item) =>
          (<FormRatingStar
            key={item.id}
            value={item.value}
            id={item.id}
            onSetHandler={handleChange}
            title={item.title}
            disabled={disabled}
            rating={rating}
           />
          )
        )
      }
    </div>
  );
}

export default FormRating;
