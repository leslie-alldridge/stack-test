import * as actions from "../../../src/actions/getAll";
import nock from "nock";

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

test("fetching cats", () => {
  const scope = nock("http://localhost")
    .get("/api/v1/cats/")
    .reply(200, [
      { data: { id: 1, name: "leslie", location: "wellington", age: 26 } }
    ]);

  const dispatch = jest.fn();

  return actions
    .getAllAction()(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2);
      expect(dispatch.mock.calls[0][0].type).toBe("LOADING");
      expect(dispatch.mock.calls[1][0].type).toBe("SUCCESS");
      expect(dispatch.mock.calls[1][0].isFetching).toBe(false);

      scope.done();
    });
});

test("fetching cats error", () => {
  const scope = nock("http://localhost")
    .get("/api/v1/cats/")
    .reply(200, [
      { data: { id: 1, name: "leslie", location: "wellington", age: 26 } }
    ]);

  const dispatch = jest.fn();

  return actions
    .getAllAction()(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2);
      expect(dispatch.mock.calls[0][0].type).toBe("LOADING");
      expect(dispatch.mock.calls[1][0].type).toBe("SUCCESS");
      expect(dispatch.mock.calls[1][0].isFetching).toBe(false);

      scope.done();
    });
});
