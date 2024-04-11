import {ChangeEvent} from 'react';

type FormStarRatingProps={
  defaultValue: number;
  id: string;
  title: string;
  onSetHandler: (e: ChangeEvent<HTMLInputElement | HTMLAnchorElement | HTMLTextAreaElement>) => void;
}

export function FormRatingStar({defaultValue, id, title, onSetHandler}: FormStarRatingProps) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={defaultValue}
        id={id}
        type="radio"
        onChange={onSetHandler}
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
