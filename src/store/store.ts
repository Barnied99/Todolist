import { configureStore } from "@reduxjs/toolkit"

import userReducer from './slice/user-slice';
import changeReducer from './slice/change-taskSlice'
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



