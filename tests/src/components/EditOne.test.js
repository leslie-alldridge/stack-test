import React from "react";
import {EditOne} from "../../../src/components/EditOne";

import { shallow, mount } from "enzyme";
import "../../../setup.js";
import sinon from "sinon";

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

  describe("<DeleteOne />", () => {
    it("responds to name change", () => {
      const handleChangeSpy = sinon.spy(EditOne.prototype, "handleChange");
      const event = { target: { name: "num", value: 2 } };
      const wrap = mount(<EditOne />);
      wrap.find("input").simulate("change", event);
      expect(handleChangeSpy.calledOnce).toEqual(true);
    });
  
    it("button click should run function", () => {
      const EditOneSpy = sinon.spy(EditOne.prototype, "EditOne");
      const event = { target: { name: "num", value: 2 } };
      const wrap = mount(<EditOne EditOne={clickFn} />);
      wrap.find("button").simulate("click", event);
      expect(EditOneSpy.calledOnce).toEqual(true);
    });
  });
});
