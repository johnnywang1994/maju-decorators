import { decorate, createDefaultSetter } from '../utils'
const { defineProperty, getOwnPropertyDescriptor } = Object

function handleDescriptor(target, key, descriptor, [decorator, ...args]) {
  if (descriptor === undefined)
    descriptor = getOwnPropertyDescriptor(target, key)

  const { configurable, enumerable } = descriptor
  const originalGet = descriptor.get
  const originalSet = descriptor.set
  const isGetter = !!originalGet

  return {
    configurable,
    enumerable,
    get() {
      // get the latest descriptor
      // because latest descriptor will be adjusted by other decorators
      const currentDesc = getOwnPropertyDescriptor(target, key)
      const context = { target, key, fn: originalGet }
      const decoratorGetter = decorator.apply(this, [context, ...args])
      // trigger other decorated getter before set
      // and cache the getter value to return
      const value = decoratorGetter.call(this)

      defineProperty(this, key, {
        configurable,
        enumerable,
        get: decoratorGetter,
        set: currentDesc.set,
      })

      return value
    },
    set: isGetter ? originalSet : createDefaultSetter(key),
  }
}

export default function getter(...args) {
  return decorate(handleDescriptor, args)
}