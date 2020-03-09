const action = require('../action');

test('action#filterIssueIds empty', () => {
  const result = action.filterIssueIds('"PAC-000","RE-123","",,"LOL-333", NO-1234, COD-98765');
  const anotherResult = action.filterIssueIds('LOL-000');

  expect(result).toEqual(['COD-98765', 'LOL-333', 'NO-1234', 'RE-123']);
  expect(anotherResult).toEqual([])
});
