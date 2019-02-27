import * as actions from "../../../src/actions/deleteOne";

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

describe("loading action", () => {
  it("loading action", () => {
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
