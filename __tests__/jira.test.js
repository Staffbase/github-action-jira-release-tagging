const Jira = require('../jira')

xtest('foo', async () => {
  const jira = new Jira({ token: '***' })

  const result = await jira.updateIssues({
    issueIds: ['RE-1486', 'RE-1489'],
    componentName: 'foo-service',
    tagName: '2020.8.4',
    releaseDate: new Date(),
  })

  expect(result).toEqual([])
}, 20000)
