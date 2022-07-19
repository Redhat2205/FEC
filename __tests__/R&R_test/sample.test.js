/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  render, waitFor, screen, cleanup, fireEvent,
} from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import App from '../../Client/src/App.jsx';

describe('test!!', () => {
  test('rendering the product info Section', async () => {
    render(<App />);
    await new Promise((a) => {
      // wait 2s and run tests
      setTimeout(a, 2000);
    });

    expect(screen.getByTestId("app")).toBeInTheDocument();
    expect(screen.getByTestId("appAfterRendering")).toBeInTheDocument();
  });
});
