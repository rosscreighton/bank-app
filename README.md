## A Banking App
Howdy. Thanks for taking a few minutes to read through my code. This is a simple simulated banking application built with React, Redux, & Semantic UI.

### Overview
- I used `stardust`, the offical Semantic-UI-React integration, in order to simplify component development and avoid bringing in jQuery as a dependency.
- Redux reducers, actionTypes, and actions are organized according the the [Redux Ducks Proposal](https://github.com/erikras/ducks-modular-redux).
- All files related to a React component (stylesheets, tests, and the component itself) are organized into component directories under `src/components`, which provides a terse and easily discoverable file structure.
- Stateless, functional, component definitions are favored as they use less memory and provide rendering performance gains in some cases.


### Running the project locally
1. Clone the repo
2. `npm i`
3. `npm run develop`
4. Run unit tests in watch mode: `npm test:watch`
5. Navigate to localhost:8080

### Testing
To run unit tests:
`npm test`

### Proposed Improvements
- Test coverage:
  - Write functional/integration tests
  - The submitForm action creator needs a unit test.
- Code quality:
  - Make use of test helpers to standardize how things are tested and tidy up test files.
  - Make use of `redux-form` or similar to simplify code for forms with controlled state.
- Production deployment and performance:
  - Semantic UI CSS is currently included via CDN. Should instead be bundled with the app so webpack can include only the necessary css for the browser to download. 
  - For how it is used here, Moment.js is not justifiable as a dependency. It should be removed in favor of a simple helper function.
  - Add an ES5 shim for improved legacy browser compatibility.
  - Add vendor prefixing via PostCSS to improve cross-browswer compatibility.
  - Add npm script and webpack config for building static production assets.
- Design:
  - Transactions table should be paginated for large datasets.
  - Add icons in deposit/withdrawl dropdown to provide visual cues to the user.
  - The description field should have a max length.
  - Negative space in "Create a transaction" section needs adjustment.
  - Should show messaging to user when there is a validation error.
- For developer experience:
  - Set up source maps for easier debugging in the browser.
  - Set up hot module replacement with webpack dev server.
  - Set up aliases for common directories via webpack.





