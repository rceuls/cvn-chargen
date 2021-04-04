import renderer from 'react-test-renderer';
import SavingThrows from './SavingThrows';

it('renders correctly', () => {
  const tree = renderer
    .create(<SavingThrows savingThrows={[1, 2, 3, 4, 5]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
