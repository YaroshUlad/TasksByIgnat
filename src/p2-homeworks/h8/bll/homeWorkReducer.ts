import {UserType} from "../HW8";

type ActionType = {
    type: string
    payload: any
    //[key: string]: any
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if(action.payload === 'up'){
                state.sort((a,b)=> a.name < b.name ? -1 : 1)
                return [...state]
            }
            else if (action.payload === 'down') {
                state.sort((a,b)=> a.name > b.name ? -1 : 1)
                return [...state]
            }
            else return state
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age >= action.payload)
        }
        default: return state
    }
}