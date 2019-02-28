import DeleteOne from "../../../src/components/DeleteOne";

it("renders without crashing", () => {
  expect(JSON.stringify(DeleteOne)).toMatchSnapshot();
});
