import Axios from 'axios';

export const rootUrl = 'http://localhost:8000/';
export const baseURL = 'http://localhost:3000/';
export const Http = Axios.create({
    baseURL: rootUrl,
});