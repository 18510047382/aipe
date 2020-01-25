export interface AipeConfig {
    headers?: any,
    data?: string | Object,
    timeout?: number,
    withCredentials?: boolean,
    validateStatus?: (status: number) => boolean,
    async?: boolean, //未完成
    cache?: boolean, //未完成
    safeData?: boolean // xss attack protect //未完成
}
