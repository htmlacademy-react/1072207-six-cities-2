import {Link} from 'react-router-dom';
import cn from 'classnames';

type LogoProps={
  blockName: 'header' | 'footer';
  active?: boolean;
}

const sizes = {
  header: {
    width: 81,
    height: 41,
  },
  footer: {
    width: 64,
    height: 33,
  },
};

function Logo({blockName, active = true}: LogoProps): JSX.Element {
  const size = sizes[blockName];
  const additionalClass = cn(
    `${blockName}__logo-link`,
    { [`${blockName}__logo-link--active`]: active }
  );
  return (
    <Link className={additionalClass} to={'/'}>
      <img
        className={`${blockName}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={size.width}
        height={size.height}
      />
    </Link>
  );
}
export default Logo;
