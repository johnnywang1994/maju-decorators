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
      // 因為這邊以 getter 作為觸發
      // 故原方法只要套用了一層 decorator 後面就都會拿到 isGetter: true
      // 當 isGetter: true 時我們認定其為一個 decorator 進行取值
      // 若 isGetter: false 時表示前面還沒套用任何 decorator，直接用原方法
      // 將得到的 fn 丟進當前的 decorator 中執行得到最終的 value 方法
      // 將 value 方法以 defineProperty 覆蓋回實例屬性的 descriptor
      const fn = isGetter ? originalGet.call(this) : originalValue
      const context = { target, key, fn }
      const value = decorator.call(this, context, ...args)
      const desc = {
        configurable,
        enumerable,
        value,
        writable,
      }

      // 這裡每個註冊的 decorator 只會各 set 1次
      defineProperty(this, key, desc)

      return value
    },
    set: isGetter ? originalSet : createDefaultSetter(key),
  }
}

export default function decorate(...args) {
  return _decorate(handleDescriptor, args)
}