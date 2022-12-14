import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3'

export const publicRequest = axios.create({
    baseURL: baseUrl
})

const userRequestbaseUrl = 'http://localhost:8800/'

export const userPublicRequest = axios.create({
    baseURL: userRequestbaseUrl,
})
