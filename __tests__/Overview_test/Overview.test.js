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

import Overview from '../../Client/src/Widget/Overview/Overview.jsx';
import ImageGallery from '../../Client/src/Widget/Overview/Components/ImageGallery.jsx';
import ProductInfo from '../../Client/src/Widget/Overview/Components/ProductInfo.jsx';
import ProductAdditionalInfo from '../../Client/src/Widget/Overview/Components/ProductAdditionalInfo.jsx';
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
