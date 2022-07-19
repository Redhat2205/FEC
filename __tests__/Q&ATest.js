import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen } from '@testing-library/react';

// import widgets
import Q_A from '../Client/src/Widget/Q&A/Q&A.jsx';

describe("something", () => {
  it('rendering Q&A dynamically from api response data', async () => {
    render(<Q_A />);
    const target = await screen.getByTestId('qna');
    expect(target).not.toBeNull();
    expect(target.find(Child).length).toEqual(3);
  })
})