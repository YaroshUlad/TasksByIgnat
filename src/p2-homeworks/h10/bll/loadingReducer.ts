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

type SetTrueAT = ReturnType<typeof setTrue>
type SetFalseAT = ReturnType<typeof setFalse>
type ActionType = SetFalseAT | SetTrueAT

export const loadingReducer = (state: LoadingReducerType = initState, action: ActionType): LoadingReducerType => { // fix any
    switch (action.type) {
        case ACTION_TYPES.SET_TRUE: {
            return state
        }
        case ACTION_TYPES.SET_FALSE: {
            return state
        }
        default:
            return state
    }
}

export const loadingAC = (): any => {
} // fix any