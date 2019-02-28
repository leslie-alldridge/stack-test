import Index from '../src/index';

it('renders without crashing', () => {
  expect(JSON.stringify(Index)).toMatchSnapshot();
});