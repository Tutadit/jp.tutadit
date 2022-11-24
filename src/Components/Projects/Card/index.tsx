import React, { useEffect, useRef, useState } from 'react';

import Container from '../../Container';
import './index.css';

import { BsEyeFill, BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'
import Slider from '../../Slider';
import { useNavigate } from 'react-router-dom';
import { ProjectType } from '../../../Assets/Projects';

interface CardProps extends ProjectType {
  className: string,
}

const CardPropsDefault = {
  className: ""
}

const Card = ({
  slug,
  title,
  description,
  className,
  github,
  live,
  media,
  skills,
}: CardProps): JSX.Element => {

  const [inActions, setInActions] = useState(false)

  const navigate = useNavigate()

  const goToProject = () => {
    navigate(`/my-projects/${slug}`)
  }

  return (
    <button
      onClick={goToProject}
      className="project-card-link">
      <Container
        seeThroughBackground
        blured
        className={`project-card ${className} ${inActions ? 'in-action' : ''}`}>
        <Slider className='image'
          slides={
            media.filter(media_piece => !media_piece.endsWith('.mp4'))
              .map(media_piece =>
                <img key={media_piece} src={media_piece} alt={title} />)
          } />
        <div className='column'>
          <div className='info'>
            <h3>{title}</h3>
            <p>{description}</p>
            {skills &&
              <div className='skills'>
                <h4>Skills</h4>
                <ul>
                  {skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
              </div>
            }
          </div>
          <div className='actions'>
            {github &&
              <a href={github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => { setInActions(true) }}
                onMouseLeave={() => { setInActions(false) }}
                className='action-link'>
                <BsGithub /><span>View Code</span>
              </a>
            }
            {live &&
              <a href={live}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => { setInActions(true) }}
                onMouseLeave={() => { setInActions(false) }}
                className='action-link'>
                <BsEyeFill /><span>Live view</span>
              </a>
            }
            {(live || github) &&
              <span className={`external_icon ${inActions ? 'glow' : ''}`}>
                <BiLinkExternal />
              </span>}
          </div>
        </div>
      </Container>
    </button>
  );
}

Card.defaultProps = CardPropsDefault

export default Card;



