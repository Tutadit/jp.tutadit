import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

test('', () => {
    render(<Card tags={[]} title="" slug="" media={[]} description=''/>);
});