// file: src/Profile.test.jsx

import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

test("renders with the correct title ", () => {
  // Setup - rendering the component on the page
    render(<Profile name="duck" job="CEO" birthday="1987"/>);

  // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("duck");
});
