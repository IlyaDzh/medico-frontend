import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const _axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

_axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    const accessToken: string | null = localStorage.getItem("accessToken");

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

export const axiosInstance: AxiosInstance = _axiosInstance;
