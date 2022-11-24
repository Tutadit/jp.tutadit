import React from 'react';
import { ProjectType } from '../../../Assets/Projects';
import Card from '../Card';
import './index.css';

type ProjectCardsProps = {
  projects:ProjectType[],
  className:string
}

const ProjectCardsPropsDefault = {
  projects:[],
  className:""
}

const ProjectCards = ({
  projects,
  className
 }: ProjectCardsProps): JSX.Element => {
  return (
    <div className={`projects ${className}`}>
      {
        projects.map(project =>
          <Card key={project.slug} {...project} />
        )
      }
    </div>
  );
}

ProjectCards.defaultProps = ProjectCardsPropsDefault

export default ProjectCards;



