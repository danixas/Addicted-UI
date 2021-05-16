import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Users from ".";
import { Button } from "react-bootstrap";

Enzyme.configure({
  adapter: new Adapter(),
});

describe("Users tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Users />);
    expect(wrapper).not.toBeNull();
  });
  
  it("contains main components based on permissions", () => {
    let wrapper = shallow(<Users />);
    expect(wrapper.find(Button).length).toEqual(1);
  });
});