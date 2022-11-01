import axios from 'axios';
const baseUrl = "http://localhost:8102"

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
        delete axios.defaults.headers.common["Authorization"];
 }

const doLogin = (userName, password) => {
    const credentials = {"username" : userName, "password": password}
    return axios.post(baseUrl + "/api/login", credentials)
                .then(response => {
                    const token  =  response.data.token;
                    if (token != null) {
                        //set JWT token to local
                        localStorage.setItem("token", token);
                        //set token to axios common header
                        setAuthToken(token);
                        window.location.href = '/program'
                        return ''
                    } else {
                        return 'Invalid token'
                    }
                })
                .catch(error => {
                    return error.response.data.message
                })
}

const doRegister = (userName, password) => {
    const credentials = {"username" : userName, "password": password}
    return axios.post(baseUrl + "/api/user", credentials)
                .then(response => {
                    const token  =  response.data.token;
                    if (token != null) {
                        //set JWT token to local
                        localStorage.setItem("token", token);
                        //set token to axios common header
                        setAuthToken(token);
                        window.location.href = '/program'
                        return ''
                    } else {
                        return 'Invalid token'
                    }
                })
                .catch(error => {
                    return error.response.data.message
                 })
}

export default {doLogin, doRegister}

