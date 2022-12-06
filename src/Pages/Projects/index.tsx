import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Container from '../../Components/Container';

const MyProjects = (): JSX.Element => {

  const location = useLocation()  

  return (
    <Container>          
      <Outlet />
    </Container>)
}

export default MyProjects;



