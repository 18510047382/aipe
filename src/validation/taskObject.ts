import { AipeConfig } from "./aipeConfig.ts";
import { ResponseObject } from "./responseObject.ts";

export interface TaskObject {
    url: string,
    method: string,
    config?: AipeConfig,
    then?: (response: ResponseObject) => void,
    catch?: (response: ResponseObject) => void,
    finally?: (response: ResponseObject) => void
}
