import axios from "axios";

const baseURL = '/'

const getUserDetails = (userName) => {
    const config = {headers: {Authorization: "Basic " + userName.token}}
    return axios.get(baseURL + "auth", config)
                .then(response => response.data)
}

const getAllPrograms = (user) => {
    const config = {headers: {Authorization: "Basic " + user.token}}
    return axios.get(baseURL + 'api/programs/',config)
                .then(response => response.data)
}

const getAllUsers = () => {
    return axios.get(baseURL + 'auth/users/')
    .then(response => response.data)
}

const getDays = (user, id) => {
    const config = {headers: {Authorization: "Basic " + user.token}}
    return axios.get(baseURL + 'api/programs/' + id,config)
                .then(response => response.data)
}

const register = (userName) => {
    
    return axios.post(baseURL + 'auth/register/', {"username":userName})
                .then(response => response.data)
}

const postDay = (user, day, id) => {
    const config = {headers: {Authorization: "Basic " + user.token}}
    const dayObj = {"text" : day}
    return axios.post(baseURL + 'api/programs/' + id, dayObj, config)
                .then(response => response.data)
}

const addProgram = (user, title) => {
    const config = {headers: {Authorization: "Basic " + user.token}}
    const titleObj = {"title" : title}
    return axios.post(baseURL + 'api/programs/', titleObj, config)
                .then(response => response.data)
}

const deleteDay = (user, convId, dayId) => {
    const config = {headers: {Authorization: "Basic " + user.token}}
    return axios.delete(baseURL + 'api/programs/' + convId + '/' + dayId, config)
    .then(response => response.data)
}




export default {getUserDetails, getAllPrograms, register, getDays, postDay, addProgram, deleteDay, getAllUsers}