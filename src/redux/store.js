import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import * as reducers from './ducks';

const reducer = combineReducers(reducers);
const logger = createLogger();

export default createStore(
  reducer,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension && window.devToolsExtension(),
  )
);
