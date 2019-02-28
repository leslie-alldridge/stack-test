import React from "react";
import SaveOne from "../../../src/components/SaveOne";

import { shallow, mount } from "enzyme";
import "../../../setup.js";

const clickFn = jest.fn();

it("renders without crashing", () => {
  expect(JSON.stringify(SaveOne)).toMatchSnapshot();
});

describe("<SaveOne />", () => {
  test("renders without crashing", () => {
    shallow(<SaveOne />);
  });

  it("works", () => {
    const wrap = shallow(<SaveOne />);
    wrap.setState({ num: 1 });
    expect(wrap.state("num")).toEqual(1);
  });

  it("button click should run function", () => {
    beforeEach(() => {
      const component = mount(<SaveOne onClick={clickFn} />);
      component
        .findWhere(node => node.innerText === "Delete")
        .simulate("click");
      expect(clickFn).toHaveBeenCalled();
    });
  });
});
