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


export const loadingReducer = (state: LoadingReducerType = initState, action: any): any => { // fix any
    switch (action.type) {
        case '': {
            return state
        }
        default:
            return state
    }
}

export const loadingAC = (): any => {
} // fix any