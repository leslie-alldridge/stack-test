import EditOne from '../../../src/components/EditOne'

it('renders without crashing', () => {
    expect(JSON.stringify(EditOne)).toMatchSnapshot();
  });