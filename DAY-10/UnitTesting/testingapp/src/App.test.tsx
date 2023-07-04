import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("suites for App component", () => {
  it("checks for App instance to be truthy", () => {
    let appInstance = render(<App />);
    expect(appInstance).toBeDefined();
  });
});
