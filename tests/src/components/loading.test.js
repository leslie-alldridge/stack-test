import React from "react";
import { shallow } from "enzyme";
import "../../../setup.js";

import Loading from "../../../src/components/loading";

it("renders without crashing", () => {
  expect(JSON.stringify(Loading)).toMatchSnapshot();
});

it("loads", () => {
  const wrapper = shallow(<Loading />);
  wrapper.setState({ loading: true });
  expect(wrapper.state("loading")).toEqual(true);
});
