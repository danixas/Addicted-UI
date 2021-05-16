import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OptionsTable from "./optionsTable";

Enzyme.configure({
  adapter: new Adapter(),
});

describe("Bets options table tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<OptionsTable />);
    expect(wrapper).not.toBeNull();
  });
});