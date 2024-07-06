import {ChangeEvent, FormEvent, useState} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {loginAction} from '../../store/user-process/api-actions-user.ts';
import {EMAIL_REGEXP, PASS_REGEXP} from './const.ts';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {AuthorizationStatus} from '../../const/const.ts';
import './styles.css';

function LoginForm() {

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  function handleChange(evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = evt.target;

    setFormState({
      ...formState,
      [name]: value
    });
  }

  const dispatch = useAppDispatch();
  const checkEmail = EMAIL_REGEXP.test(formState.email);
  const checkPassword = PASS_REGEXP.test(formState.password);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formState.email !== '' && formState.password !== '' && checkEmail && checkPassword) {
      dispatch(loginAction({
        email: formState.email,
        password: formState.password,
      }));
    }
  };

  const hasError = (
    !checkPassword
    &&
    formState.password !== ''
    ||
    !checkEmail && formState.email !== ''
  );

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const requestProcessed = authorizationStatus === AuthorizationStatus.RequestAuth;

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formState.email}
            required
            disabled={requestProcessed}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formState.password}
            required
            disabled={requestProcessed}
          />
        </div>
        {hasError && <div className="login__error-message" color=''>Проверьте правильность ввода данных</div>}
        <button className="login__submit form__submit button" type="submit">
          {requestProcessed ? 'Loading...' : 'Sign in' }
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
