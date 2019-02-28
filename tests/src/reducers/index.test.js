import { createStore } from "redux";
import combineReducers from "../../../src/reducers/index";

describe("Store", () => {
  it("should handle store initial state", () => {
    const initialState = {
      cats: {
        catData: [],
        loading: false
      }
    };

    const store = createStore(combineReducers, initialState);

    const actual = store.getState();
    const expected = {
      cats: {
        catData: [],
        loading: false
      }
    };

    expect(actual).toEqual(expected);
  });
});
