const { defineProperty, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols } = Object

function isDescriptor(desc: Record<PropertyKey, any>): boolean {
  if (!desc || !desc.hasOwnProperty) {
    return false
  }

  const keys = ['value', 'initializer', 'get', 'set']

  for (let i = 0, l = keys.length; i < l; i++) {
    if (desc.hasOwnProperty(keys[i])) {
      return true
    }
  }

  return false
}

export function decorate(handleDescriptor: Function, entryArgs: any[]) {
  if (isDescriptor(entryArgs[entryArgs.length - 1])) {
    return handleDescriptor(...entryArgs, [])
  } else {
    return function () {
      return handleDescriptor(...Array.prototype.slice.call(arguments), entryArgs)
    };
  }
}

export function createDefaultSetter(key: string) {
  return function set(newValue) {
    defineProperty(this, key, {
      configurable: true,
      writable: true,
      // IS enumerable when reassigned by the outside word
      enumerable: true,
      value: newValue
    })

    return newValue
  }
}

interface BindThis<T extends (...args: any[]) => any, K = any> {
  (this: K, ...args: Parameters<T>): ReturnType<T>;
}

export function bind<T extends (...args: any[]) => any, K = any>(fn: T, context: K): BindThis<T, K> {
  if (fn.bind) {
    return fn.bind(context)
  } else {
    return function __autobind__() {
      return fn.apply(context, arguments)
    }
  }
}

export const getOwnKeys = getOwnPropertySymbols
    ? function (object) {
        return getOwnPropertyNames(object)
          .concat(getOwnPropertySymbols(object) as any)
      }
    : getOwnPropertyNames

export function getOwnPropertyDescriptors(obj: Record<PropertyKey, any>) {
  const descs = {}

  getOwnKeys(obj).forEach(
    key => (descs[key] = getOwnPropertyDescriptor(obj, key))
  )

  return descs
}