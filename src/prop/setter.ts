import { decorate } from '../utils'
const { defineProperty, getOwnPropertyDescriptor } = Object

function handleDescriptor(target, key, descriptor, [decorator, ...args]) {
  if (descriptor === undefined) {
    descriptor = getOwnPropertyDescriptor(target, key)
  }

  const { configurable, enumerable } = descriptor
  const originalGet = descriptor.get
  const originalSet = descriptor.set

  return {
    configurable,
    enumerable,
    get: originalGet,
    set(newVal) {
      // get the latest descriptor
      // because latest descriptor will be adjusted by other decorators
      const currentDesc = getOwnPropertyDescriptor(target, key)
      const context = { target, key, fn: originalSet }
      const decoratorSetter = decorator.apply(this, [context, ...args])
      // trigger other decorated setter before set
      // and cache the setter value to return
      const value = decoratorSetter.call(this, newVal)

      defineProperty(this, key, {
        configurable,
        enumerable,
        get: currentDesc.get,
        set: decoratorSetter,
      })

      return value
    },
  }
}


export default function getter(...args) {
  return decorate(handleDescriptor, args)
}