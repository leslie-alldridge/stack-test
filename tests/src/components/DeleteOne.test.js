import React from "react";
import { DeleteOne } from "../../../src/components/DeleteOne";
import { shallow, mount } from "enzyme";
import "../../../setup.js";
import sinon from "sinon";

const clickFn = jest.fn();

it("renders without crashing", () => {
  expect(JSON.stringify(DeleteOne)).toMatchSnapshot();
});

describe("<DeleteOne />", () => {
  test("renders without crashing", () => {
    shallow(<DeleteOne />);
  });

  it("works", () => {
    const wrap = shallow(<DeleteOne />);
    wrap.setState({ num: 1 });
    expect(wrap.state("num")).toEqual(1);
  });
});

describe("<DeleteOne />", () => {
  it("responds to name change", () => {
    const handleChangeSpy = sinon.spy(DeleteOne.prototype, "handleChange");
    const event = { target: { name: "num", value: 2 } };
    const wrap = mount(<DeleteOne />);
    wrap.find("input").simulate("change", event);
    expect(handleChangeSpy.calledOnce).toEqual(true);
  });

  it("button click should run function", () => {
    const deleteOneSpy = sinon.spy(DeleteOne.prototype, "deleteOne");
    const event = { target: { name: "num", value: 2 } };
    const wrap = mount(<DeleteOne deleteOne={clickFn} />);
    wrap.find("button").simulate("click", event);
    expect(deleteOneSpy.calledOnce).toEqual(true);
  });
});
