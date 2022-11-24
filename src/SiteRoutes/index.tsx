import React from 'react';
import './index.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import AboutMe from '../Pages/AboutMe';
import MyProjects from '../Pages/Projects';
import ReachMe from '../Pages/ReachMe';
import Project from '../Pages/Projects/Project';
import Browser from '../Pages/Projects/Browser';
import App from '../App';

type SiteRoutesProps = {
  
}

const SiteRoutesPropsDefault = {

}

const SiteRoutes = ({ }: SiteRoutesProps): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to='/about-me' replace />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="my-projects" element={<MyProjects />}>
          <Route index element={<Browser />} />
          <Route path=":slug" element={<Project />} />
        </Route>
      </Route>
    </Routes>
  );
}

SiteRoutes.defaultProps = SiteRoutesPropsDefault

export default SiteRoutes;



