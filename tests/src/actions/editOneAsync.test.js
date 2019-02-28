import * as actions from "../../../src/actions/editOne";
import nock from "nock";

test("editing cats error", () => {
  const scope = nock("http://localhost/api/v1/cats/edit/1")
    .post("")
    .reply(200)
  const dispatch = jest.fn();

  return actions
    .editOneAction(1, "leslie", 22, "wlg")(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2);
      expect(dispatch.mock.calls[0][0].type).toBe("LOADING");
      expect(dispatch.mock.calls[1][0].isFetching).toBe(false);
      expect(dispatch.mock.calls[1][0].type).toBe("ERROR2");
      expect(dispatch.mock.calls[1][0].isFetching).toBe(false);
      scope.done();
    });
});

test("editing cats success", () => {
  const scope = nock("http://localhost/api/v1/cats/edit/1")
    .post("")
    .reply(200, [
      { data: { id: 1, name: "leslie", location: "wellington", age: 26 } }
    ])
  const dispatch = jest.fn();

  return actions
    .editOneAction(1, "leslie", 22, "wlg")(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2);
      expect(dispatch.mock.calls[0][0].type).toBe("LOADING");
      expect(dispatch.mock.calls[0][0].isFetching).toBe(true);
      expect(dispatch.mock.calls[1][0].type).toBe("SUCCESS");
      expect(dispatch.mock.calls[1][0].isFetching).toBe(false);
      scope.done();
    });
});
