const action = require('../action')

test('action#filterIssueIds empty', () => {
  const result = action.filterIssueIds('PAC-000,RE-123,,LOL-333,PACMAN-123,DIABLO-456,PACMAN-000,LOL-000')
  const anotherResult = action.filterIssueIds('LOL-000')

  console.log(result)
  console.log(anotherResult)

  expect(result).toEqual(['LOL-333', 'RE-123'])
  expect(anotherResult).toEqual([])
})
