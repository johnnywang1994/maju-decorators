export interface PropertyOrMethodDecorator extends MethodDecorator, PropertyDecorator {
  (target: object, propertyKey: string | symbol): void;
}

export interface Deprecate extends MethodDecorator {
  (message?: string, option?: DeprecateOption): MethodDecorator;
}

export interface DeprecateOption {
  url: string;
}

export const autobind: Function;

export const readonly: PropertyOrMethodDecorator;

export const nonenumerable: PropertyOrMethodDecorator;

export const enumerable: PropertyOrMethodDecorator;

export const configurable: PropertyOrMethodDecorator;

export const nonconfigurable: PropertyOrMethodDecorator;

export const extendDescriptor: PropertyOrMethodDecorator;

export const lazyInit: PropertyDecorator;

export function getter(func: Function, ...args: any[]): MethodDecorator;

export function setter(func: Function, ...args: any[]): MethodDecorator;

export function decorate(func: Function, ...args: any[]): MethodDecorator;

export function time(prefix: string, console?: Console): MethodDecorator;
