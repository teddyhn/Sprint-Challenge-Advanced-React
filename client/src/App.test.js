import React from 'react';
import { render } from '@testing-library/react';

import App from './App';
import DarkModeToggle from './components/DarkModeToggle.js';
import { Simulate } from 'react-dom/test-utils';

test('App renders without crashing', () => {
  render(<App />);
});

test('contains sprint challenge text', () => {
  const { getByText } = render(<App />);
  getByText(/sprint challenge/i);
});

test('clicking dark mode toggle will toggle bewteen classes', () => {
  const { getByTestId } = render(<DarkModeToggle />);
  Simulate.click(getByTestId('dark-mode-toggler'))
  expect(getByTestId('dark-mode-toggle').className).toEqual('toggle toggled')
  Simulate.click(getByTestId('dark-mode-toggler'))
  expect(getByTestId('dark-mode-toggle').className).toEqual('toggle')
});