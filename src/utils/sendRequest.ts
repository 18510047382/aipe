import { generateResObj } from "./generateResObj.ts";
import { generateURL } from "./generateURL.ts";

import { AipeConfig } from "./../validation/aipeConfig.ts";
import { TaskObject } from "./../validation/taskObject.ts";

export function sendRequest(xmlhttp: any, task: TaskObject, callback: () => void, errorCallback: () => void): void {
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {
            const resObj = generateResObj(xmlhttp);

            if (!resObj.isTimeout && task.config.validateStatus(xmlhttp.status)) {
                if (task.then) {
                    task.then(resObj);
                }
            } else {
                if (task.catch) {
                    errorCallback();
                    task.catch(resObj);
                }
            }

            if (task.finally) {
                task.finally(resObj);
            }

            callback();
        }
    }

    // open request
    if (task.method === 'GET') {
        xmlhttp.open(task.method, generateURL(task.url, task.config.data), true);
    } else {
        xmlhttp.open(task.method, task.url, true);
    }

    xmlhttp.timeout = task.config.timeout;

    // set headers
    const headers = task.config.headers;
    for (let i in headers) {
        xmlhttp.setRequestHeader(i, headers[i]);
    }

    // request
    if (task.method === 'GET') {
        xmlhttp.send();
    } else {
        // formdata
        if (task.config.data instanceof FormData) {
            xmlhttp.send(task.config.data);
            return;
        }
        xmlhttp.send(generateURL('', task.config.data).substr(1));
    }
}
