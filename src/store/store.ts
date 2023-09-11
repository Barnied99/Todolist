import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { save, load } from 'redux-localstorage-simple'

import userReducer from './user-slice';
import changeReducer from './change-taskSlice'


const storageConfig = {
    namespace: 'todo-list',
    states: [],
};
const preloadedState = {};

const store = configureStore({
    reducer: {
        user: userReducer,
        tasklist: changeReducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        save(storageConfig),
    ],
    preloadedState: load(storageConfig),
});


export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch