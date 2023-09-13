import { configureStore } from "@reduxjs/toolkit"
// import { save, load } from 'redux-localstorage-simple'

import userReducer from './user-slice';
import changeReducer from './change-taskSlice'
import saveUserData from "./saveUserData";
import getUserData from "./getUserData";

const preloadedState: {} =
    getUserData();

const store = configureStore({
    reducer: {
        user: userReducer,
        tasklist: changeReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(saveUserData),
    preloadedState: preloadedState,

});


export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// const storageConfig = {
//     namespace: 'todo-list',
//     states: [],
// };

// middleware: (getDefaultMiddleware) => [
//     ...getDefaultMiddleware(),
//     save(storageConfig),
// ],
// preloadedState: load(storageConfig),
