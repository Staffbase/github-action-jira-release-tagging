# Jira Release Annotator

## Description

A GitHub action that uses a tag name and a list of Issue-IDs and updates their release-tag on JIRA using the JIRA-API.

## Usage

> ##### Note: this action requires [Jira Login Action](https://github.com/marketplace/actions/jira-login)

```yaml
- name: Add release notes to JIRA tickets
  uses: Staffbase/github-action-jira-release-tagging@master
  env:
      JIRA_BASEURL: ${{ vars.JIRA_BASEURL }}
      JIRA_TOKEN: ${{ secrets.JIRA_TOKEN }}
      JIRA_EMAIL: ${{ vars.JIRA_EMAIL }}
  with:
      issueIds: ABC-1234,DE-5,F-67
      componentName: jira-release-action
      tagName: 2020.3.3
```

## Action Spec:

### Environment variables

- `JIRA_BASEURL` - base url of jira (e.g. https://instance.atlassian.net/jira)
- `JIRA_TOKEN` - api token to use for Jira
- `JIRA_EMAIL` - email of the owner of the Jira api token

### Inputs

- `issueIds` (required) - Comma separated list of Jira issues to update. Example: RE-1486,RE-1489
- `componentName` (required) - The name of the component (service) to add as label to the issues
- `tagName` (required) - The (git) release tag to add as label to the issues
- `releaseDate` (optional) - The date to use as release date, default is 'now'
- `notifyUsers` (optional) - Whether to notify user watching the Jira issues, default is 'false'

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE.md](LICENSE) file for details.


<table>
  <tr>
    <td>
      <img src="docs/assets/images/staffbase.png" alt="Staffbase GmbH" width="96" />
    </td>
    <td>
      <b>Staffbase GmbH</b>
      <br />Staffbase is an internal communications platform built to revolutionize the way you work and unite your company. Staffbase is hiring: <a href="https://jobs.staffbase.com" target="_blank" rel="noreferrer">jobs.staffbase.com</a>
      <br /><a href="https://github.com/Staffbase" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://staffbase.com/" target="_blank" rel="noreferrer">Website</a> | <a href="https://jobs.staffbase.com" target="_blank" rel="noreferrer">Jobs</a>
    </td>
  </tr>
</table>
