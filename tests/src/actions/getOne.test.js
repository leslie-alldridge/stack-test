import * as actions from "../../../src/actions/getOne";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";

describe("loading action", () => {
  it("loading action", () => {
    const expectedAction = {
      type: "LOADING",
      isFetching: true
    };
    expect(actions.loading()).toEqual(expectedAction);
  });
});

describe("error message", () => {
  it("error message", () => {
    const err = "error";
    const expectedAction = {
      type: "ERROR",
      isFetching: false,
      err
    };
    expect(actions.errorMessage("error")).toEqual(expectedAction);
  });
});

describe("receive cats", () => {
  it("receives cats", () => {
    const cats = {
      id: 1,
      name: "leslie",
      age: 26,
      location: "wellington"
    };
    const expectedAction = {
      type: "SUCCESS",
      isFetching: false,
      cats
    };
    expect(actions.receiveCats(cats)).toEqual(expectedAction);
  });
});
