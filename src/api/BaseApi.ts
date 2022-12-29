import { IBaseApi } from "./IBaseApi";
import {get} from '@truefit/http-utils';


class BaseApi<T> implements IBaseApi<T>{
    path(): string {
        return '';
    }
    async get(id: string): T {
        const response = await get('/users');
    }
    async list(t: T): T[] {
        throw new Error("Method not implemented.");
    }
    save(t: T): void {
        throw new Error("Method not implemented.");
    }
    update(t: T): void {
        throw new Error("Method not implemented.");
    }

}