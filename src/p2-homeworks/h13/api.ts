import axios from "axios";

type ResponseType = {
    "errorText": string
    "info": string
    "yourBody": { "success": boolean }
    "yourQuery": {}
}

export const testApi = {
    postRequest(isSuccess: boolean) {
        return axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success: isSuccess})
            .then(res => {
                console.log(res)
                return res.data
            })
            .catch(reason => {
                console.log(reason)
                return reason.response.data
            })
    }
}