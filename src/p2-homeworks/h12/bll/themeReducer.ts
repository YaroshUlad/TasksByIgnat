type StateType = {
    theme: string
}
const initState: StateType = {
    theme: 'dark'
};

const enum ACTIONTYPE {
    changeTheme = 'CHANGE_THEME'
}

export const themeReducer = (state: StateType = initState, action: ChangeThemeAT): StateType => { // fix any
    switch (action.type) {
        case ACTIONTYPE.changeTheme:
            return {...state, theme: action.theme};

        default:
            return state;
    }
};

export const changeThemeAC = (theme: string) => {
    return {
        type: ACTIONTYPE.changeTheme,
        theme
    }
}

type ChangeThemeAT = ReturnType<typeof changeThemeAC>