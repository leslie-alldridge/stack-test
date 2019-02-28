import * as actions from "../../../src/actions/deleteOne";
import nock from "nock";

test("delete cats", () => {
  const scope = nock("http://localhost/api/v1/cats/delete/1")
  .delete('').reply(200, {data: [{'length': 2}]})

  const dispatch = jest.fn();

  return actions
    .deleteOneAction(1)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2);
      expect(dispatch.mock.calls[0][0].type).toBe("LOADING");
      expect(dispatch.mock.calls[1][0].type).toBe("SUCCESS");
      expect(dispatch.mock.calls[1][0].isFetching).toBe(false);

      scope.done();
    });
});

test("delete cats error", () => {
  const scope = nock("http://localhost/api/v1/cats/delete/1")
  .delete('').reply(200)

  const dispatch = jest.fn();

  return actions
    .deleteOneAction(1)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2);      
      expect(dispatch.mock.calls[0][0].type).toBe("LOADING");
      expect(dispatch.mock.calls[1][0].type).toBe("ERROR");
      expect(dispatch.mock.calls[1][0].isFetching).toBe(false);

      scope.done();
    });
});