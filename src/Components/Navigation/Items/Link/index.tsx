import React from 'react';
import './index.css';

export interface LinkProps {
  download: string | boolean,
  href: string,
  rel: string,
  target: string,
  icon: JSX.Element,
  name: string
}

const LinkPropsDefault = {
  download: null,
  href: null,
  rel: null,
  target: null,
  icon: null,
  name: ""
}

const Link = ({
  icon,
  name,
  ...props
}: LinkProps): JSX.Element => {
  return (
    <a className="nav-link" {...props}>
      {
        icon &&
        <>
          <span className='link-icon'>{icon}</span>
          <span className="link-icon-divider"></span>
        </>
      }
      <span className="link-background"></span>
      <span className="link-name">{name}</span>
    </a>
  );
}

Link.defaultProps = LinkPropsDefault

export default Link;



