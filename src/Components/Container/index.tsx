import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import './index.css';

type ContainerProps = {
  children: React.ReactNode,
  className: string,
  padded: boolean,
  bordered: boolean,
  blured: boolean,
  extraBlured:boolean,
  rounded: boolean,
  dropShadow: boolean,
  seeThroughBackground:boolean,
  opaqueBackground:boolean,
  title: string
}

const ContainerPropsDefault = {
  children: null,
  className: "",  
  title: null,
  padded:false,
  bordered:false,
  blured:false,
  extraBlured:false,
  rounded:false,
  dropShadow:false,
  seeThroughBackground:false,
  opaqueBackground:false,    
}

const Container = ({
  children,
  className,  
  title,
  padded,
  bordered,
  blured,
  extraBlured,
  rounded,
  dropShadow,
  seeThroughBackground,
  opaqueBackground,  
}: ContainerProps): JSX.Element => {

  return (
    <div className={`container ${className}
                      ${padded ? 'padded' : ''}
                      ${title ? 'titled' : ''}
                      ${bordered ? 'bordered' : ''}
                      ${blured ? 'blured' : ''}
                      ${extraBlured ? 'extra-blured' : ''}
                      ${rounded ? 'rounded-corners' : ''}
                      ${dropShadow ? 'drop-shadow' : ''}
                      ${seeThroughBackground ? 'see-through-background' : ''}
                      ${opaqueBackground ? 'opaque-background' : ''}`}>
      {title &&
        <div className="container-title">
          <span className='container-title-icon'>
            <FiChevronRight />
          </span>
          <h1>
            {title}
          </h1>
        </div>}
      {children}
    </div>
  );
}

Container.defaultProps = ContainerPropsDefault

export default Container;



