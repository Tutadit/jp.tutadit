---
to: "<% if(locals.parent){ -%>src/Components/<%= parent %>/<%= Name %>/index.tsx<% } else { -%>src/Components/<%= Name %>/index.tsx<% } -%>"
---
import React from 'react';
import './index.css';

type <%= Name %>Props = {
  
}

const <%= Name %>PropsDefault = {
 
}

const <%= Name %> = ({}: <%= Name %>Props): JSX.Element => {
  return (    
    <div>
    </div>  
  );
}

<%= Name %>.defaultProps = <%= Name %>PropsDefault

export default <%= Name %>;



