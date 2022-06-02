import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {setFalse, setTrue} from "./bll/loadingReducer";

function HW10() {

    const dispatch = useDispatch()
    const loading = useSelector<AppStateType, boolean>(state => state.loading.loading)


    const setLoading = () => {
        dispatch(setTrue())
        setTimeout(() => dispatch(setFalse()), 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {loading
                ? (
                    <div id="floatingBarsG">
                        <div className="blockG" id="rotateG_01"></div>
                        <div className="blockG" id="rotateG_02"></div>
                        <div className="blockG" id="rotateG_03"></div>
                        <div className="blockG" id="rotateG_04"></div>
                        <div className="blockG" id="rotateG_05"></div>
                        <div className="blockG" id="rotateG_06"></div>
                        <div className="blockG" id="rotateG_07"></div>
                        <div className="blockG" id="rotateG_08"></div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
