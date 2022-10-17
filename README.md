# Study-group
Automation challenges through W&amp;C

## How to run this program
#### To run this program, use your terminal and type `node hello.js`, passing in either nothing, a first name or a first and last name. 

#### To install cypress, use NPM. First, initialize an npm package with `npm init` using the terminal while navigating the topmost level of your project directory.
#### Next, use the `npm install cypress --save-dev` command to install cypress locally to this directory.
#### Create a .gitignore file with `touch .gitignore` and add `node_modules` to it. This helps anyone cloning your project avoid downloading all of the dependencies with it (and makes your package size much smaller when pushing to github).
#### In your package.json file, under `scripts`, add the following key:value pair `"cypress:open": "cypress open"`. This will allow you to type `npm run cypress:open` in your terminal when in the right project to open up the Cypress test runner and execute against a browser instance.
#### Configure your directory for E2E tests and click on the file you wrote your Cypress test in. It should open up a Chrome instance (if you choose Chrome instead of Electron) and run your test. 