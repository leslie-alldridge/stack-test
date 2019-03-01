import React from "react";
import { EditOne } from "../../../src/components/EditOne";

import { shallow, mount } from "enzyme";
import "../../../setup.js";
import sinon from "sinon";

const clickFn = jest.fn();

it("renders without crashing", () => {
  expect(JSON.stringify(EditOne)).toMatchSnapshot();
});

describe("<EditOne />", () => {
  test("renders without crashing", () => {
    shallow(<EditOne state={{ cats: { err2: "err" } }} />);
  });

  it("works", () => {
    const wrap = shallow(<EditOne state={{ cats: { err2: "err" } }} />);
    wrap.setState({ id: 0, name: "", age: 0, location: "", error: false });
    expect(wrap.state()).toEqual({
      id: 0,
      name: "",
      age: 0,
      location: "",
      error: false
    });
  });

  // it("button click should run function", () => {
  //   beforeEach(() => {
  //     const component = mount(
  //       <EditOne onClick={clickFn} state={{ cats: { err2: "err" } }} />
  //     );
  //     component.findWhere(node => node.innerText === "Save").simulate("click");
  //     expect(clickFn).toHaveBeenCalled();
  //     expect(component.state()).toEqual({
  //       id: 0,
  //       name: "",
  //       age: 0,
  //       location: ""
  //     });
  //   });
  // });

  // describe("<DeleteOne />", () => {
  //   it("responds to name change", () => {
  //     const handleChangeSpy = sinon.spy(EditOne.prototype, "handleChange");
  //     const event = { target: { name: "num", value: 2 } };
  //     const wrap = mount(<EditOne />);
  //     wrap.find("input").simulate("change", event);
  //     expect(handleChangeSpy.calledOnce).toEqual(true);
  //   });

  describe("<DeleteOne />", () => {
    it("responds to name change", () => {
      const handleChangeSpy = sinon.spy(EditOne.prototype, "handleChange");
      const event = { target: { name: "num", value: 2 } };
      const wrap = mount(<EditOne state={{ cats: { err2: "err" } }} />);
      wrap.find(".testID").simulate("change", event);
      expect(handleChangeSpy.calledOnce).toEqual(true);
    });

    it("button click should run function", () => {
      const EditOneSpy = sinon.spy(EditOne.prototype, "save");
      const event = { target: { name: "num", value: 2 } };
      const wrap = mount(
        <EditOne state={{ cats: { err2: "err" } }} EditOne={clickFn} />
      );
      wrap.find("button").simulate("click", event);

      expect(EditOneSpy.calledOnce).toEqual(true);
      expect(wrap.state()).toEqual({
        id: 0,
        name: "",
        age: 0,
        location: "",
        error: false
      });
    });
  });
});
