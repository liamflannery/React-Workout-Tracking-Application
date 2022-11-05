import axios from "axios";

const baseURL = 'http://localhost:8102/'

const getUserDetails = (userName) => {
    const config = {headers: {Authorization: "Basic " + userName.token}}
    return axios.get(baseURL + "auth", config)
                .then(response => response.data)
}

const getAllPrograms = (user) => {
    // const config = {headers: {Authorization: "Basic " + user.token}}
    const config = null;
    return axios.get(baseURL + 'api/program/',config)
                .then(response => response.data)
}

const getAllExercises = (user) => {
    // const config = {headers: {Authorization: "Basic " + user.token}}
    const config = null;
    return axios.get(baseURL + 'api/exercise/',config)
                .then(response => response.data)
}

const getProgram = (id) => {
    return axios.get(baseURL + 'api/program/' + id)
                .then(response => response.data)
}

const getAllDays= (user) => {
    // const config = {headers: {Authorization: "Basic " + user.token}}
    const config = null;
    return axios.get(baseURL + 'api/day/',config)
                .then(response => response.data)
}
//get the excerises for the day
const getDay = (id) => {
    return axios.get(baseURL + 'api/day/' + id)
                .then(response => response.data)
}

const getAllUsers = () => {
    return axios.get(baseURL + 'auth/users/')
    .then(response => response.data)
}

const getDays = (user, id) => {
    const config = {headers: {Authorization: "Basic " + user.token}}
    return axios.get(baseURL + 'api/program/' + id,config)
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

const addProgram = (title) => {
    
    const titleObj = {"title" : title}
    return axios.post(baseURL + 'api/programs/', titleObj)
                .then(response => response.data)
}
//delete the a workout day on the program
const deleteDay = (user, convId, dayId) => {
    const config = {headers: {Authorization: "Basic " + user.token}}
    return axios.delete(baseURL + 'api/programs/' + convId + '/' + dayId, config)
    .then(response => response.data)
}

const updateProgram = (id, days) => {
    return axios.put(baseURL + 'api/program/' + id, days)
}



export default {getUserDetails, getAllExercises,getAllPrograms, getAllDays, register, getDays, postDay, addProgram, deleteDay, getAllUsers, getProgram, getDay, updateProgram}
