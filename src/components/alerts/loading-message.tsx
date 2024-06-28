import Layout from '../layout/layout.tsx';
import Header from '../header/header.tsx';

function LoadingMessage(): JSX.Element {
  return (

    <Layout header={<Header/>} className="page--gray page--main">
      <h1 color={'red'} className={'container'}>Loading ...</h1>
    </Layout>
  );
}

export default LoadingMessage;
