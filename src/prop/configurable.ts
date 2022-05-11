import { decorate } from '../utils'

function handleDescriptor(target: any, key: PropertyKey, descriptor) {
  descriptor.configurable = true
  return descriptor
}

export default function configurable(...args) {
  return decorate(handleDescriptor, args)
}