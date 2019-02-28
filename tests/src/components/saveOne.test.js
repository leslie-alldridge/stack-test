import SaveOne from '../../../src/components/SaveOne'

it('renders without crashing', () => {
    expect(JSON.stringify(SaveOne)).toMatchSnapshot();
  });