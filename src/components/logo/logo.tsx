import {Link} from 'react-router-dom';

type LogoProps={
  blockName: 'header' | 'footer';
  active: boolean;
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

function Logo({blockName, active}: LogoProps): JSX.Element {
  const size = sizes[blockName];
  const additionalClass = active ? (`${blockName}__logo-link ${blockName}__logo-link--active`) : `${blockName}__logo-link`;

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
