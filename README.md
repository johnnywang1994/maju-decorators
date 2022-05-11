# Maju Decorators

This is a decorators utils created mostly by [core-decorators](https://www.npmjs.com/package/core-decorators), just fixed some features and implements of `decorate`, `time` decorator. & Removes deprecated decorators, since `core-decorators` is now set to `read-only`.


## Install

```bash
$ npm install maju-decorators
```


## Documentation

Mostly the same with [core-decorators](https://www.npmjs.com/package/core-decorators)


### decorate

Just let `decorate` can be connected as list, and the `decorator` function will receive a context of following content.

- target: decorator target prototype
- key: decorator method name
- fn: decorator function(from the last decorator or the origin method)

```js
import { decorate, time } from 'maju-decorators'

function mylog1({ fn }) {
  return function(...args) {
    console.log('log1');
    return fn.apply(this, args);
  }
}

function mylog2({ fn }) {
  return function(...args) {
    console.log('log2');
    return fn.apply(this, args);
  }
}

class A {
  @decorate(mylog1)
  @decorate(mylog2)
  @time()
  run() {
    console.log('test');
  }
}

const a = new A();
a.run();
// log1
// log2
// test
// A.run-0: 0.135ms
```


### time

add async support for `time` decorate, we can now use as following:

```js
class A {
  @decorate(mylog1)
  @decorate(mylog2)
  @time()
  async run() {
    console.log('test start');
    await delay(2000);
    console.log('test end');
  }
}
```

> be careful when decorating async function, since the decorator wraps the function below, once there's a sync decorator without return the `fn`, this will interrupt the async wrapper afterward. So always put `time` decorator right above the target method should be great.

```js
function mylog2({ fn }) {
  return function(...args) {
    console.log('log2');
    // if the decorator before `time` did not return, if will break the async
    fn.apply(this, args);
  }
}

// `time` decorator in middle
class A {
  @decorate(mylog1)
  @time()
  @decorate(mylog2)
  async run() {
    console.log('test start');
    await delay(2000);
    console.log('test end');
  }
}

// log1
// log2
// test start
// A.run-0: 1.014ms
// test end
```