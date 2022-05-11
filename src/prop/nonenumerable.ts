import { decorate } from '../utils'

function handleDescriptor(target, key, descriptor) {
  descriptor.enumerable = false
  return descriptor
}

export default function nonenumerable(...args) {
  return decorate(handleDescriptor, args)
}