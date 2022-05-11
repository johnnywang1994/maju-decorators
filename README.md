# Maju Decorators

This is a decorators utils created mostly by [core-decorators](https://www.npmjs.com/package/core-decorators), just fixed some features and implements of `decorate`, `time` decorator. & Removes deprecated decorators.


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
