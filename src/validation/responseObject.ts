export interface ResponseObject {
    data: string,
    dataText: string,
    dataXML?: Object,
    status: number,
    statusText: string,
    isTimeout: boolean,
    url?: string
}
