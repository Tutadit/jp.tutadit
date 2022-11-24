import React, { useEffect, useState } from 'react';
import { BsBriefcaseFill, BsList, BsX } from 'react-icons/bs';
import { GiPerson } from 'react-icons/gi';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { Items } from '..';
import Container from '../../Container';
import Typist from '../../Typist';
import { motion } from 'framer-motion';

import './index.css';
import { stages } from '../../../Animations/animations';

type MainNavProps = {

}

const MainNavPropsDefault = {

}

const MainNav = ({ }: MainNavProps): JSX.Element => {

  const [openMenu, setOpenMenu] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpenMenu(false)
  }, [location]);

  const navItemsLogoRevealVariants = {
    initial: {
      opacity: 0,
      transition: stages.contentReveal
    },
    finished: {
      opacity:1,
      transition: stages.contentReveal
    }
  }

  return (
    <Container
      bordered
      rounded
      dropShadow
      blured
      seeThroughBackground
      className="nav-container">
      <Items.Logo />
      <motion.div variants={navItemsLogoRevealVariants}
        initial="initial"
        animate="finished"
        className='nav-items-container'>
          <Typist
            text={[
              "Full Stack Developer",
              "Linux Enthusiast",
              "❤️ React"
            ]} />
          <Items.Button
            className='nav-menu-button'
            onClick={() => { setOpenMenu(menu => !menu) }}>
            {openMenu ? <BsX /> : <BsList />}
          </Items.Button>
          <Container
            bordered={openMenu}
            rounded={openMenu}
            dropShadow={openMenu}
            extraBlured={openMenu}
            seeThroughBackground={openMenu}
            className={`navigation-items ${openMenu ? 'open' : 'closed'}`}>
            <div className="navigation-links">
              <Items.NavLink
                to="/about-me"
                icon={<GiPerson />}
                name="About Me" />
              <Items.NavLink
                to="/my-projects"
                icon={<BsBriefcaseFill />}
                name="My Projects" />
            </div>
            <Items.Divider />
            <Items.Socials
              className="navigation-social"
              github="https://github.com/Tutadit"
              linkedin='https://www.linkedin.com/in/juan-pablo-lozano-sarmiento' />
          </Container>
        </motion.div>
    </Container >
  );
}

MainNav.defaultProps = MainNavPropsDefault

export default MainNav;



