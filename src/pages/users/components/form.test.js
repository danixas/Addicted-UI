import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import UserForm from "./form";
import { Form, Button } from 'react-bootstrap';

Enzyme.configure({
  adapter: new Adapter(),
});

describe("Users Form tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<UserForm />);
    expect(wrapper).not.toBeNull();
  });

  it("renders all correct components", () => {
    const wrapper = shallow(<UserForm />);
    expect(wrapper.find(Form).length).toEqual(1);
    expect(wrapper.find(Form.Group).length).toEqual(6);
    expect(wrapper.find(Form.Label).length).toEqual(6);
    let nameInput = wrapper.find(Form.Control).at(0);
    expect(nameInput.props().name).toEqual("userName");
    nameInput.simulate('change', { target: { name: "userName", value: 'New name' } });
    nameInput = wrapper.find(Form.Control).at(0);
    expect(nameInput.props().value).toEqual('New name');
  });
});