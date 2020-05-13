# UI Testing Kata

This is a small exercise for testing UI components. Imagine you're building an issue tracking system where multiple users can be assigned to a task. In order to know who is working on a task we'd like to display a list of users in each issue. Your task is to build a new component `<Assignees assignees={['Mike', 'Sepp', 'David']} />` which has the following features:

- Lists all users in an unorderd list (ul > li)
- WITH more than 3 assigness,
  - only display 3 assignees
  - display a show more button

- WHEN the show more button was clicked
  - display all assignees
  - a show less button is displayed instead of a show more button
  - AND the show less button was clicked, only displays 3 assignees
- WITH less than 4 assignees,
  - don't display a "show more" button
