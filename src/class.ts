import { createAjaxObj } from "./utils/createAjaxObj.ts";
import { bind } from "./utils/bind.ts";
import { sendRequest } from "./utils/sendRequest.ts";
import { checkConfig } from "./utils/checkConfig.ts";

import { AipeConfig } from "./validation/aipeConfig.ts";
import { TaskObject } from "./validation/taskObject.ts";

export class Aipe {
    private thisTask?: TaskObject;
    private isStartTask: boolean;
    private taskQueue: TaskObject[];
    xmlhttp: any;

    constructor() {
        this.thisTask = null;
        this.isStartTask = false;
        this.taskQueue = [];
        this.xmlhttp = createAjaxObj();
    }

    then(fn: () => any): Aipe {
        if (!this.thisTask) {
            console.error('Aipe: Please set function "then" immediately after you create aipe object!');
            return this;
        }

        this.thisTask.then = bind(fn, this);
        return this;
    }

    catch(fn: () => any): Aipe {
        if (!this.thisTask) {
            console.error('Aipe: Please set function "then" immediately after you create aipe object!');
            return this;
        }

        this.thisTask.catch = bind(fn, this);
        return this;
    }

    finally(fn: () => any): Aipe {
        if (!this.thisTask) {
            console.error('Aipe: Please set function "then" immediately after you create aipe object!');
            return this;
        }

        this.thisTask.finally = bind(fn, this);
        return this;
    }

    get(url: string, config?: AipeConfig): Aipe {
        this.$pushTask(url, 'GET', config);
        return this;
    }

    post(url: string, config?: AipeConfig): Aipe {
        this.$pushTask(url, 'POST', config);
        return this;
    }

    put(url: string, config?: AipeConfig): Aipe {
        this.$pushTask(url, 'PUT', config);
        return this;
    }

    patch(url: string, config?: AipeConfig): Aipe {
        this.$pushTask(url, 'PATCH', config);
        return this;
    }

    delete(url: string, config?: AipeConfig): Aipe {
        this.$pushTask(url, 'DELETE', config);
        return this;
    }

    head(url: string, config?: AipeConfig): Aipe {
        this.$pushTask(url, 'HEAD', config);
        return this;
    }

    private $request(): void {
        if (this.taskQueue.length === 0 || this.isStartTask) return;

        sendRequest(this.xmlhttp, this.taskQueue[0], (): void => {
            if (this.taskQueue[0] === this.thisTask) {
                this.thisTask = null;
            }

            this.taskQueue.shift();

            if (this.taskQueue.length === 0) {
                this.isStartTask = false;
                return;
            }

            this.$request();
        }, (): void => {
            if (this.taskQueue[0] === this.thisTask) {
                this.thisTask = null;
            }

            this.taskQueue.shift();

            this.isStartTask = false;
        });
    }

    private $pushTask(url: string, method: string, config?: AipeConfig): void {
        const thisTaskObj = {
            url,
            method,
            config: checkConfig(config)
        }

        this.thisTask = thisTaskObj;
        this.taskQueue.push(thisTaskObj);

        if (!this.isStartTask) {
            this.$request();
            this.isStartTask = true;
        }
    }
}
