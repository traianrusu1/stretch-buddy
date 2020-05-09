import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
  test('renders', () => {
    const { container } = render(<Controls myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

