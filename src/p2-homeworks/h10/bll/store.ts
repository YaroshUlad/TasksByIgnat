//import {loadingReducer} from './loadingReducer'

import {combineReducers, createStore} from "redux";
import {loadingReducer} from "./loadingReducer";

// const reducers = combineReducers({
//     loading: loadingReducer,
//
// })
//
// const store = createStore(reducers)
//
// export default store
//
// export type AppStoreType = ReturnType<typeof reducers>
//
// // @ts-ignore
// window.store = store // for dev


const rootReducer = combineReducers({
    loading: loadingReducer
})

export const store = createStore(rootReducer)

export type AppStatetype = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store