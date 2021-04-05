import renderer from 'react-test-renderer';
import GenericArrayOverview from './GenericArrayOverview';

it('renders correctly', () => {
  const tree = renderer
    .create(<GenericArrayOverview data={['a', 'b', 'c', 'd', 'e', 'f']} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when empty', () => {
  const tree = renderer.create(<GenericArrayOverview data={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
