import { trim } from "./trim.ts";

export function generateURL(url: string, data: any): string {
    url = trim(url);

    let dataStr = '';
    if (typeof data === 'string') {
        data = trim(data);
        if (data[0] !== '&') {
            data = '&' + data;
        }
        dataStr = data;
    } else {
        for (let i in data) {
            if (data[i] instanceof Array) {
                for (let a = 0; a < data[i].length; a++) {
                    dataStr += '&' + i + '=' + data[i][a].toString();
                }
            } else {
                dataStr += '&' + i + '=' + data[i].toString();
            }
        }
    }

    if (dataStr === '') {
        return url;
    }

    dataStr = dataStr.substr(1);

    if (url.indexOf('?') === -1) {
        return url + '?' + dataStr;
    }

    if (url[url.length - 1] === '?') {
        return url + dataStr;
    }

    if (url[url.length - 1] === '&') {
        return url + dataStr;
    }

    return url + '&' + dataStr;
}
