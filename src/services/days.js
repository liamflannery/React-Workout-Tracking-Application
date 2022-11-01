import axios from "axios";

const baseURL = 'http://localhost:8000/'

const getUserDetails = (userName) => {
    const config = {headers: {Authorization: "Basic " + userName.token}}
    return axios.get(baseURL + "auth", config)
                .then(response => response.data)
}

const getAllPrograms = (user) => {
    // const config = {headers: {Authorization: "Basic " + user.token}}
    return axios.get(baseURL + 'api/program/')
                .then(response => response.data)
}

const getAllUsers = () => {
    return axios.get(baseURL + 'auth/users/')
    .then(response => response.data)
}

//const getDays = (id) => {
    //const config = {headers: {Authorization: "Basic " + user.token}}
    //return axios.get(baseURL + 'api/program/' + id)
                //.then(response => response.data)
//}

const register = (userName) => {
    
    return axios.post(baseURL + 'auth/register/', {"username":userName})
                .then(response => response.data)
}

//const postDay = (user, day, id) => {
    //const config = {headers: {Authorization: "Basic " + user.token}}
    //const dayObj = {"text" : day}
    //return axios.post(baseURL + 'api/programs/' + id, dayObj, config)
                //.then(response => response.data)
//}

const addProgram = (title) => {
    
    const titleObj = {"title" : title}
    return axios.post(baseURL + 'api/programs/', titleObj)
                .then(response => response.data)
}

//const deleteDay = (user, convId, dayId) => {
    //const config = {headers: {Authorization: "Basic " + user.token}}
    //return axios.delete(baseURL + 'api/programs/' + convId + '/' + dayId, config)
    //.then(response => response.data)
//}

const getAllDays = (user) => {
    // const config = {headers: {Authorization: "Basic " + user.token}}
    return axios.get(baseURL + 'api/day/')
                .then(response => response.data)
}

const addDay = (title) => {
    const titleObj = {"title" : title}
    return axios.post(baseURL + 'api/day/', titleObj)
                .then(response => response.data)
}

const getAllExercises = (user) => {
    // const config = {headers: {Authorization: "Basic " + user.token}}
    return axios.get(baseURL + 'api/exercise/')
                .then(response => response.data)
}

const getExercise = (id) => {
    // const config = {headers: {Authorization: "Basic " + user.token}}
    return axios.get(baseURL + 'api/exercise/' + id)
                .then(response => response.data)
}


const addExercise = (title) => {
    const titleObj = {"title" : title}
    return axios.post(baseURL + 'api/exercise/', titleObj)
                .then(response => response.data)
}

export default {getUserDetails, getAllPrograms, register, addProgram, getAllUsers, getAllDays, addDay, getAllExercises, addExercise, getExercise}