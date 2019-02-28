import React from "react";
import EditOne from "../../../src/components/EditOne";

import { shallow, mount } from "enzyme";
import "../../../setup.js";

const clickFn = jest.fn();

it("renders without crashing", () => {
  expect(JSON.stringify(EditOne)).toMatchSnapshot();
});

describe("<EditOne />", () => {
  test("renders without crashing", () => {
    shallow(<EditOne />);
  });

  it("works", () => {
    const wrap = shallow(<EditOne />);
    wrap.setState({ num: 1 });
    expect(wrap.state("num")).toEqual(1);
  });

  it("button click should run function", () => {
    beforeEach(() => {
      const component = mount(<EditOne onClick={clickFn} />);
      component
        .findWhere(node => node.innerText === "Delete")
        .simulate("click");
      expect(clickFn).toHaveBeenCalled();
    });
  });
});
