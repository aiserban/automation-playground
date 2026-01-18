# Webdriver.io & Appium
Example automation project testing https://www.saucedemo.com in Webdriver.io & Cucumber.  
It has both desktop & mobile capabilities.  
I also added a pipeline stage in Github actions to setup node, install dependencies and run the tests.

## Setup instructions
1. run `nvm install && nvm use` to install the required node version (.nvmrc)
2. npm install
3. configure `.env` file
4. `npm run wdio` to execute the tests

## Approach details
I used typical Webdriver.io approach for pages (getters with return elements).  

However `inventory-page.ts` has a different approach that I'm a fan of, using readonly fields to return the selectors. I like this because it looks cleaner and allows easier usage of selectors. Using the getter approach proves cumbersome when dealing with more complex locators that you want to combine.

## Architecture
- **Config**: two configurations, one for `prod` and one for `int`. There is no `int` environment available for the web app under test, so it just serves as a demonstration of an approach
- **Tests**: Cucumber scenarios can be found in `features`
- **Fixtures**: `fixtures` to contain static data like translations (in this case messages found in the app)
- **Pages**: approach is Page Object Model. All pages extend abstract class `Page`. See `inventory` page for the approach I'm most fond of.
- **Steps**: Used a mix of regex and regular Cucumber strings with parameters.
- **Helpers**: A multitude of helpers can be found in `support`. Everything from custom Cucumber parameters, selector helpers, waits, environments, credentials and interfaces.
- **CI/CD**: Github Actions workflow can be found in the top-most directory of this repo. Execution can be seen in Github Actions page. You can trigger an on-demand run yourself.

## Other notes
Some tests are expected to fail as the website provides various problematic users that cannot perform various actions. I decided to use them to prove tests can both pass and succeed.