/**
 * `value`가 `Set`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 Set이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isSet = (value) => value instanceof Set;

/**
 * `value`가 `Map`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 Map이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isMap = (value) => value instanceof Map;

/**
 * `value`가 `Date`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 Date라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isDate = (value) => value instanceof Date;

/**
 * `value`가 `Array`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 Array라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isArray = (value) => Array.isArray(value);

/**
 * `value`가 `Object`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 Object라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isObject = (value) => value?.constructor === Object
    || (value?.constructor === undefined && typeof value === 'object');

/**
 * `value`가 `Symbol`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 Symbol이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isSymbol = (value) => value?.constructor === Symbol;

/**
 * `value`가 `RegExp`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 RegExp이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isRegExp = (value) => value instanceof RegExp || value?.constructor === RegExp;

/**
 * `value`가 `WeakMap`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 WeakMap이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isWeakMap = (value) => value instanceof WeakMap;

/**
 * `value`가 `WeakSet`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 WeakSet이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isWeakSet = (value) => value instanceof WeakSet;

/**
 * `value`가 `Function`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 Function이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isFunction = (value) => value?.constructor === Function || typeof value === 'function';

/**
 * `value`가 `TypedArray`로 분류되는지 확인한다.
 * (e.g. Int8Array, Uint8Array, Uint8ClampedArray, Int16Array ...)
 * @param {*} value
 * @returns {boolean} `value`가 TypedArray라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isTypedArray = (value) => {
  const re = /^(?:Int(?:8|16|32))|(?:Uint(?:8|16|32))|(?:Float(?:32|64))|(?:Big(?:Int|Uint)64)(Clamped)?Array$/;
  return re.test(value?.constructor.name) && ArrayBuffer.isView(value);
};

/**
 * `Set`을 복사한다.
 * @param {Set} source
 * @returns {Set} 복사된 `Set`을 리턴한다.
 */
const copySet = (source) => new Set(source);

/**
 * `Map`을 복사한다.
 * @param {Map} source
 * @returns {Map} 복사된 `Map`을 리턴한다.
 */
const copyMap = (source) => new Map(source);

/**
 * `Date`를 복사한다.
 * @param {Date} source
 * @returns {Date} 복사된 `Date`를 리턴한다.
 */
const copyDate = (source) => new Date(source);

/**
 * `Array`를 복사한다.
 * @param {Array} source
 * @returns {Array} 복사된 `Array`를 리턴한다.
 */
const copyArray = (source) => (
  source.reduce((a, c) => {
    a.push(c);
    return a;
  }, [])
);

/**
 * `Object`를 복사한다.
 * @param {Object} source
 * @returns {Object} 복사된 `Object`를 리턴한다.
 */
const copyObject = (source) => (
  Object.keys(source).reduce((a, c) => ({ ...a, [c]: source[c] }), {})
);

/**
 * `Symbol`을 복사한다.
 * @param {Object} source
 * @returns {Object} 복사된 `Symbol`을 리턴한다.
 */
const copySymbol = (source) => Object(source.valueOf());

/**
 * `Function`을 복사한다.
 * @param {Function} source
 * @returns {Function} 복사된 `Function`을 리턴한다.
 */
const copyFunction = (source) => source.bind(undefined);

/**
 * @param {ArrayBuffer} source
 * @returns {ArrayBuffer} 복제한 `ArrayBuffer`를 리턴한다.
 */
const cloneArrayBuffer = (source) => (
  source.resizable
    ? new source.constructor(source.byteLength, { maxByteLength: source.maxByteLength })
    : new source.constructor(source.byteLength)
);

/**
 * `ArrayBufferView`를 복제한다.
 * @param {Object} source
 * @param {boolean} isDeep
 * @returns {Object} 복제된 `ArrayBufferView`를 리턴한다.
 */
const cloneArrayBufferView = (source, isDeep) => {
  const buffer = isDeep ? cloneArrayBuffer(source.buffer) : source.buffer;
  return new source.constructor(buffer, source.byteOffset, source.length);
};

/**
 * `typedArray`을 복사한다.
 * @param {Object} source
 * @param {boolean} isDeep
 * @returns {Object} 복사된 `typedArray`를 리턴한다.
 */
const copyTypedArray = (source, isDeep) => {
  const result = cloneArrayBufferView(source, isDeep);
  result.set(source, 0);
  return result;
};

/**
 * @param {Object} source
 * @returns {Object} 복사된 `RegExp`를 리턴한다.
 */
const copyRegExp = (source) => {
  const result = new RegExp(source.source, source.flags);
  if (source.global) {
    result.lastIndex = source.lastIndex;
  }
  return result;
};

// type check

/** */
const copyValidations = [
  {
    validation: isSymbol,
    copy: copySymbol,
  },
  {
    validation: isArray,
    copy: copyArray,
  },
  {
    validation: isObject,
    copy: copyObject,
  },
  {
    validation: isSet,
    copy: copySet,
  },
  {
    validation: isMap,
    copy: copyMap,
  },
  {
    validation: isDate,
    copy: copyDate,
  },
  {
    validation: isRegExp,
    copy: copyRegExp,
  },
  {
    validation: isWeakMap,
    copy: (source) => source,
  },
  {
    validation: isWeakSet,
    copy: (source) => source,
  },
  {
    validation: isFunction,
    copy: copyFunction,
  },
  {
    validation: isTypedArray,
    copy: (source) => copyTypedArray(source, true),
  },
];

/**
 * 원본 객체에 대한 참조가 끊어진 깊은 복사를 수행한다.
 * @param {*} source
 * @returns {*}
 */
const deepClone = (source) => {
  if (!(source instanceof Object)) return source;

  const { copy } = copyValidations.find(({ validation }) => validation(source));

  if (!copy) throw new Error(`Validation for type '${source}' is not registered.`);
  else {
    const cloned = copy(source);

    Object.entries(cloned).forEach(([key]) => {
      cloned[key] = deepClone(cloned[key]);
    });

    return cloned;
  }
};

export { copyArray, copyDate, copyFunction, copyMap, copyObject, copyRegExp, copySet, copySymbol, copyTypedArray, deepClone, isArray, isDate, isFunction, isMap, isObject, isRegExp, isSet, isSymbol, isTypedArray, isWeakMap, isWeakSet };
//# sourceMappingURL=bundle.js.map
