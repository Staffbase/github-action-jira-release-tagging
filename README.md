# Jira Release annotator

## Description

A Github action that uses a tag name and a list of Issue-IDs and updates their release-tag on JIRA using the JIRA-API.

---

## Usage

> ##### Note: this action requires [Jira Login Action](https://github.com/marketplace/actions/jira-login)

```yaml
- name: Add release notes to dummy tickets
  uses: Staffbase/github-action-jira-release-tagging@master
  env:
      JIRA_BASEURL: ${{ secrets.JIRA_BASEURL }}
      JIRA_TOKEN: ${{ secrets.JIRA_TOKEN }}
      JIRA_EMAIL: ${{ secrets.JIRA_EMAIL }}
  with:
      issueIds: ABC-1234,DE-5,F-67
      componentName: jira-release-action
      tagName: 2020.3.3
```

---

## Action Spec:

### Environment variables

-   `JIRA_TOKEN` - api token to use for Jira
-   `JIRA_EMAIL` - email of the owner of the Jira api token

### Inputs

-   `issueIds` (required) - Comma separated list of Jira issues to update. Example: RE-1486,RE-1489
-   `componentName` (required) - The name of the component (service) to add as label to the issues
-   `tagName` (required) - The (git) release tag to add as label to the issues
-   `releaseDate` (optional) - The date to use as release date, default is 'now'
-   `notifyUsers` (optional) - Whether to notify user watching the Jira issues, default is 'false'

### Outputs

none
