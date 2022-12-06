import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../../Components/Container';

const MyProjects = (): JSX.Element => {  

  return (
    <Container>          
      <Outlet />
    </Container>)
}

export default MyProjects;



