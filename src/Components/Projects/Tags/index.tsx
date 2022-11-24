import React from 'react';
import './index.css';
import Tag, { onTagChangeType } from '../Tag';

type TagsProps = {
  tags: string[],
  onTagChange: onTagChangeType,
  className: string
}

const TagsPropsDefault = {
  tags: [],
  onTagChange: null,
  className: ""
}

const Tags = ({
  tags,
  onTagChange,
  className
}: TagsProps): JSX.Element => {
  return <div className='tags-wrapper'>
    <div className={`tags ${className}`}>

      {
        tags.map(tag =>
          <Tag key={tag} name={tag} onChange={onTagChange} />
        )
      }
    </div>
  </div>
}

Tags.defaultProps = TagsPropsDefault

export default Tags;



