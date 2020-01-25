import { AipeConfig } from './../validation/aipeConfig.ts';

export function checkConfig(config?: AipeConfig): AipeConfig {
    if (typeof config !== 'object') {
        config = {};
    }
    if (typeof config.headers !== 'object') {
        config.headers = window.aipe.config.headers;
    }
    if (typeof config.data !== 'string' && typeof config.data !== 'object') {
        config.data = window.aipe.config.data;
    }
    if (typeof config.timeout !== 'number') {
        config.timeout = window.aipe.config.timeout;
    }
    if (typeof config.withCredentials !== 'boolean') {
        config.withCredentials = window.aipe.config.withCredentials;
    }
    if (typeof config.validateStatus !== 'function') {
        config.validateStatus = window.aipe.config.validateStatus;
    }
    if (typeof config.async !== 'boolean') {
        config.async = window.aipe.config.async;
    }
    if (typeof config.cache !== 'boolean') {
        config.cache = window.aipe.config.cache;
    }
    if (typeof config.safeData !== 'boolean') {
        config.safeData = window.aipe.config.safeData;
    }

    return config;
}
