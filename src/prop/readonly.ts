import { decorate } from '../utils'

function handleDescriptor(target, key, descriptor) {
  descriptor.writable = false
  return descriptor
}

export default function readonly(...args) {
  return decorate(handleDescriptor, args)
}