import React from "react";
import DeleteOne from "../../../src/components/DeleteOne";
import { shallow, mount } from "enzyme";
import "../../../setup.js";

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

  it("button click should run function", () => {
    beforeEach(() => {
      const component = mount(<DeleteOne onClick={clickFn} />);
      component
        .findWhere(node => node.innerText === "Delete")
        .simulate("click");
      expect(clickFn).toHaveBeenCalled();
    });
  });

  // it("Updates the state", () => {
  //   const num2 = 2;
  //   const wrapper = shallow(
  //     <Provider store={store}>
  //       <DeleteOne />
  //     </Provider>
  //   );
  //   const input = wrapper.find("input");

  //   input.simulate("change", { target: { num: num2 } });

  //   expect(wrapper.state().num).toEqual(num2);
  // });
});
