import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Dashboard from './Dashboard';

afterEach(cleanup);

describe('<Dashboard />', () => {
  test('renders', () => {
    const { container } = render(<Dashboard myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

