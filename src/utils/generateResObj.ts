import { ResponseObject } from "./../validation/responseObject.ts";

export function generateResObj(xmlhttp: any): ResponseObject {
    let responseData = xmlhttp.response;
    if (!responseData) {
        responseData = xmlhttp.responseText;
    }

    return {
        data: responseData,
        dataText: xmlhttp.responseText,
        dataXML: xmlhttp.responseXML,
        status: xmlhttp.status,
        statusText: xmlhttp.statusText,
        isTimeout: xmlhttp.status === 0 && xmlhttp.timeout !== 0,
        url: xmlhttp.responseURL
    }
}
