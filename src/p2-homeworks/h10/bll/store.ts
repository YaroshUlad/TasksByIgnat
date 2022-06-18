
import {combineReducers, createStore} from "redux";
import {loadingReducer} from "./loadingReducer";
import {themeReducer} from "../../h12/bll/themeReducer";

const rootReducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
})

export const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store