import React from 'react';
import renderer from 'react-test-renderer';
import Personalia from './Personalia';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Personalia
        character={{
          name: 'Jos',
          charClass: { suffix: 'ayy', name: 'test class', url: 'Moo' },
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
