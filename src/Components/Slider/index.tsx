import React, { useEffect, useState } from 'react';
import './index.css';

type SliderProps = {
  slides: JSX.Element[],
  itemsPerPage:number,
  slideDuration:number,
  slide:boolean,
  className:string,
}

const SliderPropsDefault = {
  itemsPerPage:1,
  slideDuration:1500,
  slide:true,
  className:""
}

const Slider = ({
  slides,
  itemsPerPage,
  slideDuration,
  slide,
  className
}: SliderProps): JSX.Element => {

  const [ slider, setSlider ] = useState({
    current:0    
  })

  useEffect(() => {

    if(slides.length <= itemsPerPage)
      return

    if(!slide)
      return
    
    const nextSlide = () => {
      setSlider(slider => ({
        current:( slider.current + itemsPerPage ) % slides.length
      }))
    }

    const interval = setInterval(nextSlide, slideDuration)

    return () => {
      clearInterval(interval)
    }
  },[])

  return (    
    <div className={`slider ${className}`}>
      { slides.slice(slider.current, slider.current + itemsPerPage) }
    </div>  
  );
}

Slider.defaultProps = SliderPropsDefault

export default Slider;



