import { decorate as _decorate } from '../utils'
const { getPrototypeOf, getOwnPropertyDescriptor } = Object

function handleDescriptor(target, key, descriptor) {
  const superKlass = getPrototypeOf(target)
  const superDesc = getOwnPropertyDescriptor(superKlass, key)

  const newDesc: any = {
    configurable: superDesc.configurable || true,
    enumerable: superDesc.enumerable || true,
    initializer: descriptor.initializer,
  }

  if (descriptor.get || descriptor.set) {
    newDesc.get = descriptor.get || superDesc.get
    newDesc.set = descriptor.set || superDesc.set
  } else {
    newDesc.value = descriptor.value
    newDesc.writable = superDesc.writable || true
  }

  return newDesc
}

export default function extendDescriptor(...args) {
  return _decorate(handleDescriptor, args)
}