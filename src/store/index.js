import { createStore } from 'redux';
import reducers from './reducers/index';

const store = createStore(reducers);

console.log(store.getState(), 'pppp');

// Subscription

store.subscribe(() => {
  console.log('[subscription]', store.getState());
})

export default store;
