import React from "react";
import { SaveOne } from "../../../src/components/SaveOne";

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
    wrap.setState({ name: "", age: "", location: "", error: false });
    expect(wrap.state("error")).toEqual(false);
  });

  it("button click should run function", () => {
    beforeEach(() => {
      const component = mount(<SaveOne onClick={clickFn} />);
      component.findWhere(node => node.innerText === "Save").simulate("click");
      expect(clickFn).toHaveBeenCalled();
    });
  });
});
