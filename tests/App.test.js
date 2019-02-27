import React from "react";
import { shallow } from "enzyme";
import "../setup.js";

import App from "../src/App";

describe("<App />", () => {
  test("renders without crashing", () => {
    shallow(<App />);
  });

  test('contains all : <Connect(GetAll) />" component on landing page', () => {
    const expected = "<Connect(GetAll) />";
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toMatch(expected);
  });
  test("renders <Connect(GetOne) />", () => {
    const expected = "<Connect(GetOne) />";
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toMatch(expected);
  });
  test("renders <Connect(SaveOne) />", () => {
    const expected = "<Connect(SaveOne) />";
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toMatch(expected);
  });
  test("renders <Connect(DeleteOne) />", () => {
    const expected = "<Connect(DeleteOne) />";
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toMatch(expected);
  });
  test("renders <Connect(EditOne) />", () => {
    const expected = "<Connect(EditOne) />";
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toMatch(expected);
  });
});
