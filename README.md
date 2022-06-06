# Laybuy-Cypress-Jest-JavaScript

to get the tests run:
1. run "npm run install" to install all the dependencies in the Package.json file
2. "api-test" is for the api test only
3. "e2e" and "cy:run" are to run the web test from CLI
4. "cy:open" is to run the web test from Cypress GUI
5. "test" is to run both web and api tests from the CLI

There seems to be some uncaught exceptions in the app when doing the UI tests so the listen event settings is disabled in the tests to let the tests run which I'm not 100% sure is the right thing to do.

For the UI testing, the last step should be to click on any tile and verify that a new window opens with correct website, where I was intended to test if the url of the new window is the same url link of the tile in the search results, but it turned out that it's not the same for every tile, so I simply just verify that each link should return the status code 200 when it's request. It's not a proper UI test though where I think should be better way to verify. But I just finished it there for this task.
