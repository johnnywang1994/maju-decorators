import { decorate as _decorate, createDefaultSetter } from '../utils'
const { defineProperty } = Object

export function handleDescriptor(target, key, descriptor, [decorator, ...args]) {
  if (descriptor === undefined)
    descriptor = Object.getOwnPropertyDescriptor(target, key)

  const { configurable, enumerable, writable } = descriptor
  const originalGet = descriptor.get
  const originalSet = descriptor.set
  const originalValue = descriptor.value
  const isGetter = !!originalGet

  return {
    configurable,
    enumerable,
    get() {
      const fn = isGetter ? originalGet.call(this) : originalValue
      const context = { target, key, fn }
      const value = decorator.call(this, context, ...args)
      const desc = {
        configurable,
        enumerable,
        value,
        writable,
      }

      defineProperty(this, key, desc)

      return value
    },
    set: isGetter ? originalSet : createDefaultSetter(key),
  }
}

export default function decorate(...args) {
  return _decorate(handleDescriptor, args)
}