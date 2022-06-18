import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";


function HW12() {
    const themes = ['dark', 'red', 'some']

    const theme = useSelector<AppStateType, string>(state => state.theme.theme); // useSelector

    const dispatch = useDispatch()

    const themeChanger = (theme: string) => {

        dispatch(changeThemeAC(theme))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
                {theme}
            </span>
            <hr/>
            <SuperSelect options={themes} onChange={(e) => themeChanger(e.currentTarget.value)}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
