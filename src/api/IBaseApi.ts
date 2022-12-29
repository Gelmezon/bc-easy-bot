export interface IBaseApi<T> {
    path(): string

    get(id: string): T;

    list(t: T): T[];

    save(t: T): void;

    update(t: T): void;

}