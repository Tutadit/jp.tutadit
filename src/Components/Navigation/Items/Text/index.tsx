import React from 'react';
import './index.css';

interface TextProps {
  text:string
}

const TextPropsDefault = {
  text:""
}

const Text = ({
  text
}: TextProps): JSX.Element => {
  return (    
    <div className='nav-text'>
      {text}
    </div>  
  );
}

Text.defaultProps = TextPropsDefault

export default Text;



