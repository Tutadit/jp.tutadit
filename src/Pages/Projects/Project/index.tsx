import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { findProject } from '../../../Components/Projects';
import Container from '../../../Components/Container';

import './index.css';
import Slider from '../../../Components/Slider';
import { BsEyeFill, BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

type ProjectProps = {

}

const ProjectPropsDefault = {

}

const Project = ({ }: ProjectProps): JSX.Element => {

  const params = useParams()
  const project = params.slug ? findProject(params.slug) : null

  const [inActions, setInActions] = useState(false)

  if (!project)
    return (<div>Nothing here</div>)

  return (
    <div className='project'>
      <div className='header'>
        <div className="summary">
          <div className="title">
            <h1>{project.title}</h1>
          </div>
          <div className='description'>
            <p>{project.description ? project.description : ''}</p>
          </div>
          <div className='actions'>
            {project.github &&
              <a href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => { setInActions(true) }}
                onMouseLeave={() => { setInActions(false) }}
                className='action-link'>
                <BsGithub /><span>View Code</span>
              </a>
            }
            {project.live &&
              <a href={project.live}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => { setInActions(true) }}
                onMouseLeave={() => { setInActions(false) }}
                className='action-link'>
                <BsEyeFill /><span>Live view</span>
              </a>
            }
            {(project.live || project.github) &&
              <span className={`external_icon ${inActions ? 'glow' : ''}`}>
                <BiLinkExternal />
              </span>}
          </div>
        </div>
        <div className='visual'>
          <Slider className='image'
            slides={
              project.media.map(media_piece => {
                if (media_piece.endsWith('.mp4'))
                  return (<video
                    src={media_piece}
                    key={media_piece}
                    controls={false}
                    loop={true}
                    autoPlay
                    playsInline
                    muted />)

                return (<img key={media_piece} src={media_piece} alt={project.title} />)
              })
            } />
        </div>
      </div>
      <div className='main-content'>
        <div className='info'>
          {project.info ? project.info : ''}
        </div>
        {project.skills && <div className='skills'>
          <h4>Skills</h4>
          <ul>
            {project.skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>}
      </div>
    </div>
  );
}

Project.defaultProps = ProjectPropsDefault

export default Project;



