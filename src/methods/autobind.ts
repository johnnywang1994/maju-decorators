import { createDefaultSetter, getOwnKeys, getOwnPropertyDescriptors, bind } from '../utils'
const { defineProperty, getPrototypeOf } = Object

let mapStore

// get bound cache
function getBoundSuper(obj, fn) {
  if (typeof WeakMap === 'undefined') {
    throw new Error(
      `Using @autobind on ${fn.name}() requires WeakMap support due to its use of super.${fn.name}()`,
    )
  }

  if (!mapStore) mapStore = new WeakMap()

  if (mapStore.has(obj) === false) mapStore.set(obj, new WeakMap())

  const superStore = mapStore.get(obj)

  if (superStore.has(fn) === false) superStore.set(fn, bind(fn, obj))

  return superStore.get(fn)
}

function autobindClass(klass) {
  const descs = getOwnPropertyDescriptors(klass.prototype)
  const keys = getOwnKeys(descs)

  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    const desc = descs[key]

    if (typeof desc.value !== 'function' || key === 'constructor') continue

    defineProperty(klass.prototype, key, autobindMethod(klass.prototype, key, desc))
  }
}

// autobind method
function autobindMethod(target, key, { value: fn, configurable, enumerable }) {
  if (typeof fn !== 'function')
    throw new SyntaxError(`@autobind can only be used on functions, not: ${fn}`)

  // get root prototype constructor
  const { constructor } = target

  return {
    configurable,
    enumerable,
    get() {
      // Someone accesses the property directly on the prototype on which it is
      // actually defined on
      if (this === target) return fn

      // Someone accesses the property directly on a prototype but it was found
      // up the chain, not defined directly on it
      if (this.constructor !== constructor && getPrototypeOf(this).constructor === constructor) return fn

      // Autobound method calling super.sameMethod() which is also autobound and so on.
      // method is on prototype, should set autobind on super
      if (this.constructor !== constructor && key in this.constructor.prototype) return getBoundSuper(this, fn)

      const boundFn = bind(fn, this)

      defineProperty(this, key, {
        configurable: true,
        writable: true,
        // NOT enumerable when it's a bound method
        enumerable: false,
        value: boundFn,
      })

      return boundFn
    },
    set: createDefaultSetter(key),
  }
}

function handle(args: any[]) {
  if (args.length === 1) return autobindClass(args[0])
  const [target, key, descriptor] = args
  return autobindMethod(target, key, descriptor)
}

export default function autobind(...args) {
  if (args.length === 0) {
    return function(...argsClass) {
      return handle(argsClass)
    }
  }
  return handle(args)
}