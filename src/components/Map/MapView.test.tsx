import { render, screen } from "@testing-library/react";
import MapView from "./MapView.tsx";

import { describe, it, expect, vi } from "vitest";

vi.mock("react-leaflet");

describe("MapView", () => {
  it("renders map container with correct id", () => {
    render(<MapView id="maptest" />)

    expect(screen.getByTestId("maptest")).toBeInTheDocument();
  })
})
