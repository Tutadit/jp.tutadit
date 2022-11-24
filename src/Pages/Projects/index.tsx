import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Container from '../../Components/Container';

type MyProjectsProps = {

}

const MyProjectsPropsDefault = {

}

const MyProjects = ({ }: MyProjectsProps): JSX.Element => {

  const location = useLocation()
  const crumbs = location.pathname.slice(1).split("/")

  return (
    <Container>          
      <Outlet />
    </Container>)
}

MyProjects.defaultProps = MyProjectsPropsDefault

export default MyProjects;



