---
to: "<% if(locals.parent){ -%>src/Components/<%= parent %>/<%= Name %>/index.test.tsx<% } else { -%>src/Components/<%= Name %>/index.test.tsx<% } -%>"
---
import React from 'react';
import { render, screen } from '@testing-library/react';
import <%= Name %> from '../<%= Name %>';

test('', () => {
    render(<<%= Name %> />);
});