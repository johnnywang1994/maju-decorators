interface ConstructorMapType {
  [name: PropertyKey]: any;
}

type ValidatorRuleType = (...args: any[]) => boolean;

type ValidatorRulesType = {
  [name: PropertyKey]: ValidatorRuleType;
}

type PropertyDecoratorType = (target: any, propName: string) => void;

type PropertyDecoratorsType = {
  [ruleName: PropertyKey]: PropertyDecoratorType;
}

class Validator {
  constructorMap: ConstructorMapType;
  validatorRules: ValidatorRulesType;
  decorators: PropertyDecoratorsType;

  constructor() {
    this.constructorMap = {};
    this.validatorRules = {};
    this.decorators = {};

    this.define = this.define.bind(this);
    this.validateValue = this.validateValue.bind(this);
    this.validateProp = this.validateProp.bind(this);
    this.validateObject = this.validateObject.bind(this);
    this.validate = this.validate.bind(this);
  }

  define(ruleName: string, ruleFn: ValidatorRuleType, autoValidate = true) {
    const { constructorMap, validateValue } = this;

    // save validator
    this.validatorRules[ruleName] = ruleFn;

    const decorator = (target: any, propName: string) => {
      // bind validator
      const constructorName = target.constructor.name;
      if (!constructorMap.hasOwnProperty(constructorName)) {
        constructorMap[constructorName] = {};
      }
      if (!constructorMap[constructorName][propName]) {
        constructorMap[constructorName][propName] = [];
      }
      constructorMap[constructorName][propName].push(ruleName);

      // bind getter/setter if autoValidate set to true
      if (autoValidate) {
        let value = target[propName];
        const descriptor = {
          get() {
            return value;
          },
          set(newVal: any) {
            const validator = constructorMap[constructorName][propName];
            const detail = validateValue(newVal, validator);
            if (Object.values(detail).every(Boolean)) {
              value = newVal;
            } else {
              console.error(`Property "${propName}" cannot set to "${constructorName}" with type ${typeof newVal}`);
            }
          }
        };
        return descriptor;
      }
    };

    // save decorator
    this.decorators[ruleName] = decorator;

    return decorator;
  }

  validateValue(targetValue: any, validators: string[]) {
    const { validatorRules } = this;
    const detail: any = {};

    for (const validatorName of validators) {
      const validator = validatorRules[validatorName];
      if (validator) {
        const validateResult = validator(targetValue);
        detail[validatorName] = validateResult;
      }
    }

    return detail;
  }

  validateProp(target: any, prop: PropertyKey) {
    const { constructorMap } = this;
    const validateObj = constructorMap[target.constructor.name];
    if (!validateObj || !validateObj[prop]) return true;

    const validators = validateObj[prop];
    const detail = this.validateValue(target[prop], validators);

    return detail;
  }

  validateObject(target: any) {
    const { constructorMap } = this;
    const validateObj = constructorMap[target.constructor.name];

    if (!validateObj) return true;

    const details: any = {};

    for (const prop in validateObj) {
      details[prop] = this.validateProp(target, prop);
    }

    return details;
  }


  validate(target: any, prop?: PropertyKey) {
    return prop
      ? this.validateProp(target, prop)
      : this.validateObject(target);
  }
}

const validator = new Validator();

validator.define('required', (value: any) => !!value);
validator.define('number', (value: number) => typeof value === 'number');
validator.define('positive', (value: number) => value > 0);

const Required = validator.decorators.required;
const isNumber = validator.decorators.number;

class User {
  @Required
  name: string;
  @isNumber
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const johnny = new User('johnny', 2);
const state = validator.validate(johnny);
console.log(johnny);

setTimeout(() => {
  johnny.age = '3';
}, 1000);
