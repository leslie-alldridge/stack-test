import * as actions from "../../../src/actions/editOne";

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
    const err2 = "error";
    const expectedAction = {
      type: "ERROR2",
      isFetching: false,
      err2
    };
    expect(actions.errorMessage2("error")).toEqual(expectedAction);
  });
});

describe("receive cats", () => {
  it("receive cats", () => {
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
