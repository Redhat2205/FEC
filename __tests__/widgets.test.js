import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen } from '@testing-library/react';

// import widgets
import R_R from '../Client/src/Widget/R&R/R&R.jsx';
import Q_A from '../Client/src/Widget/Q&A/Q&A.jsx';
import Overview from '../Client/src/Widget/Overview/Overview.jsx';

// write tests per widget

// Overview
// test('rendering widget - overview', () => {
//   render(<Overview />);
//   const target = screen.getByTestId("overview");
//   expect(target).not.toBeNull();
// });

// // QA
// it('rendering Q&A dynamically from api response data', () => {
//   render(<Q_A/>);
//   const target = screen.getByTestId('qna');
//   expect(target).not.toBeNull();
// });

// // Related

// // Ratings

// test('rendering R_R widget dynamically from api response data', () => {
//   render(<R_R />);
//   const target = screen.getByTestId("rnr");
//   expect(target).not.toBeNull();
// });