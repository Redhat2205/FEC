/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  render, waitFor, screen, cleanup, fireEvent,
} from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
// import { waitFor } from './utils';
import axios from 'axios';

import Overview from '../../Client/src/Widget/Overview/Overview.jsx';
import ImageGallery from '../../Client/src/Widget/Overview/Components/ImageGallery.jsx';
import ProductInfo from '../../Client/src/Widget/Overview/Components/ProductInfo.jsx';
import ProductAdditionalInfo from '../../Client/src/Widget/Overview/Components/ProductAdditionalInfo.jsx';
import App from '../../Client/src/App.jsx';

// axios.defaults.baseURL = `http://localhost:3000`;

describe('test!!', () => {
  // beforeAll(async () => {
  //   await render(<ProductInfo />);
  // });
  test('rendering the product info Section', async () => {
    // await waitFor(() => {
    //   expect(screen.getByTestId("PiSection")).toBeInTheDocument();
    // }, { timeout: 4000 });
    // const { root } = create(<App />);
    render(<App />);
    await new Promise((a) => {
      // wait 2s and run tests
      setTimeout(a, 2000);
    });
    expect(screen.getByTestId("app")).toBeInTheDocument();
    expect(screen.getByTestId("PiSection")).toBeInTheDocument();
    // await waitFor(() => {
    // //   expect(root.findByProps({ "data-testid": "app" })).toBeInTheDocument();
    // // });
    //   expect(screen.getByTestId("app")).toBeInTheDocument();
    // }, { timeout: 2000 });
    // await waitFor(() => {
    //   expect(screen.getByTestId("PiSection")).toBeInTheDocument();
    // });
  });
});
