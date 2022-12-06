import React from 'react';
import './index.css';

type SocialProps = {
  icon:JSX.Element,
  href:string,
  name:string
}

const SocialPropsDefault = {
  icon:null,
  href:null,
  name:""
}

const Social = ({
  icon,
  href,
  name
}: SocialProps): JSX.Element => {
  return (    
    <a href={href} target="_blank" rel="noreferrer" className='nav-social'>
      {icon && <span className='nav-social-icon'>{icon}</span>}
      { name && <span className='nav-social-name'>{name}</span>}
    </a>  
  )
}

Social.defaultProps = SocialPropsDefault

export default Social;



