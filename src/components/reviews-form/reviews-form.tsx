import {ChangeEvent, useState} from 'react';
import {StarsList, starsList} from 'components/form-rating-star/const.ts';
import {FormRatingStar} from 'components/form-rating-star/form-rating-star.tsx';

function ReviewsForm() {

  const [formState, setFormState] = useState({
    rating: '',
    review: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLAnchorElement | HTMLTextAreaElement>) {
    const name = e.target.name;
    const inputTarget = e.target as HTMLInputElement;
    const value: string = inputTarget.value;

    setFormState({
      ...formState,
      [name] : value
    });
  }

  type FormRatingProps={
    starsArr: StarsList;
  }

  function FormRating({starsArr}: FormRatingProps) {
    return (
      <div className="reviews__rating-form form__rating">
        {
          starsArr.map((item) =>
            <FormRatingStar key={item.id} defaultValue={item.defaultValue} id={item.id} onSetHandler={handleChange} title={item.title}/>
          )
        }
      </div>
    );
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <FormRating starsArr={starsList}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.review}
        onChange={handleChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
