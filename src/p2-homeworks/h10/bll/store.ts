
import {combineReducers, createStore} from "redux";
import {loadingReducer} from "./loadingReducer";

const rootReducer = combineReducers({
    loading: loadingReducer
})

export const store = createStore(rootReducer)

export type AppStatetype = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store