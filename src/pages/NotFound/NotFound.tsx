import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="container" style={{textAlign: 'center', marginTop: 50}}>
      <h1>404 Not Found</h1>
      {/*todo открыть ссылку на главную*/}
      <Link to="/" style={{padding: 20}}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;
