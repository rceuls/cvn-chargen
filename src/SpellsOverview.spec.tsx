import renderer from 'react-test-renderer';
import SpellsOverview from './SpellsOverview';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <SpellsOverview data={[{ label: 'Read Magic', link: 'Read_Magic' }]} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when empty', () => {
  const tree = renderer.create(<SpellsOverview data={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
