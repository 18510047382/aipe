import { Aipe } from './class.ts';
import { AipeConfig } from "./validation/aipeConfig.ts";

import { defaultConfig } from "./defaultConfig.ts";

window.aipe = {
    get(url: string, config?: AipeConfig) {
        return new Aipe().get(url, config);
    },

    post(url: string, config?: AipeConfig) {
        return new Aipe().post(url, config);
    },

    put(url: string, config?: AipeConfig) {
        return new Aipe().put(url, config);
    },

    patch(url: string, config?: AipeConfig) {
        return new Aipe().patch(url, config);
    },

    delete(url: string, config?: AipeConfig) {
        return new Aipe().delete(url, config);
    },

    head(url: string, config?: AipeConfig) {
        return new Aipe().head(url, config);
    },

    config: {
        ...defaultConfig
    }
}
