import Layout from '../layout/layout.tsx';
import Header from '../header/header.tsx';

type ErrorProps ={
  message?: string;
}

function ErrorMessage({message}: ErrorProps): JSX.Element {
  return (
    <Layout header={<Header/>} className="page--gray page--main">
      <div className='container' style={{color:'red'}}>
        <h1 className='container'>Error</h1>
        <h2 className='container'>Произошла ошибка</h2>
        <h2 className='container'>{message}</h2>
        <p className='container'>Что то пошло не так! Попробуйте позже!!!</p>
      </div>
    </Layout>
  );
}

export default ErrorMessage;
