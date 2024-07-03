import {ChangeEvent, FormEvent, useState} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {loginAction} from '../../store/user-process/api-actions-user.ts';

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const PASS_REGEXP = /(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]+/;

function LoginForm() {

  const [formState, setFormState] = useState({
    email: '',
    password: '',
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

  const dispatch = useAppDispatch();
  const checkEmail = EMAIL_REGEXP.test(formState.email);
  const checkPassword = PASS_REGEXP.test(formState.password);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formState.email !== null && formState.password !== null && checkEmail && checkPassword) {
      dispatch(loginAction({
        email: formState.email,
        password: formState.password,
      }));
    }
  };

  // Тут возвращать при ошибке в почте или пароле ? надо ли
  // const authorizationStatus = useAppSelector(getAuthorizationStatus);
  // if (authorizationStatus === AuthorizationStatus.Error) {
  //   <ErrorMessage />
  // }

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        // method="post"
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
          />
        </div>
        {(!checkPassword &&
            formState.password !== ''
            || !checkEmail && formState.email !== '')
          && <div color='red'>Проверьте правильность ввода данных</div>}
        <button className="login__submit form__submit button" type="submit">
          Sign in
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
