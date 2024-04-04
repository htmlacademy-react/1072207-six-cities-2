import cn from 'classnames';
import {ReactNode} from 'react';

type Layout = {
  children: JSX.Element;
  header: ReactNode;
  className?: string;
}

function Layout({children, header, className}: Layout) {
  return (
    <div className= {cn('page', className)} >
      {header}
      {children}
    </div>
  );
}

export default Layout;
