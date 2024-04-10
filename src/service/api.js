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