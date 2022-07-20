import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// import widgets
import Q_A from '../Client/src/Widget/Q&A/Q&A.jsx';
// import Index from '../Client/src/index.jsx';

test('rendering Q&A dynamically from api response data', async () => {
  const element = await render(<Q_A />);
  const target = screen.getByTestId('');
  // expect(target).not.toBeNull();
  expect(target).toBeInTheDocument();
});

// test('rendering Q&A dynamically from api response data', async () => {
//   render(<Q_A />);
//   const target = await screen.getByTestId('qna');
//   expect(target).not.toBeNull();
// });
