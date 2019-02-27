import * as actions from "../../../src/actions/editOne";
import nock from "nock";

test("editing cats", () => {
  const cats = {
    id: 1,
    name: "leslie",
    age: 22,
    location: "wellington"
  };
  const scope = nock("http://localhost")
    .post("/api/v1/cats/edit/1")
    .reply(200, [
      { data: { id: 1, name: "leslie", location: "wellington", age: 26 } }
    ]);
  const dispatch = jest.fn();

  return actions
    .editOneAction(1, "leslie", 22, "wlg")(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2);
      expect(dispatch.mock.calls[0][0].type).toBe("LOADING");
      expect(dispatch.mock.calls[1][0].isFetching).toBe(true);
      expect(dispatch.mock.calls[1][0].type).toBe("SUCCESS");
      expect(dispatch.mock.calls[1][0].isFetching).toBe(false);
      scope.done();
    });
});
