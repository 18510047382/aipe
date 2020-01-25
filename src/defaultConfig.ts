export const defaultConfig = {
    headers: {},
    data: '',
    timeout: 0,
    withCredentials: false,
    validateStatus: (status: number): boolean => {
        return status >= 200 && status < 300;
    },
    async: true,
    cache: true,
    safeData: false
}
