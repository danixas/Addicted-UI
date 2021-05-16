import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BetsTable from "../../home/components/betsTable";

Enzyme.configure({
  adapter: new Adapter(),
});

describe("Bets table tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<BetsTable />);
    expect(wrapper).not.toBeNull();
  });
});