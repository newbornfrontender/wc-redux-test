import { createStore, compose as origCompose, combineReducers } from 'redux';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer';

import counter from './reducers/counter';

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;

export const store = createStore(
  (state) => state,
  devCompose(lazyReducerEnhancer(combineReducers)),
);

store.addReducers({
  counter,
});
