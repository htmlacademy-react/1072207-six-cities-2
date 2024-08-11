import {ChangeEvent, FormEvent, useState} from 'react';
import {starsList} from 'components/form-rating-star/const.ts';
import FormRating from '../form-rating/form-rating.tsx';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {useEffect} from 'react';
import {sendingCommentAction} from '../../store/offer-page-data/api-actions-offer.ts';
import {useParams} from 'react-router-dom';
import './styles.css';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getStatusSendingComment} from '../../store/offer-page-data/offer-page-data.selectors.ts';
import {RequestStatus} from '../../types/request-status.ts';
import {CommentLength} from '../../pages/offer/const.ts';

function ReviewsForm() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{id: string}>();
  const statusCommentSending = useAppSelector(getStatusSendingComment);
  const isSuccess = statusCommentSending === RequestStatus.Success;
  const isPending = statusCommentSending === RequestStatus.Loading;
  const isError = statusCommentSending === RequestStatus.Error;
  const [formState, setFormState] = useState({
    rating: 0,
    review: '',
  });
  const [formNotFirstRender, setNotFormFirstRender] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setFormState({
        rating: 0,
        review: '',
      });
      setNotFormFirstRender(false);
    }
  }, [statusCommentSending]);

  const isFormNotValid =
    formState.review.length < CommentLength.Min
    || formState.review.length > CommentLength.Max
    || formState.rating === 0;

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = e.target;
    setFormState({
      ...formState,
      [name] : value
    });
    setNotFormFirstRender(true);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (id !== undefined) {
      dispatch(sendingCommentAction({
        id: id,
        comment: formState.review,
        rating: +formState.rating,
      })
      );
    }
  };

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
        {(isFormNotValid && formNotFirstRender) && <div className="reviews__form-error" color='red'>Длинна отзыва от 50 до 300 символов, рейтинг от 1 до 5</div>}
      </label>
      <FormRating starsArr={starsList} handleChange={handleChange} disabled={isPending} rating={formState.rating}/>
      {isError && <div className="reviews__form-error" color='red'>Возникла ошибка, перезагрузите страницу и попробуйте снова.</div>}
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.review}
        onChange={handleChange}
        minLength={CommentLength.Min}
        maxLength={CommentLength.Max}
        disabled={isPending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">{CommentLength.Min} characters</b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isFormNotValid || isPending}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
