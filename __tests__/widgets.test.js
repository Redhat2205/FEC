import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen } from '@testing-library/react';

// import widgets
import R_R from '../Client/src/Widget/R&R/R&R.jsx';

// write tests per widget


// Overview

// QA

// Related

// Ratings

test('rendering widget dynamically from api response data', () => {
  render(<R_R />);
  const target = screen.getByTestId("rnr");
  expect(target).not.toBeNull();
});