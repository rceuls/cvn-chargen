import renderer from 'react-test-renderer';
import AttributesOverview from './AttributesOverview';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AttributesOverview
        attributes={[10, 11, 12, 13, 14, 15]}
        calculateBonusXP={(_) => 'no'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
