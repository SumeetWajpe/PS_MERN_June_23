import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import App from "./App";

describe("suites for App component", () => {
  it("checks for App instance to be truthy", () => {
    let appInstance = shallow(<App />);
    expect(appInstance).toBeDefined();
  });
});
