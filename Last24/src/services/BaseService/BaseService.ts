import axios, { AxiosInstance } from 'axios';
import { consumeCookie, regurgitateCookie } from '../../common/methods';

export interface IServiceConfig {
    url?: string;
    timeout?: number;
    token?: string;
}

export default class BaseService {
    protected axiosInstance: AxiosInstance;

    constructor(config: IServiceConfig) {
        this.axiosInstance = axios.create({
            baseURL: config.url || '/',
            timeout: config.timeout || 5000,
        });
        this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
    }

    public getAuthenticationToken: () => string = () => {
        return regurgitateCookie(document.cookie, 'token');
    };

    public setAuthenticationToken: (token: string) => void = token => {
        consumeCookie(token);
    };

    public get = async (endpoint: string, params?: any) => {
        const config = {
            params: {
                token: this.getAuthenticationToken(),
                ...params,
            },
        };
        const res = await this.axiosInstance.get(endpoint, config);
        return res.data;
    };

    public post = async (endpoint: string, data?: any) => {
        const params = { token: this.getAuthenticationToken() };
        const response = await this.axiosInstance.post(endpoint, data || null, { params });
        return response;
    };

    public put = async (endpoint: string, data: any) => {
        const params = { token: this.getAuthenticationToken() };
        const response = await this.axiosInstance.put(endpoint, data, { params });
        return response;
    };
}
