import {Link} from 'react-router-dom';
import styles from './not-found.module.css';

function NotFound(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>404 Not Found</h1>
      <Link to="/" className={styles.link}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;
