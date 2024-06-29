import Layout from 'components/layout/layout.tsx';
import Header from 'components/header/header.tsx';
import {useRef, FormEvent} from 'react';
import {Link, useNavigate} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {loginAction} from '../../store/api-actions.ts';
import {AppRoute} from '../../const/const.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors.ts';

function Login(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authStatus = useAppSelector(getAuthorizationStatus);

  console.log('LOGIN page');
  console.log(authStatus);

  const navigate = useNavigate();

  // if (authStatus === 'AUTH') {
  //   navigate(AppRoute.Main);
  // }

  const dispatch = useAppDispatch();
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log('Сработало');

    
    if (loginRef.current !== null && passwordRef.current !== null) {
      console.log('Сработало 2');
      console.log(loginRef.current.value);
      console.log(passwordRef.current.value);


      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };



  return (
    <Layout header={<Header/>} className="page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
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
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={'/'}>
                <span>Paris</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Login;
