export interface InstanceCreator<T> {
    (): T;
}
export interface IContext {
    register<T>(runtime_id: string, instance: T | InstanceCreator<T>, force?: boolean): any;
    resolve<T>(runtime_id: string): T;
    clear(): any;
}
export default class Context implements IContext {
    /**
     * Saves instance with given id in context. If second argument is InstanceCreator, actual instance would be
     * instantiated on first resolve.
     *
     * @param runtime_id
     * @param instance
     * @param force
       */
    register<T>(runtime_id: string, instance: T | InstanceCreator<T>, force?: boolean): void;
    /**
     * Returns previously registered instance for given key. If instance was never created, throws error.
     * @param runtime_id
     */
    resolve<T>(runtime_id: string): T;
    /**
     * Removes all previously registered instances from context
     */
    clear(): void;
    /**
     * Copies all state of current context to newly created one
     * @returns {IContext}
       */
    clone(): IContext;
    private map;
}
