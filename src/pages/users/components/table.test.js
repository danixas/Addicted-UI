import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Modal } from "react-bootstrap";
import MaterialTable from 'material-table'
import UsersTable from "./table";

Enzyme.configure({
  adapter: new Adapter(),
});

describe("Users Table tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<UsersTable />);
    expect(wrapper).not.toBeNull();
  });

  it("renders all correct components", () => {
    const wrapper = shallow(<UsersTable />);
    expect(wrapper.find(MaterialTable).length).toEqual(1);
    expect(wrapper.find(Modal).length).toEqual(1);
    
  });
});
