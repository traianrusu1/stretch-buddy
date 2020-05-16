import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Button from './Button';

afterEach(cleanup);

describe('<Button />', () => {
  test('renders', () => {
    const { container } = render(<Button myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

