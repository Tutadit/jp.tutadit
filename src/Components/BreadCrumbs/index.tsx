import React from 'react';
import './index.css';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi'
import Container from '../Container';


const BreadCrumbs = (): JSX.Element => {

  const location = useLocation()
  const crumbs = location.pathname.slice(1).replaceAll('-',' ').split("/")

  return (
    <Container extraBlured className="bread-crumbs">
      {
        crumbs.map((crumb, i) =>
          <div key={crumb}
            className="crumb">
            <span className='crumb-divider'>
              <FiChevronRight />
            </span>
            <Link to={crumbs.slice(0, i + 1).join("/").replaceAll(" ", '-')}>
              {crumb}
            </Link>
          </div>
        )
      }
    </Container>
  );
}

export default BreadCrumbs;



