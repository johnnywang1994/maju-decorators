declare function autobind(...args: any[]): void | {
    configurable: any;
    enumerable: any;
    get(): any;
    set: (newValue: any) => any;
} | ((...argsClass: any[]) => void | {
    configurable: any;
    enumerable: any;
    get(): any;
    set: (newValue: any) => any;
});

declare function decorate(...args: any[]): any;

declare function time(...args: any[]): any;

declare function configurable(...args: any[]): any;

declare function enumerable(...args: any[]): any;

declare function extendDescriptor(...args: any[]): any;

declare function lazyInit(...args: any[]): any;

declare function getter$1(...args: any[]): any;

declare function getter(...args: any[]): any;

export { autobind, configurable, decorate, enumerable, extendDescriptor, getter$1 as getter, lazyInit as nonconfigurable, lazyInit as nonenumerable, lazyInit as readonly, getter as setter, time };
