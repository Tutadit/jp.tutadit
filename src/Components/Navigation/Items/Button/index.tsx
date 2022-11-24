import React from 'react';
import './index.css';
import { ItemProps } from '../Item'

export interface ButtonProps extends ItemProps {
  onClick:() => void,
  children: React.ReactNode,
  className:string,
}

const ButtonPropsDefault = {
  onClick: null,
  children: null,
  className: ""
}

const Button = ({
  onClick,
  children,
  className
}: ButtonProps): JSX.Element => {
  return (    
    <button className={className} onClick={onClick}>
      {children}
    </button>  
  );
}

Button.defaultProps = ButtonPropsDefault

export default Button;



