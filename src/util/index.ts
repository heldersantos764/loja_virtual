import axios, { AxiosInstance } from "axios";
import { BASE_URL_API } from "../contants";

export const getBaseUrlApi = (uri: string = ''): string => {
    return `${BASE_URL_API}${uri}`;
}

export const getAxiosInstance = () : AxiosInstance => {
    return axios.create({
        baseURL: getBaseUrlApi(),
        timeout: 1000,
        headers: { 'Content-Type': 'application/json' }
    });
}