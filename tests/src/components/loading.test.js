import Loading from '../../../src/components/Loading'

it('renders without crashing', () => {
    expect(JSON.stringify(Loading)).toMatchSnapshot();
  });