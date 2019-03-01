import React from "react";
import { GetAll, mapDispatchToProps } from "../../../src/components/GetAll";

import { shallow, mount } from "enzyme";
import "../../../setup.js";
import sinon from "sinon";

const clickFn = jest.fn();

it("renders without crashing", () => {
  expect(JSON.stringify(GetAll)).toMatchSnapshot();
});

describe("<GetAll />", () => {
  test("renders without crashing", () => {
    shallow(<GetAll getAll={clickFn} state={{ cats: { err2: "err" } }} />);
  });

  describe("mapDispatchToProps", () => {
    it("should dispatch actions.onClick() when onClick() is called", () => {
      const dispatch = jest.fn();
      const props = mapDispatchToProps(dispatch);
      props.getAll();
      expect(dispatch.mock.calls.length).toBe(1);
    });
  });

  it("button click should run function", () => {
    const GetAllSpy = sinon.spy(GetAll.prototype, "getAll");
    const event = { target: { name: "num", value: 2 } };
    const wrap = mount(
      <GetAll
        state={{
          cats: {
            catData: [{ id: 1, name: "test", age: 22, location: "testloca" }],
            loading: false
          }
        }}
        getAll={clickFn}
      />
    );
    wrap.find("button").simulate("click", event);

    expect(GetAllSpy.calledOnce).toEqual(true);
  });
});
