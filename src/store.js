import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initialeState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialeState, applyMiddleware(...middleware));

export default store;
