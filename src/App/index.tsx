import React from 'react';
import { Outlet } from 'react-router-dom';
import Matrix from '../Components/Matrix';
import { MainNav } from '../Components/Navigation';

import './index.css';
import BreadCrumbs from '../Components/BreadCrumbs';
import Container from '../Components/Container';
import { motion } from 'framer-motion';
import { stages } from '../Animations/animations';

function App() {

  const contentLogoRevealVariants = {
    initial: {
      opacity: 0,
      transition: stages.contentReveal
    },
    finished: {
      opacity: 1,
      transition: stages.contentReveal
    }
  }

  return (
    <div className={`main-container`}>
      <Matrix />
      <div className='nav'>
        <MainNav />
      </div>

      <motion.div
        variants={contentLogoRevealVariants}
        initial="initial"
        animate="finished"
        className='content'>
        <Container
          bordered
          rounded
          dropShadow
          blured
          seeThroughBackground
          className='content-container'>
          <BreadCrumbs />
          <div className='page'>
            <Outlet />
          </div>
        </Container>
      </motion.div>
    </div>
  );
}

export default App;