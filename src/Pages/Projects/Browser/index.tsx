import React from 'react';

import Container from '../../../Components/Container';
import {
  Tags,
  Cards,
  useExploreProjects
} from '../../../Components/Projects';

import './index.css';

type BrowserProps = {
  className: string
}

const BrowserPropsDefault = {
  className: ""
}

const Browser = ({
  className
}: BrowserProps): JSX.Element => {

  const {
    onTagChange,
    tags,
    projects
  } = useExploreProjects()


  return (
    <Container className={`projects-container ${className}`}>
      <div className='header'>
        <h4>Filter by tag</h4>
        <h4>{projects.length} Project{projects.length > 1 ? 's' : ''}</h4>
      </div>
      <Tags
        tags={tags}
        onTagChange={onTagChange} />
      <Cards projects={projects} />
    </Container>
  );
}

Browser.defaultProps = BrowserPropsDefault

export default Browser;



