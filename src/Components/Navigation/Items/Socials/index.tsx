import React from 'react';
import { ItemProps } from '../Item';
import Social from '../Social';
import './index.css';

import { BsGithub, BsLinkedin } from 'react-icons/bs'

export interface SocialsProps extends ItemProps {
  github?:string,
  linkedin?:string,
  className:string
}

const SocialsPropsDefault = {
  github:null,
  linkedin:null,
  className:""
}

const Socials = ({
  github,
  linkedin,
  className
}: SocialsProps): JSX.Element => {
  return (    
    <div className={`nav-socials ${className}`}>
      {
        github &&
        <Social 
          name="Github"
          icon={<BsGithub />}
          href={github} />
      }
      {
        linkedin &&
        <Social 
          name="LinkedIn"
          icon={<BsLinkedin />}
          href={linkedin} />
      }
    </div>
  );
}

Socials.defaultProps = SocialsPropsDefault

export default Socials;



