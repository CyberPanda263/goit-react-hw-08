import axios from "axios";

export const goItApi = axios.create({
    baseURL: "https://connections-api.goit.global/",
})

export const setAuthHeader = token => {
    goItApi.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const clearAuthHeader = token => {
    goItApi.defaults.headers.common.Authorization = ' ';
}