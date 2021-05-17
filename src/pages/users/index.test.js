import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Users from ".";
import { Button, Modal } from "react-bootstrap";
import UsersTable from "./components/table";

Enzyme.configure({
  adapter: new Adapter(),
});

describe("Users tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Users />);
    expect(wrapper).not.toBeNull();
  });
  
  it("Draws usersTable", () => {
    let wrapper = shallow(<Users />);
    expect(wrapper.find(Button).length).toEqual(1);
    expect(wrapper.find("h2").length).toEqual(1);
    expect(wrapper.find(UsersTable).length).toEqual(1);
  });

  it("Button click opens modal", () => {
    const wrapper = shallow(<Users />);
    const button = wrapper.find(Button).at(0);
    expect(button.text()).toEqual("Add User");
    button.simulate("click");
    wrapper.update();
    expect(wrapper.find(Modal).at(0).props().show).toEqual(true);
  });
});