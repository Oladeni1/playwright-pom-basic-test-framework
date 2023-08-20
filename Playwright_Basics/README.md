### Playwright web automation test framework

Web automation testing using playwright

### Installation

> npm init playwright@latest

### Runs help to various commands.

> npx playwright --help

### Runs the end-to-end tests.

> npx playwright test

### Runs the end-to-end tests with test title.

> npx playwright test -g "title of the specific test to be run"

### Runs the end-to-end tests in headed mode.

> npx playwright test --headed

### Runs the end-to-end tests with workers.

> npx playwright test --workers 3

### Starts the playwright interactive UI mode.

> npx playwright test --ui
 
### Runs the tests only on Desktop Chrome.

> npx playwright test --project=chromium

### Runs the tests in a specific file.

>  npx playwright test 

### Run tests and check results:

> npx playwright test & npx playwright show-report
  
### Runs the tests in debug mode.

> npx playwright test --debug

### Runs the test with tag.

> npx playwright test --grep "@regression"

### To update snapshot when visual regression failed

> npx playwright test --update-snapshots

### To open last HTML report run:

> npx playwright show-report
  
### Auto generate tests with Codegen and url.

> npx playwright codegen pasteSiteUrl


