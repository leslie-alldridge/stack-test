// import * as actions from "../../../src/actions/editOne";
// import nock from "nock";
// import axios from "axios";
// var MockAdapter = require("axios-mock-adapter");
// var mock = new MockAdapter(axios);

// describe("loading action", () => {
//   it("loading action", () => {
//     const expectedAction = {
//       type: "LOADING",
//       isFetching: true
//     };
//     expect(actions.loading()).toEqual(expectedAction);
//   });
// });

// describe("error message", () => {
//   it("error message", () => {
//     const err2 = "error";
//     const expectedAction = {
//       type: "ERROR2",
//       isFetching: false,
//       err2
//     };
//     expect(actions.errorMessage2("error")).toEqual(expectedAction);
//   });
// });

// describe("receive cats", () => {
//   it("receive cats", () => {
//     const cats = {
//       id: 1,
//       name: "leslie",
//       age: 26,
//       location: "wellington"
//     };
//     const expectedAction = {
//       type: "SUCCESS",
//       isFetching: false,
//       cats
//     };
//     expect(actions.receiveCats(cats)).toEqual(expectedAction);
//   });
// });

// test("editing cats", () => {
//   const cats = {
//     id: 1,
//     name: "leslie",
//     age: 22,
//     location: "wellington"
//   };
//   const scope = mock.onPost("/api/v1/cats/edit/1").reply(200, cats);

//   const dispatch = jest.fn();

//   return actions
//     .editOneAction()(dispatch)
//     .then(() => {
//       expect(dispatch.mock.calls.length).toBe(2);
//       expect(dispatch.mock.calls[0][0].type).toBe("LOADING");
//       expect(dispatch.mock.calls[1][0].isFetching).toBe(true);
//       expect(dispatch.mock.calls[1][0].type).toBe("SUCCESS");
//       expect(dispatch.mock.calls[1][0].isFetching).toBe(false);
//       scope.done();
//     });
// });
