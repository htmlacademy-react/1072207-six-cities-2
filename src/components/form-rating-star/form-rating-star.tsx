import {ChangeEvent} from 'react';

type FormStarRatingProps={
  value: number;
  id: string;
  title: string;
  onSetHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  rating: number;
}

export function FormRatingStar({value, id, title, onSetHandler, disabled, rating}: FormStarRatingProps) {
  const isChecked = value === +rating;
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={id}
        type="radio"
        onChange={onSetHandler}
        disabled={disabled}
        checked={isChecked}
      />
      <label
        htmlFor={id}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}
