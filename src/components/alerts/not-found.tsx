import Layout from '../layout/layout.tsx';
import Header from '../header/header.tsx';

function NotFound(): JSX.Element {
  return (
    <Layout header={<Header/>} className="page--gray page--main">
      <div className='container'>
        <h1 color={'red'} className='container'>Error</h1>
        <h2 color={'red'} className='container'>Страница не найдена</h2>
        <p className='container'>Видимо такой страницы не существует,
          вернитесь на главную страницу!
        </p>
      </div>
    </Layout>
  );
}

export default NotFound;
