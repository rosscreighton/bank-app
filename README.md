## A Banking App
Howdy. Thanks for taking a few minutes to read through my code. This is a simple banking application built with React, Redux, & Semantic UI.

### Overview
- Used `stardust`, the offical Semantic-UI-React integration, in order to simplify component development and avoid bringing in jQuery as a dependency.
- Redux reducers, actionTypes, and actions are organized according the the [Redux Ducks Proposal](https://github.com/erikras/ducks-modular-redux).
- All React component related files (stylesheets, tests, and the component itself) are organized into component directories under `src/components` which provides a terse and easily discoverable file structure.
- Stateless, functional, component definitions are favored as they use less memory and provide rendering performance gains in some cases.


### Running the project locally
1. Clone the repo
2. `npm i`
3. `npm run develop`
4. Run unit tests in watch mode: `npm test:watch`


### Testing
To run unit tests:
`npm test`

### Proposed Improvements
- For test coverage:
  - Functional/Integration tests
- For code quality:
  - submitForm action creator needs a unit test.
  - Make use of test helpers to standardize how things are tested and tidy up test files.
- For production deployment and performance:
  - Moment.js is not justifiable as a dependency. Should be removed in favor of simple helper function.
  - Legacy browser compatibility could be improved (i.e. ES5 shims)
  - Semantic UI CSS is currently included via CDN. Should be bundled with the app so only necessary css can be included. 
- Design
  - Transactions table should be paginated for large datasets.
  - Add icons in deposit/withdrawl dropdown for a visual cue.
  - The description field should have a max length.
  - Negative space in "Create a transaction" needs adjustment.
- For developer experience:
  - Source maps for easier debugging
  - Hot module replacement




