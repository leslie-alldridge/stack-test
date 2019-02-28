import GetOne from '../../../src/components/GetOne'

it('renders without crashing', () => {
    expect(JSON.stringify(GetOne)).toMatchSnapshot();
  });