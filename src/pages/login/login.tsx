import Layout from 'components/layout/layout.tsx';
import Header from 'components/header/header.tsx';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors.ts';
import LoginForm from '../../components/login-form/login-form.tsx';
import {useEffect} from 'react';

function Login(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [navigate, authStatus]);

  return (
    <Layout header={<Header showAuthorizationElement={false} />} className="page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
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
