import React, { useState } from 'react';
import { BsPlus, BsDash } from 'react-icons/bs'

import './index.css';


export type onTagChangeType = (selected:boolean, name:string) => void

type TagProps = {
  onChange: onTagChangeType,
  name: string,
  selected: boolean,
}

const TagPropsDefault = {
  onChange: null,
  selected: false,
}

const Tag = ({
  onChange,
  name,
  selected
}: TagProps): JSX.Element => {

  const [tagSelected, setTagSelected] = useState(selected)

  const onTagSelected = () => {
    setTagSelected(prev => {
      const new_val = !prev
      onChange && onChange(new_val, name)
     return new_val
    })    
  }
  return (
    <button
      className={`tag ${tagSelected ? 'selected' : ''}`}
      onClick={onTagSelected}>
      <span className='tag-name'>{name}</span>
      <span className='tag-icon'>
        {
          tagSelected ?
            <BsDash />
            :
            <BsPlus />
        }
      </span>
    </button>
  );
}

Tag.defaultProps = TagPropsDefault

export default Tag;



