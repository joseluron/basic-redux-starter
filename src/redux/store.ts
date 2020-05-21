import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import movies from './reducers/Movies';

export const store = createStore(combineReducers({
    movies
}), applyMiddleware(thunk, createLogger({})));
