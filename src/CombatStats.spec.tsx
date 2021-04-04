import renderer from 'react-test-renderer';
import CombatStats from './CombatStats';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <CombatStats
        character={{
          armorClass: 12,
          maximumHP: 13,
          attributeScores: [8, 18, 10, 10, 10],
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
