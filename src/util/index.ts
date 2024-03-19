import axios, { AxiosInstance } from "axios";
import { BASE_URL_API } from "../contants";

export const getBaseUrlApi = (uri: string = ''): string => {
    return `${BASE_URL_API}${uri}`;
}

export const getAxiosInstance = (): AxiosInstance => {
    return axios.create({
        baseURL: getBaseUrlApi(),
        timeout: 1000,
        headers: { 'Content-Type': 'application/json' }
    });
}

export const limitCharacters = (str: string, limit: number): string => {
    if (str.length <= limit) {
        return str;
    } else {
        return str.slice(0, limit) + '...';
    }
}

export const formatCurrency = (amount: string): string => {
    const amountNumber = parseFloat(amount);
    const formattedAmount = amountNumber.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return formattedAmount;
}