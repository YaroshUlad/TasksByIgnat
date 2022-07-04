import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {testApi} from "./api";


const Request = () => {
    const[success, setSuccess] = useState<boolean>(false)
    const[requestData, setRequestData] = useState<any>(null)

    const onButtonClick = () => {
        testApi.postRequest(success)
            .then(setRequestData)
            .catch(setRequestData)
    }

    return (
        <div>
            {requestData}
            <SuperButton onClick={onButtonClick}/>
            <SuperCheckbox onChangeChecked={(e)=>setSuccess(e)}/>
        </div>
    );
};

export default Request;