const core = require('@actions/core');
const Jira = require('./jira');

const jira = new Jira({
  email: process.env.JIRA_EMAIL,
  token: process.env.JIRA_TOKEN,
});

async function exec ({ issueIds, componentName, tagName, releaseDate }) {
  try {
    console.log({ issueIds, componentName, tagName, releaseDate });

    if (issueIds.length === 0) {
      console.log('No Jira issues given, do nothing');

      return
    }

    const errors = await jira.updateIssues({
      issueIds,
      componentName,
      tagName,
      releaseDate,
    });

    if (errors.length === 0) {
      // result.issue is the issue key
      console.log(`Updated successfully update following Jira issues: ${issueIds}`);

      return
    }

    console.log(`Failed to update some Jira tickets: ${errors}`);
    process.exit(78)
  } catch (error) {
    console.error(error);
    process.exit(1)
  }
}

function parseArgs () {
  return {
    issueIds: filterIssueIds(core.getInput('issueIds')),
    componentName: core.getInput('componentName'),
    tagName: core.getInput('tagName') || process.env.TAGNAME,
    releaseDate: core.getInput('releaseDate') ? new Date(core.getInput('releaseDate')) : new Date(),
    notifyUsers: core.getInput('notifyUsers') === 'true',
  }
}

function filterIssueIds (issueIdsStr) {
  const filtered = issueIdsStr
    .split(',')
    .map((issueId) => issueId.trim())
    .map((issueId) => issueId.replace(/"/g, ''))
    .filter((issueId) => issueId !== '' &&
      !issueId.endsWith('-000'));

  filtered.sort();

  return filtered
}

module.exports = { exec, parseArgs, filterIssueIds };
