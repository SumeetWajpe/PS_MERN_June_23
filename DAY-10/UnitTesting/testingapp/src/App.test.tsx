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
  it("h3 is having 0 as the initial state value", () => {
    // AAA -> Arrange -> Act -> Assert

    // Arrange
    let appInstance = shallow(<App initialCount={0} />);
    let h3Text = appInstance.find("h3").text();

    expect(h3Text).toBe("0");
  });
  it("checks for incremented count on button click", () => {
    // AAA -> Arrange -> Act -> Assert

    // Arrange
    let appInstance = shallow(<App initialCount={0} />);
    let button = appInstance.find("button");

    // Act
    button.simulate("click"); // trigger the click event

    // Assert
    let h3Text = appInstance.find("h3").text();
    expect(h3Text).toBe("1");
  });
});

// npm i --save-dev enzyme enzyme-adapter-react-16 --force
// npm i @types/enzyme-adapter-react-16 --force
