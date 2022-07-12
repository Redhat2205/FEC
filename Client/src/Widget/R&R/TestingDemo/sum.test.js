

import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen } from '@testing-library/react';
const imported = require('./sum');
import R_R from '../R&R.jsx';

test('adds 1 + 2 to equal 3', () => {
  expect(imported.sum(1, 2)).toBe(3);
});

test('doubles 3 to equal 6', () => {
  expect(imported.doubled(3)).toBe(6);
});

// use keyword 'test'
  // pass in a string to name this test on the report!
  // pass in a cb fn (your expected and asserted values)
test('halve 5 to equal 2.5', () => {
  expect(imported.halved(5)).toBe(2.5);
});

test('rendering elements dynamically from dummy data', () => {
  render(<R_R />);

  const target = screen.getByTestId("rnr");
  // console.log('⭐️', target.children);
  expect(target).not.toBeNull();
});