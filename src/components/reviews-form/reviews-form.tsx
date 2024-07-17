import {ChangeEvent, FormEvent, useState} from 'react';
import {StarsList, starsList} from 'components/form-rating-star/const.ts';
import {FormRatingStar} from 'components/form-rating-star/form-rating-star.tsx';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {useEffect} from 'react';
import {sendingCommentAction} from '../../store/offer-page-data/api-actions-offer.ts';
import {useParams} from 'react-router-dom';
import './styles.css';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getStatusSendingComment} from '../../store/offer-page-data/offer-page-data.selectors.ts';
import {RequestStatus} from '../../types/request-status.ts';

function ReviewsForm() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const sendingCommentStatus = useAppSelector(getStatusSendingComment);
  const [formState, setFormState] = useState({
    rating: 0,
    review: '',
  });
  const [formButtonBlock, setFormButtonBlock] = useState(true);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (sendingCommentStatus === RequestStatus.Success) {
      setFormState({
        rating: 0,
        review: '',
      });
      setFormValid(false);
      setFormButtonBlock(true);
    }
  }, [sendingCommentStatus]);

  const checkValidForm = () => {
    if (formState.review.length < 50
      || formState.review.length > 300
      || formState.rating === 0) {
      setFormButtonBlock(true);
      setFormValid(true);
    } else {
      setFormButtonBlock(false);
      setFormValid(false);
    }
  };

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLAnchorElement | HTMLTextAreaElement>) {
    const name = e.target.name;
    const inputTarget = e.target as HTMLInputElement;
    const value: string = inputTarget.value;
    setFormState({
      ...formState,
      [name] : value
    });
    checkValidForm();
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

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formState.review !== '' && formState.rating !== 0 && params.id !== undefined) {
      dispatch(sendingCommentAction({
        id: params.id,
        comment: formState.review,
        rating: +formState.rating,
      })
      );
    }
  };

  let disabledForm = false;

  if (sendingCommentStatus === RequestStatus.Loading) {
    disabledForm = true;
  }

  if (sendingCommentStatus === RequestStatus.Success || sendingCommentStatus === RequestStatus.Error) {
    disabledForm = false;
  }

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
        {formValid && <div className="reviews__form-error" color='red'>Длинна отзыва от 50 до 300 символов, рейтинг от 1 до 5</div>}
      </label>
      <FormRating starsArr={starsList}/>
      {sendingCommentStatus === RequestStatus.Error && <div className="reviews__form-error" color='red'>Возникла ошибка, перезагрузите страницу и попробуйте снова.</div>}
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.review}
        onChange={handleChange}
        minLength={50}
        maxLength={300}
        disabled={disabledForm}
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
          disabled={formButtonBlock || disabledForm}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
