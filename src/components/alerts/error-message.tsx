import Layout from '../layout/layout.tsx';
import Header from '../header/header.tsx';

function ErrorMessage(): JSX.Element {
  return (
    <Layout header={<Header/>} className="page--gray page--main">
      <h1 color={'red'} className={'container'}>Error</h1>
      <h2 color={'red'} className={'container'}>Произошла ошибка</h2>
    </Layout>
  );
}

export default ErrorMessage;
