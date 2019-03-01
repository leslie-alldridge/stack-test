import React from "react";
import { GetOne, mapDispatchToProps } from "../../../src/components/GetOne";
import { shallow, mount } from "enzyme";
import "../../../setup.js";
import sinon from "sinon";
const clickFn = jest.fn();

it("renders without crashing", () => {
  expect(JSON.stringify(GetOne)).toMatchSnapshot();
});

describe("<GetOne />", () => {
  test("renders without crashing", () => {
    shallow(<GetOne state={{ cats: { err: "err" } }} />);
  });

  it("works", () => {
    const wrap = shallow(<GetOne state={{ cats: { err: "err" } }} />);
    wrap.setState({ num: 1 });
    expect(wrap.state("num")).toEqual(1);
  });
});

describe("<GetOne />", () => {
  it("responds to name change", () => {
    const handleChangeSpy = sinon.spy(GetOne.prototype, "handleChange");
    const event = { target: { name: "num", value: 2 } };
    const wrap = mount(<GetOne state={{ cats: { err: "err" } }} />);
    wrap.find("input").simulate("change", event);
    expect(handleChangeSpy.calledOnce).toEqual(true);
  });

  it("button click should run function", () => {
    const getOneSpy = sinon.spy(GetOne.prototype, "getOne");
    const event = { target: { name: "num", value: 2 } };
    const wrap = mount(
      <GetOne
        state={{
          cats: {
            catData: [{ id: 1, name: "test", age: 22, location: "testloca" }],
            loading: false
          }
        }}
        getAll={clickFn}
        getOne={clickFn}
      />
    );
    wrap.setState({ num: 1 });
    expect(wrap.containsMatchingElement(<li>test</li>)).toBeTruthy();
    wrap.setState({ num: 2 });
    expect(wrap.containsMatchingElement(<li>test</li>)).toBeFalsy();
    wrap.find("button").simulate("click", event);
    expect(getOneSpy.calledOnce).toEqual(true);
  });
});

describe("mapDispatchToProps", () => {
  it("should dispatch actions.onClick() when onClick() is called", () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.getOne();
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
