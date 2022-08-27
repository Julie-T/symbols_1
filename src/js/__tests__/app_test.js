import Team from '../app';

test('Итератор героев', () => {
  Team.iterator().next();
  Team.iterator().next();
  expect(Team.iterator().next()).toEqual({
    value: 'undefined',
    done: true,
  });
});
