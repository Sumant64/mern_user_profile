import axios from "axios";


const baseURL = 'http://localhost:5000';

const config = {
    headers: {
        "Content-Type" : "application/json"
    }
}

export const login = (payload) => {
    return axios.post(`${baseURL}/signin`, payload, config);
}

export const getAbout = (token) => {
    config.headers['Authorization'] = token
    return axios.get(`${baseURL}/about`, config);
}

export const getData = (token) => {
    config.headers['Authorization'] = token
    return axios.get(`${baseURL}/getdata`, config);
}

export const logoutapi = (token) => {
    config.headers['Authorization'] = token
    return axios.get(`${baseURL}/logout`, config);
}

export const register = (token, payload) => {
    config.headers['Authorization'] = token
    return axios.post(`${baseURL}/register`, payload, config);
}

export const postContact = (token, payload) => {
    config.headers['Authorization'] = token
    return axios.post(`${baseURL}/contact`, payload, config);
}