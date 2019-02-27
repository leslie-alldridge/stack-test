import * as actions from "../../../src/actions/getOne";
import nock from "nock";

test("fetching cats", () => {
  const scope = nock("http://localhost")
    .get("/api/v1/cats/1")
    .reply(200, [
      { data: { id: 1, name: "leslie", location: "wellington", age: 26 } }
    ]);

  const dispatch = jest.fn();

  return actions
    .getOneAction(1)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2);
      expect(dispatch.mock.calls[0][0].type).toBe("LOADING");
      expect(dispatch.mock.calls[1][0].type).toBe("SUCCESS");
      expect(dispatch.mock.calls[1][0].isFetching).toBe(false);

      scope.done();
    });
});
