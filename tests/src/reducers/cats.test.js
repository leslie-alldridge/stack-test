import cats from "../../../src/reducers/cats";
import {
  loading,
  errorMessage,
  receiveCats
} from "../../../src/actions/getAll";

describe("cat reducer", () => {
  const catData = [
    {
      id: 1,
      name: "tester",
      location: "nz",
      age: 32
    }
  ];
  it("returns the initial state", () => {
    expect(cats(undefined, {})).toMatchSnapshot();
  });

  it("handles the loading action", () => {
    expect(cats({}, loading())).toMatchSnapshot();
  });

  it("handles the error action", () => {
    expect(cats({}, errorMessage("error"))).toMatchSnapshot();
  });

  it("handles the loading action", () => {
    expect(cats({}, receiveCats(catData))).toMatchSnapshot();
  });
});
