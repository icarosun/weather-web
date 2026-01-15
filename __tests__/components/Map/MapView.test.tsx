import React from 'react';
import { render, screen } from "@testing-library/react";

import MapView from "../../../src/components/Map/MapView.tsx";

describe("MapView", () => {
  test('renders with testId', () => {
    const expectedTestId = "maptest";

    render(<MapView id={"map"} />)

    screen.debug();

    // const { getByTestId } = render(<MapView id={expectedTestId} />);

    // expect(() => {
    //   getByTestId(expectedTestId);
    // }).not.toTrow();
  })
});
