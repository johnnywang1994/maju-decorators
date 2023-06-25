/* eslint-disable no-console */
import { decorate } from '../utils'
import { handleDescriptor as handleDecorate } from './decorate'

// Exported for mocking in tests
const labels = {}

const defaultConsole = {
  time: console.time ? console.time.bind(console) : (label) => {
    labels[label] = new Date()
  },
  timeEnd: console.timeEnd ? console.timeEnd.bind(console) : (label) => {
    const timeNow: any = new Date()
    const timeTaken = timeNow - labels[label]
    delete labels[label]
    console.log(`${label}: ${timeTaken}ms`)
  },
}

function timeDecorator({ target, key, fn }, prefix = null, console = defaultConsole) {
  let count = 0
  if (prefix === null) prefix = `${target.constructor.name}.${key}`
  return function(...args) {
    const label = `${prefix}-${count}`
    count++
    console.time(label)
    // support for async await
    const p = fn.apply(this, args)
    if (!!p && typeof p.then === 'function') {
      return Promise.resolve(p).then(() => console.timeEnd(label))
    }
    console.timeEnd(label)
    return p
  }
}

// 必須緊貼 async method，不然 async 會中斷
export default function time(...args) {
  return decorate(handleDecorate, [timeDecorator, ...args])
}