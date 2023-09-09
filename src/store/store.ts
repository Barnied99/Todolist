import { createStore, compose, applyMiddleware } from 'redux';
import { save } from 'redux-localstorage-simple'

import rootReducer from '../reducer/index';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const configureStore = (): any => (
    createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(save({ namespace: 'todo-list' }))),

    )
);



const store = configureStore();


export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch