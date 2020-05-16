import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ButtonGroupQuad from './ButtonGroupQuad';

afterEach(cleanup);

describe('<ButtonGroupQuad />', () => {
  test('renders', () => {
    const { container } = render(<ButtonGroupQuad myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

