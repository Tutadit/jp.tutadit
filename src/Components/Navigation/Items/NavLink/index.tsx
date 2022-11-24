import React from 'react';
import { Path } from 'react-router';
import { ItemProps } from '../Item';
import './index.css';
import {
  NavLink as ReactRouterNavLink,
  NavLinkProps as ReactRouterNavLinkProps
} from 'react-router-dom'

import { FiChevronRight } from 'react-icons/fi'

type To = string | Partial<Path>;

export interface NavLinkProps extends ItemProps, ReactRouterNavLinkProps {
  icon: JSX.Element,
  name: string
}

const NavLinkPropsDefault = {
  icon: null,
  name: null
}

const NavLink = ({
  name,
  icon,
  ...props
}: NavLinkProps): JSX.Element => {
  return (
    <ReactRouterNavLink {...props} className="nav-link">
      {
        icon &&
        <>
          <span className='link-icon'>{icon}</span>
          <span className="link-icon-divider">
            <FiChevronRight />
          </span>
        </>
      }
      <span className="link-background"></span>
      <span className="link-name">{name}</span>
    </ReactRouterNavLink>
  );
}

NavLink.defaultProps = NavLinkPropsDefault

export default NavLink;



