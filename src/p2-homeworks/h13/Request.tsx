import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {testApi} from "./api";


const Request = () => {
    const[success, setSuccess] = useState<boolean>(false)
    const[requestData, setRequestData] = useState<string|null>(null)

    const onButtonClick = () => {
        testApi.postRequest(success)
            .then(res => {
                setRequestData(res.errorText)
            })
            .catch(res => {
                setRequestData(res.errorText)
            })
    }

    return (
        <div>
            {requestData}
            <SuperButton onClick={onButtonClick}>sent</SuperButton>
            <SuperCheckbox onChangeChecked={(e)=>setSuccess(e)}/>
        </div>
    );
};

export default Request;