import {Link} from 'react-router-dom';
import styles from './not-found.module.css';
import Layout from 'components/layout/layout.tsx';
import Header from 'components/header/header.tsx';

function ErrorPage(): JSX.Element {
  return (
    <Layout header={<Header/>}>
      <div className={styles.container}>
        <h1>404 Not Found</h1>
        <Link to="/" className={styles.link}>Вернуться на главную</Link>
      </div>
    </Layout>
  );
}

export default ErrorPage;
