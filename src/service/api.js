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