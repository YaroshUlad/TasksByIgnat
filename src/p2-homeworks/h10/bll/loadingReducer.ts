type LoadingReducerType = {
    loading: boolean
}
const initState: LoadingReducerType = {
    loading: false
}

const enum ACTION_TYPES {
    SET_TRUE = 'SET_STATE_LOADING_TO_TRUE',
    SET_FALSE = 'SET_STATE_LOADING_TO_FALSE',
}

export const setTrue = () => {
    return {
        type: ACTION_TYPES.SET_TRUE,
        payload: {
            loading: true,
        }
    }
}
export const setFalse = () => {
    return {
        type: ACTION_TYPES.SET_FALSE,
        payload: {
            loading: false,
        }
    }
}

export type SetTrueAT = ReturnType<typeof setTrue>
export type SetFalseAT = ReturnType<typeof setFalse>
export type ActionType = SetFalseAT | SetTrueAT

export const loadingReducer = (state: LoadingReducerType = initState, action: ActionType): LoadingReducerType => { // fix any
    switch (action.type) {
        case ACTION_TYPES.SET_TRUE:
        case ACTION_TYPES.SET_FALSE: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}