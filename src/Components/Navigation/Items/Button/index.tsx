import React from 'react';
import './index.css';

export interface ButtonProps {
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



