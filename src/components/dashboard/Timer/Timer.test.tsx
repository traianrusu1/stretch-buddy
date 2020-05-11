import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Timer from './Timer';

afterEach(cleanup);

describe('<Timer />', () => {
  test('renders', () => {
    const { container } = render(<Timer myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

