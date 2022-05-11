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

export { autobind, configurable, decorate, enumerable, extendDescriptor, lazyInit as nonconfigurable, lazyInit as nonenumerable, lazyInit as readonly, time };
