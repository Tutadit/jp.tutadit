import React, { useEffect, useState } from 'react';
import './index.css';

type TypistProps = {
  text: string[],
  typingSpeed: number,
  displayTextFor: number,
  className: string,
}

const TypistPropsDefault = {
  text: [],
  typingSpeed: 130,
  displayTextFor: 6000,
  className: ""
}


const useTypist = (
  text: string[],
  typingSpeed: number,
  displayTextFor: number,
) => {

  const [typist, setCurrent] = useState({
    text: 0,
    character: 0,
    finished: false,
    reset: false
  })

  useEffect(() => {

    if (text.length == 0)
      return

    const typeText = () => {

      setCurrent(typist => {

        if (typist.finished || typist.reset)
          return typist

        if (typist.character === text[typist.text].length)
          return {
            ...typist,
            finished: true
          }

        return {
          ...typist,
          character: typist.character + 1
        }
      })
    }

    const interval = setInterval(typeText, typingSpeed)

    return () => { clearInterval(interval) }
  }, [])


  useEffect(() => {

    if (!typist.finished)
      return

    const resetText = () => {
      setCurrent(typist => ({
        ...typist,
        reset: true,
        finished: false
      }))
    }

    const timeout = setTimeout(resetText, displayTextFor)
  }, [typist.finished])

  useEffect(() => {

    if (!typist.reset)
      return

    const resetText = () => {
      setCurrent(typist => ({
        ...typist,
        text: (typist.text + 1) % text.length,
        character: 0,
        reset: false,
      }))
    }

    const timeout = setTimeout(resetText, typingSpeed)
  }, [typist.reset])

  return typist
}


const Typist = ({
  text,
  typingSpeed,
  displayTextFor,
  className
}: TypistProps): JSX.Element => {

  const typist = useTypist(text, typingSpeed, displayTextFor)

  return (
    <div className={`typist ${className}`}>
      <span className='typist-text'>
        <span className='typist-prompt'>$ </span>
        {typist.reset &&
          <span
            className={`typist-blinker on-top`}>
            ▉
          </span>}
        <span className='typist-actual-text'>
          {
            text[typist.text].slice(0, typist.character)
          }
        </span>
        {!typist.reset &&
          <span
            className={`typist-blinker ${typist.finished ? 'blink' : ''}`}>
            ▉
          </span>
        }
        <span
          className={`typist-blinker hidden`}>
          ▉
        </span>
      </span>

    </div>
  )
}

Typist.defaultProps = TypistPropsDefault

export default Typist;



