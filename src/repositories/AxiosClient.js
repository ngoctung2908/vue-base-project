import axios from 'axios'
const baseDomain = import.meta.env.VITE_APP_BASE_API
const baseURL = `${baseDomain}`

import store from '../store'

const instance = axios.create({
    baseURL: baseURL,
    // headers: {
    // 	authorization: token,
    // },
})

instance.interceptors.request.use(
    (config) => {
        // trigger 'loading=true' event here
        // store.dispatch('setLoading', true)
        return config
    },
    (error) => {
        // trigger 'loading=false' event here
        // store.dispatch('setLoading', false)
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        // store.dispatch('setLoading', false)
        return response.data
    },
    (error) => {
        // store.dispatch('setLoading', false)
        console.log('Something error')
    }
)
export default instance
