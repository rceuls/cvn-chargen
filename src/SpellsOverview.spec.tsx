import renderer from 'react-test-renderer';
import SpellsOverview from './SpellsOverview';
import { ILinkedItem } from './services/util';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <SpellsOverview data={[{ label: 'Read Magic', link: 'Read_Magic' }]} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
