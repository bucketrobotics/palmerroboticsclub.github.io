# Welcome to the Bucket Robotics Webpage!

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on www.bucketrobotics.ca.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, and merging the PR.

Use the table of contents icon  on the top left corner of this document to get to a specific section of this guide quickly.

## Getting Started

### New contributor guide
To get an overview of the project, read the [README](README.md).

### Issues

#### Create a new issue

If you spot a problem with the docs, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/bucketrobotics/palmerroboticsclub.github.io/issues/new/choose). 

#### Solve an issue

Scan through our [existing issues](https://github.com/bucketrobotics/palmerroboticsclub.github.io/issues) to find one that interests you. You can narrow down the search using `labels` as filters. See labels for more information. As a general rule, we don’t assign issues to other people. If you find an issue to work on, you are welcome to open a PR with a fix.

### Make Changes

#### Make changes locally

1. Fork the repository.
- Using GitHub Desktop:
  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Using the command line:
  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

2. Install or update to **Node.js**, at the version 18.x.

3. Run npm install

4. Run npm start to start the development server

5. Create a working branch and start with your changes!
- Name it properly
- People should be able to tell what it does a first glance
- Failure to do so may lead to deletion without warning

### Commit your update

Commit the changes once you are happy with them.

The format for messages is follows: "{COMPONENT_NAME}: {WHAT YOU DID HERE}"

Examples of components:
- index
- contact-us

If not page, name it with what it does, example "routing"

### Pull Request

When you're finished with the changes, create a pull request, also known as a PR.
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).

#### Merging

When you're satisfied with your changes, you can merge them!
- Make sure your code passes the Angular Build check first, so it build correctly
- If you're not sure if your change is good, reqest people to review it!

Once it have been merged, please delete your branch
