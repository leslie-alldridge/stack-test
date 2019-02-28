import * as actions from "../../../src/actions/saveOne";
import nock from "nock";

test("save cats", () => {
  const scope = nock("http://localhost/api/v1/cats/save/")
  .post('').reply(200, [
    { data: { id: 1, name: "leslie", location: "wellington", age: 26 } }
  ])

  const dispatch = jest.fn();

  return actions
    .saveOneAction("leslie", 22, "wellington")(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2);
      expect(dispatch.mock.calls[0][0].type).toBe("LOADING");
      expect(dispatch.mock.calls[1][0].type).toBe("SUCCESS");
      expect(dispatch.mock.calls[1][0].isFetching).toBe(false);

      scope.done();
    });
});

test("save cats error", () => {
  const scope = nock("http://localhost/api/v1/cats/save")
    .post("")
    .reply(200);

  const dispatch = jest.fn();

  return actions
    .saveOneAction('leslie', 22, 'wellington')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2);
      expect(dispatch.mock.calls[0][0].type).toBe("LOADING");
      expect(dispatch.mock.calls[1][0].type).toBe("ERROR");
      expect(dispatch.mock.calls[1][0].isFetching).toBe(false);

      scope.done();
    });
});
