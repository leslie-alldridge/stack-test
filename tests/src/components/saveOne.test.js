import React from "react";
import { SaveOne, mapDispatchToProps } from "../../../src/components/SaveOne";

import { shallow, mount } from "enzyme";
import "../../../setup.js";
import sinon from "sinon";

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
  describe("<DeleteOne />", () => {
    it("responds to name change", () => {
      const handleChangeSpy = sinon.spy(SaveOne.prototype, "handleChange");
      const event = { target: { name: "num", value: 2 } };
      const wrap = mount(<SaveOne state={{ cats: { err2: "err" } }} />);
      wrap.find(".testID").simulate("change", event);
      expect(handleChangeSpy.calledOnce).toEqual(true);
    });

    it("button click should run function", () => {
      const SaveOneSpy = sinon.spy(SaveOne.prototype, "save");
      const event = { target: { name: "num", value: 2 } };
      const wrap = mount(
        <SaveOne state={{ cats: { err2: "err" } }} SaveOne={clickFn} />
      );
      wrap.find("button").simulate("click", event);

      expect(SaveOneSpy.calledOnce).toEqual(true);
      expect(wrap.state()).toEqual({
        name: "",
        age: "",
        location: "",
        error: true
      });
    });
    describe("mapDispatchToProps", () => {
      it("should dispatch actions.onClick() when onClick() is called", () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        props.SaveOne();
        expect(dispatch.mock.calls.length).toBe(1);
      });
    });

    // describe("state error", () => {
    //   const wrap = shallow(<SaveOne state={{ cats: { err2: "err" } }} />);
    //   wrap.setState({ id: 0, name: "", age: 0, location: "", error: true });
    //   expect(
    //     wrap.containsMatchingElement(<p>please fill out all details</p>)
    //   ).toBeTruthy();
    // });
  });
});
