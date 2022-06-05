import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import _throttle from 'lodash.throttle';
import rootReducer from './reducers';
import { saveQueueState, loadQueueState, loadUserData } from './localStorage';

let middleware = [thunk];

const queueFromLocalStorage = loadQueueState();
const persistedData = {
  queueState: queueFromLocalStorage,
  auth: {
    authenticated: Boolean(loadUserData()),
    user: loadUserData(),
    errors: {},
  },
};

const store = createStore(rootReducer, persistedData, applyMiddleware(...middleware));

store.subscribe(_throttle(() => {
  saveQueueState(store.getState());
}, 1000 * 60 * 5));

export default store;