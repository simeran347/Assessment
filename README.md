Clone Repo and commit code
git clone 'Repo url' using HTTPs
git commit -m "first commit"
git branch -M main
git remote add origin 'repo path'
git push -u origin main

Folder Structure
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg

public/index.html is the page template;
src/index.js is the JavaScript entry point.

Available Scripts

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

npm test
Launches the test runner in the interactive watch mode.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

Installing a Dependency
The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with npm:

npm install --save react-router
