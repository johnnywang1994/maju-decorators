import { decorate } from '../utils'

function handleDescriptor(target, key, descriptor) {
  descriptor.configurable = false
  return descriptor
}

export default function nonconfigurable(...args) {
  return decorate(handleDescriptor, args)
}