import React from 'react';

import { motion } from 'framer-motion'

import './index.css';
import { stages } from '../../../../Animations/animations';

type LogoProps = {
  src: string,
  srcSmall: string,
  alt: string,
  onClick: () => void
}

const LogoPropsDefault = {
  src: null,
  srcSmall: null,
  alt: "",
  onClick: null
}

const Logo = ({
  src,
  srcSmall,
  alt,
  onClick
}: LogoProps): JSX.Element => {
  return (
    <button onClick={onClick} className="logo-button">
      <svg viewBox="0 0 600 515.412" width="600pt" height="515.412pt">
        <defs>
          <clipPath id="_clipPath_JtzDQIJ5yfQgGyur2bRIT9knPi0uHCRa">
            <rect width="600" height="515.412" />
          </clipPath>
        </defs>
        <g clipPath="url(#_clipPath_JtzDQIJ5yfQgGyur2bRIT9knPi0uHCRa)">
          <motion.path
            initial={{
              fill: 'var(--fg-color-gray)',
              y: '29%',
            }}
            animate={{
              fill: 'var(--accent-color)',
              y: 0
            }}
            transition={stages.logoReveal}
            d=" M 394.046 219.089 L 394.046 190.193 L 569.527 109.807 L 394.046 28.897 L 394.046 0 L 600 95.622 L 600 123.468 L 394.046 219.089 Z " fill="rgb(0,0,0)" />
          <motion.path
            initial={{
              fill: 'var(--fg-color-gray)',
            }}
            animate={{
              fill: 'var(--fg-color)',
            }}
            transition={stages.logoReveal} d=" M 380.911 68.039 L 249.562 447.373 L 229.072 447.373 L 359.895 68.039 L 380.911 68.039 Z " fill="rgb(0,0,0)" />
          <motion.path
            initial={{
              fill: 'var(--fg-color-gray)',
              y: '-29%',
            }}
            animate={{
              fill: 'var(--accent-color)',
              y: 0
            }}
            transition={stages.logoReveal} d=" M 205.954 296.322 L 205.954 325.219 L 29.947 406.13 L 205.954 486.515 L 205.954 515.412 L 0 419.79 L 0 391.944 L 205.954 296.322 Z " fill="rgb(0,0,0)" />
        </g>
      </svg>
    </button>
  );
}

Logo.defaultProps = LogoPropsDefault

export default Logo;



