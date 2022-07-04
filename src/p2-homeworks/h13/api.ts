import axios from "axios";



export const testApi = {
    postRequest (isSuccess: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: isSuccess})
    }
}