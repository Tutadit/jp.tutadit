import React from 'react';
import { ItemProps } from '../Item';
import './index.css';

interface TextProps extends ItemProps {
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



