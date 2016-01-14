export interface InstanceCreator<T> {
    (): T;
}
export default class Context {
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
    private map;
}
