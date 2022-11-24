import React, { useEffect, useState } from 'react';
import './index.css';

type DividerProps = {
  className: string,
}

const DividerPropsDefault = {
  className: ""
}

const Divider = ({
  className
}: DividerProps): JSX.Element => {

  return (
    <div className={`nav-divider ${className}`}>
      <span className='nav-divider-line'></span>
    </div>)  
}

Divider.defaultProps = DividerPropsDefault

export default Divider;



