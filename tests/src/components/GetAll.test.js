import GetAll from '../../../src/components/GetAll'

it('renders without crashing', () => {
    expect(JSON.stringify(GetAll)).toMatchSnapshot();
  });