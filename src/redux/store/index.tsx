import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import Reducers from '../reducers';

// const that created a store by combine reducers
// if you need to add new reducers, open file ../reducers
const makeStore = () => {
    const store = createStore(Reducers, composeWithDevTools());

    return store;
};

export const storeContainer = createWrapper(makeStore, {debug: false});