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
 
                    //set JWT token to local
                    localStorage.setItem("token", token);
              
                    //set token to axios common header
                    setAuthToken(token);

                    window.location.href = '/program'
                })
}

export default {doLogin}