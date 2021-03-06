/// <reference path="../lib/all.d.ts" />
import { IServiceConstructor, IConstructor, default as Injector } from "./injector";
export { IServiceConstructor } from "./injector";
export { IConstructor } from "./injector";
import { IContext } from "./context";
export { IContext } from "./context";
export declare const Service: (target: IServiceConstructor) => any;
export declare const Injectable: (runtime_id: string) => (target: IConstructor) => any;
export declare const Inject: (runtime_id: string) => (target: any, key: any) => void;
export declare const ConstructorInject: (...runtime_id: string[]) => (target: any) => any;
export declare const injector: Injector;
export declare const context: IContext;
