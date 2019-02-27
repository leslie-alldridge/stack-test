import * as actions from "../../../src/actions/deleteOne";
import nock from "nock";

test("save cats", () => {
  const scope = nock("http://localhost")
    .intercept("/user/removeuserskills", "DELETE", {
      email: "Johny@gmail.com",
      user_skill: "accoutant"
    })
    .reply(200, {
      status: 200,
      message: "200: Successfully deleted skill"
    });

  const dispatch = jest.fn();

  return actions
    .deleteOneAction(22)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2);
      expect(dispatch.mock.calls[0][0].type).toBe("LOADING");
      expect(dispatch.mock.calls[1][0].type).toBe("SUCCESS");
      expect(dispatch.mock.calls[1][0].isFetching).toBe(false);

      scope.done();
    });
});
