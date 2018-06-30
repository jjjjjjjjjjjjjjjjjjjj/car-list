# Ayond Front end assignment – Car list

## Setup

Running tests require node >= 8?

1. `git clone https://github.com/jjjjjjjjjjjjjjjjjjjj/car-list`
2. `cd car-list`
3. `yarn`
4. `node mock-remote/server.js`, runs car serving api server
5. Open new terminal tab
6. `yarn start`, runs development server
7. Open new terminal tab
5. `yarn test`, runs tests with coverage

Ports default to 3000 for app and 3001 for server. Set `PORT` and `API_PORT` in `.env` to change these.

## Tools used
[BareCSS](https://github.com/ericclemmons/bare-css) for basic styling, and following packages:

```
"dependencies": {
  "cors": "^2.8.4",               // Deal with cors for car serving api
  "lodash": "^4.17.10",           // Basically just using get() for redux selectors
  "prop-types": "^15.6.2",        // Basic type checking
  "react": "^16.4.1",             // Requested framework
  "react-dom": "^16.4.1",         // Requested framework
  "react-redux": "^5.0.7",        // Requested framework
  "react-scripts": "1.1.4",       // create-react-app helped setting up project quickly
  "redux": "^4.0.0",              // Requested framework
  "redux-thunk": "^2.3.0",        // Allows for asynchronous action creators
  "reselect": "^3.0.1",           // Selector pattern for better state management
  "styled-components": "^3.3.3"   // Wanted to try
},
"devDependencies": {
  "babel-plugin-module-resolver": "^3.1.1",   // Absolute import paths
  "babel-preset-stage-0": "^6.24.1",          // Deal with class features when running tests
  "enzyme": "^3.3.0",                         // Testing react components
  "enzyme-adapter-react-16": "^1.1.1",        // Testing react components
  "eslint-config-prettier": "^2.9.0",         // Linting
  "eslint-plugin-prettier": "^2.6.1",         // Linting
  "fetch-mock": "^6.4.4",                     // Mocking fetch for tests
  "husky": "^0.14.3",                         // Linting
  "prettier": "1.13.6",                       // Linting
  "pretty-quick": "^1.6.0",                   // Linting
  "redux-mock-store": "^1.5.3",               // Mock redux store when testing thunk
  "remote-redux-devtools": "^0.5.12"          // Alleviate debugging
}
```
