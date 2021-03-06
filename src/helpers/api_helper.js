import axios from "axios"
import {SERVER_PATH} from "../common/serverPath";
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

//apply base url for axios
const path = SERVER_PATH;
const axiosApi = axios.create({
	baseURL: path,
	// withCredentials: true,
})

// axiosApi.defaults.headers.common["Authorization"] = token
axiosApi.interceptors.response.use(
	response => response,
	error => {
		let err
		if (error.response) {
			err = error.response.data.error ? error.response.data.error : error.response.data
		} else if (error.request) {
			console.log('server error', error)
		} else {
			err = error;
		}
		return Promise.reject(err)
	},
)

export async function get(url, config = {}) {
	return await axiosApi.get(url, { ...config }).then(response => {
		return response.data
	})
}

export async function post(url, data, config = {}) {
	return axiosApi
		.post(url, { ...data }, { ...config })
		.then(response => {
			return response.data
		})
}

export async function put(url, data, config = {}) {
	return axiosApi
		.put(url, { ...data }, { ...config })
		.then(response => response.data)
}

export async function del(url, config = {}) {
	return await axiosApi
		.delete(url, { ...config })
		.then(response => response.data)
}
