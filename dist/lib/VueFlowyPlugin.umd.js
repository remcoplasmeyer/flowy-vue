(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueFlowyPlugin"] = factory();
	else
		root["VueFlowyPlugin"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "00fd":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "0332":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6691");
var inspectSource = __webpack_require__("2fe4");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "03dd":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("eac5"),
    nativeKeys = __webpack_require__("57a5");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "0544":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("2524");
var definePropertyModule = __webpack_require__("4d54");
var createPropertyDescriptor = __webpack_require__("bd01");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "0644":
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__("3818");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "07c7":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "07e5":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("2524");
var propertyIsEnumerableModule = __webpack_require__("bb92");
var createPropertyDescriptor = __webpack_require__("bd01");
var toIndexedObject = __webpack_require__("1301");
var toPrimitive = __webpack_require__("20eb");
var has = __webpack_require__("3f5a");
var IE8_DOM_DEFINE = __webpack_require__("c459");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0828":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "087d":
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "08cc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "08ea":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("4424");

// `Symbol.toStringTag` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),

/***/ "0b07":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("34ac"),
    getValue = __webpack_require__("3698");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "0c20":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("d862");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "0c54":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("2524");
var definePropertyModule = __webpack_require__("4d54");
var anObject = __webpack_require__("6ef8");
var objectKeys = __webpack_require__("c587");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d24":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("2b3e"),
    stubFalse = __webpack_require__("07c7");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "0f0f":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    keysIn = __webpack_require__("9934");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "0fef":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "1041":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    getSymbolsIn = __webpack_require__("a029");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "1290":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "1301":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("863e");
var requireObjectCoercible = __webpack_require__("a94f");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "1310":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "1368":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("da03");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "1838":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__("c05f"),
    get = __webpack_require__("9b02"),
    hasIn = __webpack_require__("8604"),
    isKey = __webpack_require__("f608"),
    isStrictComparable = __webpack_require__("08cc"),
    matchesStrictComparable = __webpack_require__("20ec"),
    toKey = __webpack_require__("f4d6");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "18d8":
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__("234d");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "1912":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("3215");

__webpack_require__("83a4");

__webpack_require__("08ea");

__webpack_require__("8d32");

__webpack_require__("4b1e");

__webpack_require__("d0dc");

var _typeof = __webpack_require__("7037");

module.exports =
/******/
function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js");
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmArrayLikeToArrayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayLikeToArray; });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmArrayWithoutHolesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithoutHoles; });\n/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmAssertThisInitializedJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _assertThisInitialized; });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmClassCallCheckJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _classCallCheck; });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/createClass.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmCreateClassJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _createClass; });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/createClass.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmCreateSuperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _createSuper; });\n/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ \"./node_modules/core-js/modules/es.reflect.construct.js\");\n/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeReflectConstruct */ \"./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js\");\n/* harmony import */ var _possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n\n\n\n\nfunction _createSuper(Derived) {\n  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  return function _createSuperInternal() {\n    var Super = Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Derived),\n        result;\n\n    if (hasNativeReflectConstruct) {\n      var NewTarget = Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this).constructor;\n      result = Reflect.construct(Super, arguments, NewTarget);\n    } else {\n      result = Super.apply(this, arguments);\n    }\n\n    return Object(_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result);\n  };\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/createSuper.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmDefinePropertyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _defineProperty; });\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/defineProperty.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmGetPrototypeOfJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _getPrototypeOf; });\n/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ \"./node_modules/core-js/modules/es.object.get-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/inherits.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmInheritsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _inherits; });\n/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/inherits.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmIsNativeReflectConstructJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _isNativeReflectConstruct; });\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ \"./node_modules/core-js/modules/es.reflect.construct.js\");\n/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction _isNativeReflectConstruct() {\n  if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n  if (Reflect.construct.sham) return false;\n  if (typeof Proxy === \"function\") return true;\n\n  try {\n    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmIterableToArrayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArray; });\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmNonIterableSpreadJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableSpread; });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmObjectSpread2Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectSpread2; });\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptors.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    });\n    keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        Object(_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/objectSpread2.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmPossibleConstructorReturnJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _possibleConstructorReturn; });\n/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(self);\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmSetPrototypeOfJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _setPrototypeOf; });\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmToConsumableArrayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _toConsumableArray; });\n/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/typeof.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmTypeofJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _typeof; });\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/typeof.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelRuntimeHelpersEsmUnsupportedIterableToArrayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _unsupportedIterableToArray; });\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\n\n\n\n\n\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");
    /***/
  },

  /***/
  "./node_modules/@shopify/draggable/lib/draggable.bundle.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@shopify/draggable/lib/draggable.bundle.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesShopifyDraggableLibDraggableBundleJs(module, exports, __webpack_require__) {
    eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(window, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 66);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _AbstractEvent = __webpack_require__(64);\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _AbstractEvent2.default;\n\n/***/ }),\n/* 1 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _AbstractPlugin = __webpack_require__(60);\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _AbstractPlugin2.default;\n\n/***/ }),\n/* 2 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _closest = __webpack_require__(51);\n\nObject.defineProperty(exports, 'closest', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_closest).default;\n  }\n});\n\nvar _requestNextAnimationFrame = __webpack_require__(49);\n\nObject.defineProperty(exports, 'requestNextAnimationFrame', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_requestNextAnimationFrame).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/***/ }),\n/* 3 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SensorEvent = __webpack_require__(44);\n\nObject.keys(_SensorEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SensorEvent[key];\n    }\n  });\n});\n\n/***/ }),\n/* 4 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Sensor = __webpack_require__(47);\n\nvar _Sensor2 = _interopRequireDefault(_Sensor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Sensor2.default;\n\n/***/ }),\n/* 5 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _DragEvent = __webpack_require__(14);\n\nObject.keys(_DragEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _DragEvent[key];\n    }\n  });\n});\n\nvar _DraggableEvent = __webpack_require__(13);\n\nObject.keys(_DraggableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _DraggableEvent[key];\n    }\n  });\n});\n\nvar _Plugins = __webpack_require__(12);\n\nObject.keys(_Plugins).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _Plugins[key];\n    }\n  });\n});\n\nvar _Sensors = __webpack_require__(6);\n\nObject.keys(_Sensors).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _Sensors[key];\n    }\n  });\n});\n\nvar _Draggable = __webpack_require__(37);\n\nvar _Draggable2 = _interopRequireDefault(_Draggable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Draggable2.default;\n\n/***/ }),\n/* 6 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Sensor = __webpack_require__(4);\n\nObject.defineProperty(exports, 'Sensor', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Sensor).default;\n  }\n});\n\nvar _MouseSensor = __webpack_require__(46);\n\nObject.defineProperty(exports, 'MouseSensor', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_MouseSensor).default;\n  }\n});\n\nvar _TouchSensor = __webpack_require__(43);\n\nObject.defineProperty(exports, 'TouchSensor', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_TouchSensor).default;\n  }\n});\n\nvar _DragSensor = __webpack_require__(41);\n\nObject.defineProperty(exports, 'DragSensor', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_DragSensor).default;\n  }\n});\n\nvar _ForceTouchSensor = __webpack_require__(39);\n\nObject.defineProperty(exports, 'ForceTouchSensor', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_ForceTouchSensor).default;\n  }\n});\n\nvar _SensorEvent = __webpack_require__(3);\n\nObject.keys(_SensorEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SensorEvent[key];\n    }\n  });\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/***/ }),\n/* 7 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SnappableEvent = __webpack_require__(18);\n\nObject.keys(_SnappableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SnappableEvent[key];\n    }\n  });\n});\n\n/***/ }),\n/* 8 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _CollidableEvent = __webpack_require__(23);\n\nObject.keys(_CollidableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _CollidableEvent[key];\n    }\n  });\n});\n\n/***/ }),\n/* 9 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SortableEvent = __webpack_require__(27);\n\nObject.keys(_SortableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SortableEvent[key];\n    }\n  });\n});\n\n/***/ }),\n/* 10 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SwappableEvent = __webpack_require__(30);\n\nObject.keys(_SwappableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SwappableEvent[key];\n    }\n  });\n});\n\n/***/ }),\n/* 11 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _DroppableEvent = __webpack_require__(33);\n\nObject.keys(_DroppableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _DroppableEvent[key];\n    }\n  });\n});\n\n/***/ }),\n/* 12 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Announcement = __webpack_require__(62);\n\nObject.defineProperty(exports, 'Announcement', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Announcement).default;\n  }\n});\nObject.defineProperty(exports, 'defaultAnnouncementOptions', {\n  enumerable: true,\n  get: function () {\n    return _Announcement.defaultOptions;\n  }\n});\n\nvar _Focusable = __webpack_require__(59);\n\nObject.defineProperty(exports, 'Focusable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Focusable).default;\n  }\n});\n\nvar _Mirror = __webpack_require__(57);\n\nObject.defineProperty(exports, 'Mirror', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Mirror).default;\n  }\n});\nObject.defineProperty(exports, 'defaultMirrorOptions', {\n  enumerable: true,\n  get: function () {\n    return _Mirror.defaultOptions;\n  }\n});\n\nvar _Scrollable = __webpack_require__(53);\n\nObject.defineProperty(exports, 'Scrollable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Scrollable).default;\n  }\n});\nObject.defineProperty(exports, 'defaultScrollableOptions', {\n  enumerable: true,\n  get: function () {\n    return _Scrollable.defaultOptions;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/***/ }),\n/* 13 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _DraggableEvent = __webpack_require__(63);\n\nObject.keys(_DraggableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _DraggableEvent[key];\n    }\n  });\n});\n\n/***/ }),\n/* 14 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _DragEvent = __webpack_require__(65);\n\nObject.keys(_DragEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _DragEvent[key];\n    }\n  });\n});\n\n/***/ }),\n/* 15 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _AbstractPlugin = __webpack_require__(1);\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onSortableSorted = Symbol('onSortableSorted');\n\n/**\n * SwapAnimation default options\n * @property {Object} defaultOptions\n * @property {Number} defaultOptions.duration\n * @property {String} defaultOptions.easingFunction\n * @property {Boolean} defaultOptions.horizontal\n * @type {Object}\n */\nconst defaultOptions = exports.defaultOptions = {\n  duration: 150,\n  easingFunction: 'ease-in-out',\n  horizontal: false\n};\n\n/**\n * SwapAnimation plugin adds swap animations for sortable\n * @class SwapAnimation\n * @module SwapAnimation\n * @extends AbstractPlugin\n */\nclass SwapAnimation extends _AbstractPlugin2.default {\n  /**\n   * SwapAnimation constructor.\n   * @constructs SwapAnimation\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * SwapAnimation options\n     * @property {Object} options\n     * @property {Number} defaultOptions.duration\n     * @property {String} defaultOptions.easingFunction\n     * @type {Object}\n     */\n    this.options = _extends({}, defaultOptions, this.getOptions());\n\n    /**\n     * Last animation frame\n     * @property {Number} lastAnimationFrame\n     * @type {Number}\n     */\n    this.lastAnimationFrame = null;\n\n    this[onSortableSorted] = this[onSortableSorted].bind(this);\n  }\n\n  /**\n   * Attaches plugins event listeners\n   */\n  attach() {\n    this.draggable.on('sortable:sorted', this[onSortableSorted]);\n  }\n\n  /**\n   * Detaches plugins event listeners\n   */\n  detach() {\n    this.draggable.off('sortable:sorted', this[onSortableSorted]);\n  }\n\n  /**\n   * Returns options passed through draggable\n   * @return {Object}\n   */\n  getOptions() {\n    return this.draggable.options.swapAnimation || {};\n  }\n\n  /**\n   * Sortable sorted handler\n   * @param {SortableSortedEvent} sortableEvent\n   * @private\n   */\n  [onSortableSorted]({ oldIndex, newIndex, dragEvent }) {\n    const { source, over } = dragEvent;\n\n    cancelAnimationFrame(this.lastAnimationFrame);\n\n    // Can be done in a separate frame\n    this.lastAnimationFrame = requestAnimationFrame(() => {\n      if (oldIndex >= newIndex) {\n        animate(source, over, this.options);\n      } else {\n        animate(over, source, this.options);\n      }\n    });\n  }\n}\n\nexports.default = SwapAnimation; /**\n                                  * Animates two elements\n                                  * @param {HTMLElement} from\n                                  * @param {HTMLElement} to\n                                  * @param {Object} options\n                                  * @param {Number} options.duration\n                                  * @param {String} options.easingFunction\n                                  * @param {String} options.horizontal\n                                  * @private\n                                  */\n\nfunction animate(from, to, { duration, easingFunction, horizontal }) {\n  for (const element of [from, to]) {\n    element.style.pointerEvents = 'none';\n  }\n\n  if (horizontal) {\n    const width = from.offsetWidth;\n    from.style.transform = `translate3d(${width}px, 0, 0)`;\n    to.style.transform = `translate3d(-${width}px, 0, 0)`;\n  } else {\n    const height = from.offsetHeight;\n    from.style.transform = `translate3d(0, ${height}px, 0)`;\n    to.style.transform = `translate3d(0, -${height}px, 0)`;\n  }\n\n  requestAnimationFrame(() => {\n    for (const element of [from, to]) {\n      element.addEventListener('transitionend', resetElementOnTransitionEnd);\n      element.style.transition = `transform ${duration}ms ${easingFunction}`;\n      element.style.transform = '';\n    }\n  });\n}\n\n/**\n * Resets animation style properties after animation has completed\n * @param {Event} event\n * @private\n */\nfunction resetElementOnTransitionEnd(event) {\n  event.target.style.transition = '';\n  event.target.style.pointerEvents = '';\n  event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);\n}\n\n/***/ }),\n/* 16 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _SwapAnimation = __webpack_require__(15);\n\nvar _SwapAnimation2 = _interopRequireDefault(_SwapAnimation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _SwapAnimation2.default;\nexports.defaultOptions = _SwapAnimation.defaultOptions;\n\n/***/ }),\n/* 17 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _AbstractPlugin = __webpack_require__(1);\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nvar _SnappableEvent = __webpack_require__(7);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragStart = Symbol('onDragStart');\nconst onDragStop = Symbol('onDragStop');\nconst onDragOver = Symbol('onDragOver');\nconst onDragOut = Symbol('onDragOut');\nconst onMirrorCreated = Symbol('onMirrorCreated');\nconst onMirrorDestroy = Symbol('onMirrorDestroy');\n\n/**\n * Snappable plugin which snaps draggable elements into place\n * @class Snappable\n * @module Snappable\n * @extends AbstractPlugin\n */\nclass Snappable extends _AbstractPlugin2.default {\n  /**\n   * Snappable constructor.\n   * @constructs Snappable\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * Keeps track of the first source element\n     * @property {HTMLElement|null} firstSource\n     */\n    this.firstSource = null;\n\n    /**\n     * Keeps track of the mirror element\n     * @property {HTMLElement} mirror\n     */\n    this.mirror = null;\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n    this[onDragOver] = this[onDragOver].bind(this);\n    this[onDragOut] = this[onDragOut].bind(this);\n    this[onMirrorCreated] = this[onMirrorCreated].bind(this);\n    this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);\n  }\n\n  /**\n   * Attaches plugins event listeners\n   */\n  attach() {\n    this.draggable.on('drag:start', this[onDragStart]).on('drag:stop', this[onDragStop]).on('drag:over', this[onDragOver]).on('drag:out', this[onDragOut]).on('droppable:over', this[onDragOver]).on('droppable:out', this[onDragOut]).on('mirror:created', this[onMirrorCreated]).on('mirror:destroy', this[onMirrorDestroy]);\n  }\n\n  /**\n   * Detaches plugins event listeners\n   */\n  detach() {\n    this.draggable.off('drag:start', this[onDragStart]).off('drag:stop', this[onDragStop]).off('drag:over', this[onDragOver]).off('drag:out', this[onDragOut]).off('droppable:over', this[onDragOver]).off('droppable:out', this[onDragOut]).off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]);\n  }\n\n  /**\n   * Drag start handler\n   * @private\n   * @param {DragStartEvent} event - Drag start event\n   */\n  [onDragStart](event) {\n    if (event.canceled()) {\n      return;\n    }\n\n    this.firstSource = event.source;\n  }\n\n  /**\n   * Drag stop handler\n   * @private\n   * @param {DragStopEvent} event - Drag stop event\n   */\n  [onDragStop]() {\n    this.firstSource = null;\n  }\n\n  /**\n   * Drag over handler\n   * @private\n   * @param {DragOverEvent|DroppableOverEvent} event - Drag over event\n   */\n  [onDragOver](event) {\n    if (event.canceled()) {\n      return;\n    }\n\n    const source = event.source || event.dragEvent.source;\n\n    if (source === this.firstSource) {\n      this.firstSource = null;\n      return;\n    }\n\n    const snapInEvent = new _SnappableEvent.SnapInEvent({\n      dragEvent: event,\n      snappable: event.over || event.droppable\n    });\n\n    this.draggable.trigger(snapInEvent);\n\n    if (snapInEvent.canceled()) {\n      return;\n    }\n\n    if (this.mirror) {\n      this.mirror.style.display = 'none';\n    }\n\n    source.classList.remove(this.draggable.getClassNameFor('source:dragging'));\n    source.classList.add(this.draggable.getClassNameFor('source:placed'));\n\n    // Need to cancel this in drag out\n    setTimeout(() => {\n      source.classList.remove(this.draggable.getClassNameFor('source:placed'));\n    }, this.draggable.options.placedTimeout);\n  }\n\n  /**\n   * Drag out handler\n   * @private\n   * @param {DragOutEvent|DroppableOutEvent} event - Drag out event\n   */\n  [onDragOut](event) {\n    if (event.canceled()) {\n      return;\n    }\n\n    const source = event.source || event.dragEvent.source;\n\n    const snapOutEvent = new _SnappableEvent.SnapOutEvent({\n      dragEvent: event,\n      snappable: event.over || event.droppable\n    });\n\n    this.draggable.trigger(snapOutEvent);\n\n    if (snapOutEvent.canceled()) {\n      return;\n    }\n\n    if (this.mirror) {\n      this.mirror.style.display = '';\n    }\n\n    source.classList.add(this.draggable.getClassNameFor('source:dragging'));\n  }\n\n  /**\n   * Mirror created handler\n   * @param {MirrorCreatedEvent} mirrorEvent\n   * @private\n   */\n  [onMirrorCreated]({ mirror }) {\n    this.mirror = mirror;\n  }\n\n  /**\n   * Mirror destroy handler\n   * @param {MirrorDestroyEvent} mirrorEvent\n   * @private\n   */\n  [onMirrorDestroy]() {\n    this.mirror = null;\n  }\n}\nexports.default = Snappable;\n\n/***/ }),\n/* 18 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SnapOutEvent = exports.SnapInEvent = exports.SnapEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(0);\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base snap event\n * @class SnapEvent\n * @module SnapEvent\n * @extends AbstractEvent\n */\nclass SnapEvent extends _AbstractEvent2.default {\n\n  /**\n   * Drag event that triggered this snap event\n   * @property dragEvent\n   * @type {DragEvent}\n   * @readonly\n   */\n  get dragEvent() {\n    return this.data.dragEvent;\n  }\n\n  /**\n   * Snappable element\n   * @property snappable\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get snappable() {\n    return this.data.snappable;\n  }\n}\n\nexports.SnapEvent = SnapEvent; /**\n                                * Snap in event\n                                * @class SnapInEvent\n                                * @module SnapInEvent\n                                * @extends SnapEvent\n                                */\n\nSnapEvent.type = 'snap';\nclass SnapInEvent extends SnapEvent {}\n\nexports.SnapInEvent = SnapInEvent; /**\n                                    * Snap out event\n                                    * @class SnapOutEvent\n                                    * @module SnapOutEvent\n                                    * @extends SnapEvent\n                                    */\n\nSnapInEvent.type = 'snap:in';\nSnapInEvent.cancelable = true;\nclass SnapOutEvent extends SnapEvent {}\nexports.SnapOutEvent = SnapOutEvent;\nSnapOutEvent.type = 'snap:out';\nSnapOutEvent.cancelable = true;\n\n/***/ }),\n/* 19 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SnappableEvent = __webpack_require__(7);\n\nObject.keys(_SnappableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SnappableEvent[key];\n    }\n  });\n});\n\nvar _Snappable = __webpack_require__(17);\n\nvar _Snappable2 = _interopRequireDefault(_Snappable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Snappable2.default;\n\n/***/ }),\n/* 20 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _AbstractPlugin = __webpack_require__(1);\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nvar _utils = __webpack_require__(2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onMirrorCreated = Symbol('onMirrorCreated');\nconst onMirrorDestroy = Symbol('onMirrorDestroy');\nconst onDragOver = Symbol('onDragOver');\nconst resize = Symbol('resize');\n\n/**\n * ResizeMirror default options\n * @property {Object} defaultOptions\n * @type {Object}\n */\nconst defaultOptions = exports.defaultOptions = {};\n\n/**\n * The ResizeMirror plugin resizes the mirror element to the dimensions of the draggable element that the mirror is hovering over\n * @class ResizeMirror\n * @module ResizeMirror\n * @extends AbstractPlugin\n */\nclass ResizeMirror extends _AbstractPlugin2.default {\n  /**\n   * ResizeMirror constructor.\n   * @constructs ResizeMirror\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * ResizeMirror options\n     * @property {Object} options\n     * @type {Object}\n     */\n    this.options = _extends({}, defaultOptions, this.getOptions());\n\n    /**\n     * ResizeMirror remembers the last width when resizing the mirror\n     * to avoid additional writes to the DOM\n     * @property {number} lastWidth\n     */\n    this.lastWidth = 0;\n\n    /**\n     * ResizeMirror remembers the last height when resizing the mirror\n     * to avoid additional writes to the DOM\n     * @property {number} lastHeight\n     */\n    this.lastHeight = 0;\n\n    /**\n     * Keeps track of the mirror element\n     * @property {HTMLElement} mirror\n     */\n    this.mirror = null;\n\n    this[onMirrorCreated] = this[onMirrorCreated].bind(this);\n    this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);\n    this[onDragOver] = this[onDragOver].bind(this);\n  }\n\n  /**\n   * Attaches plugins event listeners\n   */\n  attach() {\n    this.draggable.on('mirror:created', this[onMirrorCreated]).on('drag:over', this[onDragOver]).on('drag:over:container', this[onDragOver]);\n  }\n\n  /**\n   * Detaches plugins event listeners\n   */\n  detach() {\n    this.draggable.off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]).off('drag:over', this[onDragOver]).off('drag:over:container', this[onDragOver]);\n  }\n\n  /**\n   * Returns options passed through draggable\n   * @return {Object}\n   */\n  getOptions() {\n    return this.draggable.options.resizeMirror || {};\n  }\n\n  /**\n   * Mirror created handler\n   * @param {MirrorCreatedEvent} mirrorEvent\n   * @private\n   */\n  [onMirrorCreated]({ mirror }) {\n    this.mirror = mirror;\n  }\n\n  /**\n   * Mirror destroy handler\n   * @param {MirrorDestroyEvent} mirrorEvent\n   * @private\n   */\n  [onMirrorDestroy]() {\n    this.mirror = null;\n  }\n\n  /**\n   * Drag over handler\n   * @param {DragOverEvent | DragOverContainer} dragEvent\n   * @private\n   */\n  [onDragOver](dragEvent) {\n    this[resize](dragEvent);\n  }\n\n  /**\n   * Resize function for\n   * @param {DragOverEvent | DragOverContainer} dragEvent\n   * @private\n   */\n  [resize]({ overContainer, over }) {\n    requestAnimationFrame(() => {\n      if (this.mirror.parentNode !== overContainer) {\n        overContainer.appendChild(this.mirror);\n      }\n\n      const overElement = over || this.draggable.getDraggableElementsForContainer(overContainer)[0];\n\n      if (!overElement) {\n        return;\n      }\n\n      (0, _utils.requestNextAnimationFrame)(() => {\n        const overRect = overElement.getBoundingClientRect();\n\n        if (this.lastHeight === overRect.height && this.lastWidth === overRect.width) {\n          return;\n        }\n\n        this.mirror.style.width = `${overRect.width}px`;\n        this.mirror.style.height = `${overRect.height}px`;\n\n        this.lastWidth = overRect.width;\n        this.lastHeight = overRect.height;\n      });\n    });\n  }\n}\nexports.default = ResizeMirror;\n\n/***/ }),\n/* 21 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _ResizeMirror = __webpack_require__(20);\n\nvar _ResizeMirror2 = _interopRequireDefault(_ResizeMirror);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _ResizeMirror2.default;\nexports.defaultOptions = _ResizeMirror.defaultOptions;\n\n/***/ }),\n/* 22 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _AbstractPlugin = __webpack_require__(1);\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nvar _utils = __webpack_require__(2);\n\nvar _CollidableEvent = __webpack_require__(8);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragMove = Symbol('onDragMove');\nconst onDragStop = Symbol('onDragStop');\nconst onRequestAnimationFrame = Symbol('onRequestAnimationFrame');\n\n/**\n * Collidable plugin which detects colliding elements while dragging\n * @class Collidable\n * @module Collidable\n * @extends AbstractPlugin\n */\nclass Collidable extends _AbstractPlugin2.default {\n  /**\n   * Collidable constructor.\n   * @constructs Collidable\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * Keeps track of currently colliding elements\n     * @property {HTMLElement|null} currentlyCollidingElement\n     * @type {HTMLElement|null}\n     */\n    this.currentlyCollidingElement = null;\n\n    /**\n     * Keeps track of currently colliding elements\n     * @property {HTMLElement|null} lastCollidingElement\n     * @type {HTMLElement|null}\n     */\n    this.lastCollidingElement = null;\n\n    /**\n     * Animation frame for finding colliding elements\n     * @property {Number|null} currentAnimationFrame\n     * @type {Number|null}\n     */\n    this.currentAnimationFrame = null;\n\n    this[onDragMove] = this[onDragMove].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n    this[onRequestAnimationFrame] = this[onRequestAnimationFrame].bind(this);\n  }\n\n  /**\n   * Attaches plugins event listeners\n   */\n  attach() {\n    this.draggable.on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Detaches plugins event listeners\n   */\n  detach() {\n    this.draggable.off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Returns current collidables based on `collidables` option\n   * @return {HTMLElement[]}\n   */\n  getCollidables() {\n    const collidables = this.draggable.options.collidables;\n\n    if (typeof collidables === 'string') {\n      return Array.prototype.slice.call(document.querySelectorAll(collidables));\n    } else if (collidables instanceof NodeList || collidables instanceof Array) {\n      return Array.prototype.slice.call(collidables);\n    } else if (collidables instanceof HTMLElement) {\n      return [collidables];\n    } else if (typeof collidables === 'function') {\n      return collidables();\n    } else {\n      return [];\n    }\n  }\n\n  /**\n   * Drag move handler\n   * @private\n   * @param {DragMoveEvent} event - Drag move event\n   */\n  [onDragMove](event) {\n    const target = event.sensorEvent.target;\n\n    this.currentAnimationFrame = requestAnimationFrame(this[onRequestAnimationFrame](target));\n\n    if (this.currentlyCollidingElement) {\n      event.cancel();\n    }\n\n    const collidableInEvent = new _CollidableEvent.CollidableInEvent({\n      dragEvent: event,\n      collidingElement: this.currentlyCollidingElement\n    });\n\n    const collidableOutEvent = new _CollidableEvent.CollidableOutEvent({\n      dragEvent: event,\n      collidingElement: this.lastCollidingElement\n    });\n\n    const enteringCollidable = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement);\n    const leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);\n\n    if (enteringCollidable) {\n      if (this.lastCollidingElement) {\n        this.draggable.trigger(collidableOutEvent);\n      }\n\n      this.draggable.trigger(collidableInEvent);\n    } else if (leavingCollidable) {\n      this.draggable.trigger(collidableOutEvent);\n    }\n\n    this.lastCollidingElement = this.currentlyCollidingElement;\n  }\n\n  /**\n   * Drag stop handler\n   * @private\n   * @param {DragStopEvent} event - Drag stop event\n   */\n  [onDragStop](event) {\n    const lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;\n    const collidableOutEvent = new _CollidableEvent.CollidableOutEvent({\n      dragEvent: event,\n      collidingElement: lastCollidingElement\n    });\n\n    if (lastCollidingElement) {\n      this.draggable.trigger(collidableOutEvent);\n    }\n\n    this.lastCollidingElement = null;\n    this.currentlyCollidingElement = null;\n  }\n\n  /**\n   * Animation frame function\n   * @private\n   * @param {HTMLElement} target - Current move target\n   * @return {Function}\n   */\n  [onRequestAnimationFrame](target) {\n    return () => {\n      const collidables = this.getCollidables();\n      this.currentlyCollidingElement = (0, _utils.closest)(target, element => collidables.includes(element));\n    };\n  }\n}\nexports.default = Collidable;\n\n/***/ }),\n/* 23 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CollidableOutEvent = exports.CollidableInEvent = exports.CollidableEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(0);\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base collidable event\n * @class CollidableEvent\n * @module CollidableEvent\n * @extends AbstractEvent\n */\nclass CollidableEvent extends _AbstractEvent2.default {\n\n  /**\n   * Drag event that triggered this colliable event\n   * @property dragEvent\n   * @type {DragEvent}\n   * @readonly\n   */\n  get dragEvent() {\n    return this.data.dragEvent;\n  }\n}\n\nexports.CollidableEvent = CollidableEvent; /**\n                                            * Collidable in event\n                                            * @class CollidableInEvent\n                                            * @module CollidableInEvent\n                                            * @extends CollidableEvent\n                                            */\n\nCollidableEvent.type = 'collidable';\nclass CollidableInEvent extends CollidableEvent {\n\n  /**\n   * Element you are currently colliding with\n   * @property collidingElement\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get collidingElement() {\n    return this.data.collidingElement;\n  }\n}\n\nexports.CollidableInEvent = CollidableInEvent; /**\n                                                * Collidable out event\n                                                * @class CollidableOutEvent\n                                                * @module CollidableOutEvent\n                                                * @extends CollidableEvent\n                                                */\n\nCollidableInEvent.type = 'collidable:in';\nclass CollidableOutEvent extends CollidableEvent {\n\n  /**\n   * Element you were previously colliding with\n   * @property collidingElement\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get collidingElement() {\n    return this.data.collidingElement;\n  }\n}\nexports.CollidableOutEvent = CollidableOutEvent;\nCollidableOutEvent.type = 'collidable:out';\n\n/***/ }),\n/* 24 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _CollidableEvent = __webpack_require__(8);\n\nObject.keys(_CollidableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _CollidableEvent[key];\n    }\n  });\n});\n\nvar _Collidable = __webpack_require__(22);\n\nvar _Collidable2 = _interopRequireDefault(_Collidable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Collidable2.default;\n\n/***/ }),\n/* 25 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Collidable = __webpack_require__(24);\n\nObject.defineProperty(exports, 'Collidable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Collidable).default;\n  }\n});\n\nvar _ResizeMirror = __webpack_require__(21);\n\nObject.defineProperty(exports, 'ResizeMirror', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_ResizeMirror).default;\n  }\n});\nObject.defineProperty(exports, 'defaultResizeMirrorOptions', {\n  enumerable: true,\n  get: function () {\n    return _ResizeMirror.defaultOptions;\n  }\n});\n\nvar _Snappable = __webpack_require__(19);\n\nObject.defineProperty(exports, 'Snappable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Snappable).default;\n  }\n});\n\nvar _SwapAnimation = __webpack_require__(16);\n\nObject.defineProperty(exports, 'SwapAnimation', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_SwapAnimation).default;\n  }\n});\nObject.defineProperty(exports, 'defaultSwapAnimationOptions', {\n  enumerable: true,\n  get: function () {\n    return _SwapAnimation.defaultOptions;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/***/ }),\n/* 26 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _Draggable = __webpack_require__(5);\n\nvar _Draggable2 = _interopRequireDefault(_Draggable);\n\nvar _SortableEvent = __webpack_require__(9);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragStart = Symbol('onDragStart');\nconst onDragOverContainer = Symbol('onDragOverContainer');\nconst onDragOver = Symbol('onDragOver');\nconst onDragStop = Symbol('onDragStop');\n\n/**\n * Returns announcement message when a Draggable element has been sorted with another Draggable element\n * or moved into a new container\n * @param {SortableSortedEvent} sortableEvent\n * @return {String}\n */\nfunction onSortableSortedDefaultAnnouncement({ dragEvent }) {\n  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'sortable element';\n\n  if (dragEvent.over) {\n    const overText = dragEvent.over.textContent.trim() || dragEvent.over.id || 'sortable element';\n    const isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;\n\n    if (isFollowing) {\n      return `Placed ${sourceText} after ${overText}`;\n    } else {\n      return `Placed ${sourceText} before ${overText}`;\n    }\n  } else {\n    // need to figure out how to compute container name\n    return `Placed ${sourceText} into a different container`;\n  }\n}\n\n/**\n * @const {Object} defaultAnnouncements\n * @const {Function} defaultAnnouncements['sortable:sorted']\n */\nconst defaultAnnouncements = {\n  'sortable:sorted': onSortableSortedDefaultAnnouncement\n};\n\n/**\n * Sortable is built on top of Draggable and allows sorting of draggable elements. Sortable will keep\n * track of the original index and emits the new index as you drag over draggable elements.\n * @class Sortable\n * @module Sortable\n * @extends Draggable\n */\nclass Sortable extends _Draggable2.default {\n  /**\n   * Sortable constructor.\n   * @constructs Sortable\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Sortable containers\n   * @param {Object} options - Options for Sortable\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, _extends({}, options, {\n      announcements: _extends({}, defaultAnnouncements, options.announcements || {})\n    }));\n\n    /**\n     * start index of source on drag start\n     * @property startIndex\n     * @type {Number}\n     */\n    this.startIndex = null;\n\n    /**\n     * start container on drag start\n     * @property startContainer\n     * @type {HTMLElement}\n     * @default null\n     */\n    this.startContainer = null;\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragOverContainer] = this[onDragOverContainer].bind(this);\n    this[onDragOver] = this[onDragOver].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n\n    this.on('drag:start', this[onDragStart]).on('drag:over:container', this[onDragOverContainer]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Destroys Sortable instance.\n   */\n  destroy() {\n    super.destroy();\n\n    this.off('drag:start', this[onDragStart]).off('drag:over:container', this[onDragOverContainer]).off('drag:over', this[onDragOver]).off('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Returns true index of element within its container during drag operation, i.e. excluding mirror and original source\n   * @param {HTMLElement} element - An element\n   * @return {Number}\n   */\n  index(element) {\n    return this.getDraggableElementsForContainer(element.parentNode).indexOf(element);\n  }\n\n  /**\n   * Drag start handler\n   * @private\n   * @param {DragStartEvent} event - Drag start event\n   */\n  [onDragStart](event) {\n    this.startContainer = event.source.parentNode;\n    this.startIndex = this.index(event.source);\n\n    const sortableStartEvent = new _SortableEvent.SortableStartEvent({\n      dragEvent: event,\n      startIndex: this.startIndex,\n      startContainer: this.startContainer\n    });\n\n    this.trigger(sortableStartEvent);\n\n    if (sortableStartEvent.canceled()) {\n      event.cancel();\n    }\n  }\n\n  /**\n   * Drag over container handler\n   * @private\n   * @param {DragOverContainerEvent} event - Drag over container event\n   */\n  [onDragOverContainer](event) {\n    if (event.canceled()) {\n      return;\n    }\n\n    const { source, over, overContainer } = event;\n    const oldIndex = this.index(source);\n\n    const sortableSortEvent = new _SortableEvent.SortableSortEvent({\n      dragEvent: event,\n      currentIndex: oldIndex,\n      source,\n      over\n    });\n\n    this.trigger(sortableSortEvent);\n\n    if (sortableSortEvent.canceled()) {\n      return;\n    }\n\n    const children = this.getDraggableElementsForContainer(overContainer);\n    const moves = move({ source, over, overContainer, children });\n\n    if (!moves) {\n      return;\n    }\n\n    const { oldContainer, newContainer } = moves;\n    const newIndex = this.index(event.source);\n\n    const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({\n      dragEvent: event,\n      oldIndex,\n      newIndex,\n      oldContainer,\n      newContainer\n    });\n\n    this.trigger(sortableSortedEvent);\n  }\n\n  /**\n   * Drag over handler\n   * @private\n   * @param {DragOverEvent} event - Drag over event\n   */\n  [onDragOver](event) {\n    if (event.over === event.originalSource || event.over === event.source) {\n      return;\n    }\n\n    const { source, over, overContainer } = event;\n    const oldIndex = this.index(source);\n\n    const sortableSortEvent = new _SortableEvent.SortableSortEvent({\n      dragEvent: event,\n      currentIndex: oldIndex,\n      source,\n      over\n    });\n\n    this.trigger(sortableSortEvent);\n\n    if (sortableSortEvent.canceled()) {\n      return;\n    }\n\n    const children = this.getDraggableElementsForContainer(overContainer);\n    const moves = move({ source, over, overContainer, children });\n\n    if (!moves) {\n      return;\n    }\n\n    const { oldContainer, newContainer } = moves;\n    const newIndex = this.index(source);\n\n    const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({\n      dragEvent: event,\n      oldIndex,\n      newIndex,\n      oldContainer,\n      newContainer\n    });\n\n    this.trigger(sortableSortedEvent);\n  }\n\n  /**\n   * Drag stop handler\n   * @private\n   * @param {DragStopEvent} event - Drag stop event\n   */\n  [onDragStop](event) {\n    const sortableStopEvent = new _SortableEvent.SortableStopEvent({\n      dragEvent: event,\n      oldIndex: this.startIndex,\n      newIndex: this.index(event.source),\n      oldContainer: this.startContainer,\n      newContainer: event.source.parentNode\n    });\n\n    this.trigger(sortableStopEvent);\n\n    this.startIndex = null;\n    this.startContainer = null;\n  }\n}\n\nexports.default = Sortable;\nfunction index(element) {\n  return Array.prototype.indexOf.call(element.parentNode.children, element);\n}\n\nfunction move({ source, over, overContainer, children }) {\n  const emptyOverContainer = !children.length;\n  const differentContainer = source.parentNode !== overContainer;\n  const sameContainer = over && !differentContainer;\n\n  if (emptyOverContainer) {\n    return moveInsideEmptyContainer(source, overContainer);\n  } else if (sameContainer) {\n    return moveWithinContainer(source, over);\n  } else if (differentContainer) {\n    return moveOutsideContainer(source, over, overContainer);\n  } else {\n    return null;\n  }\n}\n\nfunction moveInsideEmptyContainer(source, overContainer) {\n  const oldContainer = source.parentNode;\n\n  overContainer.appendChild(source);\n\n  return { oldContainer, newContainer: overContainer };\n}\n\nfunction moveWithinContainer(source, over) {\n  const oldIndex = index(source);\n  const newIndex = index(over);\n\n  if (oldIndex < newIndex) {\n    source.parentNode.insertBefore(source, over.nextElementSibling);\n  } else {\n    source.parentNode.insertBefore(source, over);\n  }\n\n  return { oldContainer: source.parentNode, newContainer: source.parentNode };\n}\n\nfunction moveOutsideContainer(source, over, overContainer) {\n  const oldContainer = source.parentNode;\n\n  if (over) {\n    over.parentNode.insertBefore(source, over);\n  } else {\n    // need to figure out proper position\n    overContainer.appendChild(source);\n  }\n\n  return { oldContainer, newContainer: source.parentNode };\n}\n\n/***/ }),\n/* 27 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SortableStopEvent = exports.SortableSortedEvent = exports.SortableSortEvent = exports.SortableStartEvent = exports.SortableEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(0);\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base sortable event\n * @class SortableEvent\n * @module SortableEvent\n * @extends AbstractEvent\n */\nclass SortableEvent extends _AbstractEvent2.default {\n\n  /**\n   * Original drag event that triggered this sortable event\n   * @property dragEvent\n   * @type {DragEvent}\n   * @readonly\n   */\n  get dragEvent() {\n    return this.data.dragEvent;\n  }\n}\n\nexports.SortableEvent = SortableEvent; /**\n                                        * Sortable start event\n                                        * @class SortableStartEvent\n                                        * @module SortableStartEvent\n                                        * @extends SortableEvent\n                                        */\n\nSortableEvent.type = 'sortable';\nclass SortableStartEvent extends SortableEvent {\n\n  /**\n   * Start index of source on sortable start\n   * @property startIndex\n   * @type {Number}\n   * @readonly\n   */\n  get startIndex() {\n    return this.data.startIndex;\n  }\n\n  /**\n   * Start container on sortable start\n   * @property startContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get startContainer() {\n    return this.data.startContainer;\n  }\n}\n\nexports.SortableStartEvent = SortableStartEvent; /**\n                                                  * Sortable sort event\n                                                  * @class SortableSortEvent\n                                                  * @module SortableSortEvent\n                                                  * @extends SortableEvent\n                                                  */\n\nSortableStartEvent.type = 'sortable:start';\nSortableStartEvent.cancelable = true;\nclass SortableSortEvent extends SortableEvent {\n\n  /**\n   * Index of current draggable element\n   * @property currentIndex\n   * @type {Number}\n   * @readonly\n   */\n  get currentIndex() {\n    return this.data.currentIndex;\n  }\n\n  /**\n   * Draggable element you are hovering over\n   * @property over\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get over() {\n    return this.data.oldIndex;\n  }\n\n  /**\n   * Draggable container element you are hovering over\n   * @property overContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get overContainer() {\n    return this.data.newIndex;\n  }\n}\n\nexports.SortableSortEvent = SortableSortEvent; /**\n                                                * Sortable sorted event\n                                                * @class SortableSortedEvent\n                                                * @module SortableSortedEvent\n                                                * @extends SortableEvent\n                                                */\n\nSortableSortEvent.type = 'sortable:sort';\nSortableSortEvent.cancelable = true;\nclass SortableSortedEvent extends SortableEvent {\n\n  /**\n   * Index of last sorted event\n   * @property oldIndex\n   * @type {Number}\n   * @readonly\n   */\n  get oldIndex() {\n    return this.data.oldIndex;\n  }\n\n  /**\n   * New index of this sorted event\n   * @property newIndex\n   * @type {Number}\n   * @readonly\n   */\n  get newIndex() {\n    return this.data.newIndex;\n  }\n\n  /**\n   * Old container of draggable element\n   * @property oldContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get oldContainer() {\n    return this.data.oldContainer;\n  }\n\n  /**\n   * New container of draggable element\n   * @property newContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get newContainer() {\n    return this.data.newContainer;\n  }\n}\n\nexports.SortableSortedEvent = SortableSortedEvent; /**\n                                                    * Sortable stop event\n                                                    * @class SortableStopEvent\n                                                    * @module SortableStopEvent\n                                                    * @extends SortableEvent\n                                                    */\n\nSortableSortedEvent.type = 'sortable:sorted';\nclass SortableStopEvent extends SortableEvent {\n\n  /**\n   * Original index on sortable start\n   * @property oldIndex\n   * @type {Number}\n   * @readonly\n   */\n  get oldIndex() {\n    return this.data.oldIndex;\n  }\n\n  /**\n   * New index of draggable element\n   * @property newIndex\n   * @type {Number}\n   * @readonly\n   */\n  get newIndex() {\n    return this.data.newIndex;\n  }\n\n  /**\n   * Original container of draggable element\n   * @property oldContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get oldContainer() {\n    return this.data.oldContainer;\n  }\n\n  /**\n   * New container of draggable element\n   * @property newContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get newContainer() {\n    return this.data.newContainer;\n  }\n}\nexports.SortableStopEvent = SortableStopEvent;\nSortableStopEvent.type = 'sortable:stop';\n\n/***/ }),\n/* 28 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SortableEvent = __webpack_require__(9);\n\nObject.keys(_SortableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SortableEvent[key];\n    }\n  });\n});\n\nvar _Sortable = __webpack_require__(26);\n\nvar _Sortable2 = _interopRequireDefault(_Sortable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Sortable2.default;\n\n/***/ }),\n/* 29 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _Draggable = __webpack_require__(5);\n\nvar _Draggable2 = _interopRequireDefault(_Draggable);\n\nvar _SwappableEvent = __webpack_require__(10);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragStart = Symbol('onDragStart');\nconst onDragOver = Symbol('onDragOver');\nconst onDragStop = Symbol('onDragStop');\n\n/**\n * Returns an announcement message when the Draggable element is swapped with another draggable element\n * @param {SwappableSwappedEvent} swappableEvent\n * @return {String}\n */\nfunction onSwappableSwappedDefaultAnnouncement({ dragEvent, swappedElement }) {\n  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'swappable element';\n  const overText = swappedElement.textContent.trim() || swappedElement.id || 'swappable element';\n\n  return `Swapped ${sourceText} with ${overText}`;\n}\n\n/**\n * @const {Object} defaultAnnouncements\n * @const {Function} defaultAnnouncements['swappabled:swapped']\n */\nconst defaultAnnouncements = {\n  'swappabled:swapped': onSwappableSwappedDefaultAnnouncement\n};\n\n/**\n * Swappable is built on top of Draggable and allows swapping of draggable elements.\n * Order is irrelevant to Swappable.\n * @class Swappable\n * @module Swappable\n * @extends Draggable\n */\nclass Swappable extends _Draggable2.default {\n  /**\n   * Swappable constructor.\n   * @constructs Swappable\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Swappable containers\n   * @param {Object} options - Options for Swappable\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, _extends({}, options, {\n      announcements: _extends({}, defaultAnnouncements, options.announcements || {})\n    }));\n\n    /**\n     * Last draggable element that was dragged over\n     * @property lastOver\n     * @type {HTMLElement}\n     */\n    this.lastOver = null;\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragOver] = this[onDragOver].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n\n    this.on('drag:start', this[onDragStart]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Destroys Swappable instance.\n   */\n  destroy() {\n    super.destroy();\n\n    this.off('drag:start', this._onDragStart).off('drag:over', this._onDragOver).off('drag:stop', this._onDragStop);\n  }\n\n  /**\n   * Drag start handler\n   * @private\n   * @param {DragStartEvent} event - Drag start event\n   */\n  [onDragStart](event) {\n    const swappableStartEvent = new _SwappableEvent.SwappableStartEvent({\n      dragEvent: event\n    });\n\n    this.trigger(swappableStartEvent);\n\n    if (swappableStartEvent.canceled()) {\n      event.cancel();\n    }\n  }\n\n  /**\n   * Drag over handler\n   * @private\n   * @param {DragOverEvent} event - Drag over event\n   */\n  [onDragOver](event) {\n    if (event.over === event.originalSource || event.over === event.source || event.canceled()) {\n      return;\n    }\n\n    const swappableSwapEvent = new _SwappableEvent.SwappableSwapEvent({\n      dragEvent: event,\n      over: event.over,\n      overContainer: event.overContainer\n    });\n\n    this.trigger(swappableSwapEvent);\n\n    if (swappableSwapEvent.canceled()) {\n      return;\n    }\n\n    // swap originally swapped element back\n    if (this.lastOver && this.lastOver !== event.over) {\n      swap(this.lastOver, event.source);\n    }\n\n    if (this.lastOver === event.over) {\n      this.lastOver = null;\n    } else {\n      this.lastOver = event.over;\n    }\n\n    swap(event.source, event.over);\n\n    const swappableSwappedEvent = new _SwappableEvent.SwappableSwappedEvent({\n      dragEvent: event,\n      swappedElement: event.over\n    });\n\n    this.trigger(swappableSwappedEvent);\n  }\n\n  /**\n   * Drag stop handler\n   * @private\n   * @param {DragStopEvent} event - Drag stop event\n   */\n  [onDragStop](event) {\n    const swappableStopEvent = new _SwappableEvent.SwappableStopEvent({\n      dragEvent: event\n    });\n\n    this.trigger(swappableStopEvent);\n    this.lastOver = null;\n  }\n}\n\nexports.default = Swappable;\nfunction withTempElement(callback) {\n  const tmpElement = document.createElement('div');\n  callback(tmpElement);\n  tmpElement.parentNode.removeChild(tmpElement);\n}\n\nfunction swap(source, over) {\n  const overParent = over.parentNode;\n  const sourceParent = source.parentNode;\n\n  withTempElement(tmpElement => {\n    sourceParent.insertBefore(tmpElement, source);\n    overParent.insertBefore(source, over);\n    sourceParent.insertBefore(over, tmpElement);\n  });\n}\n\n/***/ }),\n/* 30 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SwappableStopEvent = exports.SwappableSwappedEvent = exports.SwappableSwapEvent = exports.SwappableStartEvent = exports.SwappableEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(0);\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base swappable event\n * @class SwappableEvent\n * @module SwappableEvent\n * @extends AbstractEvent\n */\nclass SwappableEvent extends _AbstractEvent2.default {\n\n  /**\n   * Original drag event that triggered this swappable event\n   * @property dragEvent\n   * @type {DragEvent}\n   * @readonly\n   */\n  get dragEvent() {\n    return this.data.dragEvent;\n  }\n}\n\nexports.SwappableEvent = SwappableEvent; /**\n                                          * Swappable start event\n                                          * @class SwappableStartEvent\n                                          * @module SwappableStartEvent\n                                          * @extends SwappableEvent\n                                          */\n\nSwappableEvent.type = 'swappable';\nclass SwappableStartEvent extends SwappableEvent {}\n\nexports.SwappableStartEvent = SwappableStartEvent; /**\n                                                    * Swappable swap event\n                                                    * @class SwappableSwapEvent\n                                                    * @module SwappableSwapEvent\n                                                    * @extends SwappableEvent\n                                                    */\n\nSwappableStartEvent.type = 'swappable:start';\nSwappableStartEvent.cancelable = true;\nclass SwappableSwapEvent extends SwappableEvent {\n\n  /**\n   * Draggable element you are over\n   * @property over\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get over() {\n    return this.data.over;\n  }\n\n  /**\n   * Draggable container you are over\n   * @property overContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get overContainer() {\n    return this.data.overContainer;\n  }\n}\n\nexports.SwappableSwapEvent = SwappableSwapEvent; /**\n                                                  * Swappable swapped event\n                                                  * @class SwappableSwappedEvent\n                                                  * @module SwappableSwappedEvent\n                                                  * @extends SwappableEvent\n                                                  */\n\nSwappableSwapEvent.type = 'swappable:swap';\nSwappableSwapEvent.cancelable = true;\nclass SwappableSwappedEvent extends SwappableEvent {\n\n  /**\n   * The draggable element that you swapped with\n   * @property swappedElement\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get swappedElement() {\n    return this.data.swappedElement;\n  }\n}\n\nexports.SwappableSwappedEvent = SwappableSwappedEvent; /**\n                                                        * Swappable stop event\n                                                        * @class SwappableStopEvent\n                                                        * @module SwappableStopEvent\n                                                        * @extends SwappableEvent\n                                                        */\n\nSwappableSwappedEvent.type = 'swappable:swapped';\nclass SwappableStopEvent extends SwappableEvent {}\nexports.SwappableStopEvent = SwappableStopEvent;\nSwappableStopEvent.type = 'swappable:stop';\n\n/***/ }),\n/* 31 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SwappableEvent = __webpack_require__(10);\n\nObject.keys(_SwappableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SwappableEvent[key];\n    }\n  });\n});\n\nvar _Swappable = __webpack_require__(29);\n\nvar _Swappable2 = _interopRequireDefault(_Swappable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Swappable2.default;\n\n/***/ }),\n/* 32 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _utils = __webpack_require__(2);\n\nvar _Draggable = __webpack_require__(5);\n\nvar _Draggable2 = _interopRequireDefault(_Draggable);\n\nvar _DroppableEvent = __webpack_require__(11);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragStart = Symbol('onDragStart');\nconst onDragMove = Symbol('onDragMove');\nconst onDragStop = Symbol('onDragStop');\nconst dropInDropzone = Symbol('dropInDropZone');\nconst returnToOriginalDropzone = Symbol('returnToOriginalDropzone');\nconst closestDropzone = Symbol('closestDropzone');\nconst getDropzones = Symbol('getDropzones');\n\n/**\n * Returns an announcement message when the Draggable element is dropped into a dropzone element\n * @param {DroppableDroppedEvent} droppableEvent\n * @return {String}\n */\nfunction onDroppableDroppedDefaultAnnouncement({ dragEvent, dropzone }) {\n  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';\n  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';\n\n  return `Dropped ${sourceText} into ${dropzoneText}`;\n}\n\n/**\n * Returns an announcement message when the Draggable element has returned to its original dropzone element\n * @param {DroppableReturnedEvent} droppableEvent\n * @return {String}\n */\nfunction onDroppableReturnedDefaultAnnouncement({ dragEvent, dropzone }) {\n  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';\n  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';\n\n  return `Returned ${sourceText} from ${dropzoneText}`;\n}\n\n/**\n * @const {Object} defaultAnnouncements\n * @const {Function} defaultAnnouncements['droppable:dropped']\n * @const {Function} defaultAnnouncements['droppable:returned']\n */\nconst defaultAnnouncements = {\n  'droppable:dropped': onDroppableDroppedDefaultAnnouncement,\n  'droppable:returned': onDroppableReturnedDefaultAnnouncement\n};\n\nconst defaultClasses = {\n  'droppable:active': 'draggable-dropzone--active',\n  'droppable:occupied': 'draggable-dropzone--occupied'\n};\n\nconst defaultOptions = {\n  dropzone: '.draggable-droppable'\n};\n\n/**\n * Droppable is built on top of Draggable and allows dropping draggable elements\n * into dropzone element\n * @class Droppable\n * @module Droppable\n * @extends Draggable\n */\nclass Droppable extends _Draggable2.default {\n  /**\n   * Droppable constructor.\n   * @constructs Droppable\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Droppable containers\n   * @param {Object} options - Options for Droppable\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, _extends({}, defaultOptions, options, {\n      classes: _extends({}, defaultClasses, options.classes || {}),\n      announcements: _extends({}, defaultAnnouncements, options.announcements || {})\n    }));\n\n    /**\n     * All dropzone elements on drag start\n     * @property dropzones\n     * @type {HTMLElement[]}\n     */\n    this.dropzones = null;\n\n    /**\n     * Last dropzone element that the source was dropped into\n     * @property lastDropzone\n     * @type {HTMLElement}\n     */\n    this.lastDropzone = null;\n\n    /**\n     * Initial dropzone element that the source was drag from\n     * @property initialDropzone\n     * @type {HTMLElement}\n     */\n    this.initialDropzone = null;\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragMove] = this[onDragMove].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n\n    this.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Destroys Droppable instance.\n   */\n  destroy() {\n    super.destroy();\n\n    this.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Drag start handler\n   * @private\n   * @param {DragStartEvent} event - Drag start event\n   */\n  [onDragStart](event) {\n    if (event.canceled()) {\n      return;\n    }\n\n    this.dropzones = [...this[getDropzones]()];\n    const dropzone = (0, _utils.closest)(event.sensorEvent.target, this.options.dropzone);\n\n    if (!dropzone) {\n      event.cancel();\n      return;\n    }\n\n    const droppableStartEvent = new _DroppableEvent.DroppableStartEvent({\n      dragEvent: event,\n      dropzone\n    });\n\n    this.trigger(droppableStartEvent);\n\n    if (droppableStartEvent.canceled()) {\n      event.cancel();\n      return;\n    }\n\n    this.initialDropzone = dropzone;\n\n    for (const dropzoneElement of this.dropzones) {\n      if (dropzoneElement.classList.contains(this.getClassNameFor('droppable:occupied'))) {\n        continue;\n      }\n\n      dropzoneElement.classList.add(this.getClassNameFor('droppable:active'));\n    }\n  }\n\n  /**\n   * Drag move handler\n   * @private\n   * @param {DragMoveEvent} event - Drag move event\n   */\n  [onDragMove](event) {\n    if (event.canceled()) {\n      return;\n    }\n\n    const dropzone = this[closestDropzone](event.sensorEvent.target);\n    const overEmptyDropzone = dropzone && !dropzone.classList.contains(this.getClassNameFor('droppable:occupied'));\n\n    if (overEmptyDropzone && this[dropInDropzone](event, dropzone)) {\n      this.lastDropzone = dropzone;\n    } else if ((!dropzone || dropzone === this.initialDropzone) && this.lastDropzone) {\n      this[returnToOriginalDropzone](event);\n      this.lastDropzone = null;\n    }\n  }\n\n  /**\n   * Drag stop handler\n   * @private\n   * @param {DragStopEvent} event - Drag stop event\n   */\n  [onDragStop](event) {\n    const droppableStopEvent = new _DroppableEvent.DroppableStopEvent({\n      dragEvent: event,\n      dropzone: this.lastDropzone || this.initialDropzone\n    });\n\n    this.trigger(droppableStopEvent);\n\n    const occupiedClass = this.getClassNameFor('droppable:occupied');\n\n    for (const dropzone of this.dropzones) {\n      dropzone.classList.remove(this.getClassNameFor('droppable:active'));\n    }\n\n    if (this.lastDropzone && this.lastDropzone !== this.initialDropzone) {\n      this.initialDropzone.classList.remove(occupiedClass);\n    }\n\n    this.dropzones = null;\n    this.lastDropzone = null;\n    this.initialDropzone = null;\n  }\n\n  /**\n   * Drops a draggable element into a dropzone element\n   * @private\n   * @param {DragMoveEvent} event - Drag move event\n   * @param {HTMLElement} dropzone - Dropzone element to drop draggable into\n   */\n  [dropInDropzone](event, dropzone) {\n    const droppableDroppedEvent = new _DroppableEvent.DroppableDroppedEvent({\n      dragEvent: event,\n      dropzone\n    });\n\n    this.trigger(droppableDroppedEvent);\n\n    if (droppableDroppedEvent.canceled()) {\n      return false;\n    }\n\n    const occupiedClass = this.getClassNameFor('droppable:occupied');\n\n    if (this.lastDropzone) {\n      this.lastDropzone.classList.remove(occupiedClass);\n    }\n\n    dropzone.appendChild(event.source);\n    dropzone.classList.add(occupiedClass);\n\n    return true;\n  }\n\n  /**\n   * Moves the previously dropped element back into its original dropzone\n   * @private\n   * @param {DragMoveEvent} event - Drag move event\n   */\n  [returnToOriginalDropzone](event) {\n    const droppableReturnedEvent = new _DroppableEvent.DroppableReturnedEvent({\n      dragEvent: event,\n      dropzone: this.lastDropzone\n    });\n\n    this.trigger(droppableReturnedEvent);\n\n    if (droppableReturnedEvent.canceled()) {\n      return;\n    }\n\n    this.initialDropzone.appendChild(event.source);\n    this.lastDropzone.classList.remove(this.getClassNameFor('droppable:occupied'));\n  }\n\n  /**\n   * Returns closest dropzone element for even target\n   * @private\n   * @param {HTMLElement} target - Event target\n   * @return {HTMLElement|null}\n   */\n  [closestDropzone](target) {\n    if (!this.dropzones) {\n      return null;\n    }\n\n    return (0, _utils.closest)(target, this.dropzones);\n  }\n\n  /**\n   * Returns all current dropzone elements for this draggable instance\n   * @private\n   * @return {NodeList|HTMLElement[]|Array}\n   */\n  [getDropzones]() {\n    const dropzone = this.options.dropzone;\n\n    if (typeof dropzone === 'string') {\n      return document.querySelectorAll(dropzone);\n    } else if (dropzone instanceof NodeList || dropzone instanceof Array) {\n      return dropzone;\n    } else if (typeof dropzone === 'function') {\n      return dropzone();\n    } else {\n      return [];\n    }\n  }\n}\nexports.default = Droppable;\n\n/***/ }),\n/* 33 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.DroppableStopEvent = exports.DroppableReturnedEvent = exports.DroppableDroppedEvent = exports.DroppableStartEvent = exports.DroppableEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(0);\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base droppable event\n * @class DroppableEvent\n * @module DroppableEvent\n * @extends AbstractEvent\n */\nclass DroppableEvent extends _AbstractEvent2.default {\n\n  /**\n   * Original drag event that triggered this droppable event\n   * @property dragEvent\n   * @type {DragEvent}\n   * @readonly\n   */\n  get dragEvent() {\n    return this.data.dragEvent;\n  }\n}\n\nexports.DroppableEvent = DroppableEvent; /**\n                                          * Droppable start event\n                                          * @class DroppableStartEvent\n                                          * @module DroppableStartEvent\n                                          * @extends DroppableEvent\n                                          */\n\nDroppableEvent.type = 'droppable';\nclass DroppableStartEvent extends DroppableEvent {\n\n  /**\n   * The initial dropzone element of the currently dragging draggable element\n   * @property dropzone\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get dropzone() {\n    return this.data.dropzone;\n  }\n}\n\nexports.DroppableStartEvent = DroppableStartEvent; /**\n                                                    * Droppable dropped event\n                                                    * @class DroppableDroppedEvent\n                                                    * @module DroppableDroppedEvent\n                                                    * @extends DroppableEvent\n                                                    */\n\nDroppableStartEvent.type = 'droppable:start';\nDroppableStartEvent.cancelable = true;\nclass DroppableDroppedEvent extends DroppableEvent {\n\n  /**\n   * The dropzone element you dropped the draggable element into\n   * @property dropzone\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get dropzone() {\n    return this.data.dropzone;\n  }\n}\n\nexports.DroppableDroppedEvent = DroppableDroppedEvent; /**\n                                                        * Droppable returned event\n                                                        * @class DroppableReturnedEvent\n                                                        * @module DroppableReturnedEvent\n                                                        * @extends DroppableEvent\n                                                        */\n\nDroppableDroppedEvent.type = 'droppable:dropped';\nDroppableDroppedEvent.cancelable = true;\nclass DroppableReturnedEvent extends DroppableEvent {\n\n  /**\n   * The dropzone element you dragged away from\n   * @property dropzone\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get dropzone() {\n    return this.data.dropzone;\n  }\n}\n\nexports.DroppableReturnedEvent = DroppableReturnedEvent; /**\n                                                          * Droppable stop event\n                                                          * @class DroppableStopEvent\n                                                          * @module DroppableStopEvent\n                                                          * @extends DroppableEvent\n                                                          */\n\nDroppableReturnedEvent.type = 'droppable:returned';\nDroppableReturnedEvent.cancelable = true;\nclass DroppableStopEvent extends DroppableEvent {\n\n  /**\n   * The final dropzone element of the draggable element\n   * @property dropzone\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get dropzone() {\n    return this.data.dropzone;\n  }\n}\nexports.DroppableStopEvent = DroppableStopEvent;\nDroppableStopEvent.type = 'droppable:stop';\nDroppableStopEvent.cancelable = true;\n\n/***/ }),\n/* 34 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _DroppableEvent = __webpack_require__(11);\n\nObject.keys(_DroppableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _DroppableEvent[key];\n    }\n  });\n});\n\nvar _Droppable = __webpack_require__(32);\n\nvar _Droppable2 = _interopRequireDefault(_Droppable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Droppable2.default;\n\n/***/ }),\n/* 35 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * The Emitter is a simple emitter class that provides you with `on()`, `off()` and `trigger()` methods\n * @class Emitter\n * @module Emitter\n */\nclass Emitter {\n  constructor() {\n    this.callbacks = {};\n  }\n\n  /**\n   * Registers callbacks by event name\n   * @param {String} type\n   * @param {...Function} callbacks\n   */\n  on(type, ...callbacks) {\n    if (!this.callbacks[type]) {\n      this.callbacks[type] = [];\n    }\n\n    this.callbacks[type].push(...callbacks);\n\n    return this;\n  }\n\n  /**\n   * Unregisters callbacks by event name\n   * @param {String} type\n   * @param {Function} callback\n   */\n  off(type, callback) {\n    if (!this.callbacks[type]) {\n      return null;\n    }\n\n    const copy = this.callbacks[type].slice(0);\n\n    for (let i = 0; i < copy.length; i++) {\n      if (callback === copy[i]) {\n        this.callbacks[type].splice(i, 1);\n      }\n    }\n\n    return this;\n  }\n\n  /**\n   * Triggers event callbacks by event object\n   * @param {AbstractEvent} event\n   */\n  trigger(event) {\n    if (!this.callbacks[event.type]) {\n      return null;\n    }\n\n    const callbacks = [...this.callbacks[event.type]];\n    const caughtErrors = [];\n\n    for (let i = callbacks.length - 1; i >= 0; i--) {\n      const callback = callbacks[i];\n\n      try {\n        callback(event);\n      } catch (error) {\n        caughtErrors.push(error);\n      }\n    }\n\n    if (caughtErrors.length) {\n      /* eslint-disable no-console */\n      console.error(`Draggable caught errors while triggering '${event.type}'`, caughtErrors);\n      /* eslint-disable no-console */\n    }\n\n    return this;\n  }\n}\nexports.default = Emitter;\n\n/***/ }),\n/* 36 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Emitter = __webpack_require__(35);\n\nvar _Emitter2 = _interopRequireDefault(_Emitter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Emitter2.default;\n\n/***/ }),\n/* 37 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _utils = __webpack_require__(2);\n\nvar _Plugins = __webpack_require__(12);\n\nvar _Emitter = __webpack_require__(36);\n\nvar _Emitter2 = _interopRequireDefault(_Emitter);\n\nvar _Sensors = __webpack_require__(6);\n\nvar _DraggableEvent = __webpack_require__(13);\n\nvar _DragEvent = __webpack_require__(14);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragStart = Symbol('onDragStart');\nconst onDragMove = Symbol('onDragMove');\nconst onDragStop = Symbol('onDragStop');\nconst onDragPressure = Symbol('onDragPressure');\n\n/**\n * @const {Object} defaultAnnouncements\n * @const {Function} defaultAnnouncements['drag:start']\n * @const {Function} defaultAnnouncements['drag:stop']\n */\nconst defaultAnnouncements = {\n  'drag:start': event => `Picked up ${event.source.textContent.trim() || event.source.id || 'draggable element'}`,\n  'drag:stop': event => `Released ${event.source.textContent.trim() || event.source.id || 'draggable element'}`\n};\n\nconst defaultClasses = {\n  'container:dragging': 'draggable-container--is-dragging',\n  'source:dragging': 'draggable-source--is-dragging',\n  'source:placed': 'draggable-source--placed',\n  'container:placed': 'draggable-container--placed',\n  'body:dragging': 'draggable--is-dragging',\n  'draggable:over': 'draggable--over',\n  'container:over': 'draggable-container--over',\n  'source:original': 'draggable--original',\n  mirror: 'draggable-mirror'\n};\n\nconst defaultOptions = exports.defaultOptions = {\n  draggable: '.draggable-source',\n  handle: null,\n  delay: 100,\n  placedTimeout: 800,\n  plugins: [],\n  sensors: []\n};\n\n/**\n * This is the core draggable library that does the heavy lifting\n * @class Draggable\n * @module Draggable\n */\nclass Draggable {\n\n  /**\n   * Draggable constructor.\n   * @constructs Draggable\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Draggable containers\n   * @param {Object} options - Options for draggable\n   */\n  constructor(containers = [document.body], options = {}) {\n    /**\n     * Draggable containers\n     * @property containers\n     * @type {HTMLElement[]}\n     */\n    if (containers instanceof NodeList || containers instanceof Array) {\n      this.containers = [...containers];\n    } else if (containers instanceof HTMLElement) {\n      this.containers = [containers];\n    } else {\n      throw new Error('Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`');\n    }\n\n    this.options = _extends({}, defaultOptions, options, {\n      classes: _extends({}, defaultClasses, options.classes || {}),\n      announcements: _extends({}, defaultAnnouncements, options.announcements || {})\n    });\n\n    /**\n     * Draggables event emitter\n     * @property emitter\n     * @type {Emitter}\n     */\n    this.emitter = new _Emitter2.default();\n\n    /**\n     * Current drag state\n     * @property dragging\n     * @type {Boolean}\n     */\n    this.dragging = false;\n\n    /**\n     * Active plugins\n     * @property plugins\n     * @type {Plugin[]}\n     */\n    this.plugins = [];\n\n    /**\n     * Active sensors\n     * @property sensors\n     * @type {Sensor[]}\n     */\n    this.sensors = [];\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragMove] = this[onDragMove].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n    this[onDragPressure] = this[onDragPressure].bind(this);\n\n    document.addEventListener('drag:start', this[onDragStart], true);\n    document.addEventListener('drag:move', this[onDragMove], true);\n    document.addEventListener('drag:stop', this[onDragStop], true);\n    document.addEventListener('drag:pressure', this[onDragPressure], true);\n\n    const defaultPlugins = Object.values(Draggable.Plugins).map(Plugin => Plugin);\n    const defaultSensors = [_Sensors.MouseSensor, _Sensors.TouchSensor];\n\n    this.addPlugin(...[...defaultPlugins, ...this.options.plugins]);\n    this.addSensor(...[...defaultSensors, ...this.options.sensors]);\n\n    const draggableInitializedEvent = new _DraggableEvent.DraggableInitializedEvent({\n      draggable: this\n    });\n\n    this.on('mirror:created', ({ mirror }) => this.mirror = mirror);\n    this.on('mirror:destroy', () => this.mirror = null);\n\n    this.trigger(draggableInitializedEvent);\n  }\n\n  /**\n   * Destroys Draggable instance. This removes all internal event listeners and\n   * deactivates sensors and plugins\n   */\n\n  /**\n   * Default plugins draggable uses\n   * @static\n   * @property {Object} Plugins\n   * @property {Announcement} Plugins.Announcement\n   * @property {Focusable} Plugins.Focusable\n   * @property {Mirror} Plugins.Mirror\n   * @property {Scrollable} Plugins.Scrollable\n   * @type {Object}\n   */\n  destroy() {\n    document.removeEventListener('drag:start', this[onDragStart], true);\n    document.removeEventListener('drag:move', this[onDragMove], true);\n    document.removeEventListener('drag:stop', this[onDragStop], true);\n    document.removeEventListener('drag:pressure', this[onDragPressure], true);\n\n    const draggableDestroyEvent = new _DraggableEvent.DraggableDestroyEvent({\n      draggable: this\n    });\n\n    this.trigger(draggableDestroyEvent);\n\n    this.removePlugin(...this.plugins.map(plugin => plugin.constructor));\n    this.removeSensor(...this.sensors.map(sensor => sensor.constructor));\n  }\n\n  /**\n   * Adds plugin to this draggable instance. This will end up calling the attach method of the plugin\n   * @param {...typeof Plugin} plugins - Plugins that you want attached to draggable\n   * @return {Draggable}\n   * @example draggable.addPlugin(CustomA11yPlugin, CustomMirrorPlugin)\n   */\n  addPlugin(...plugins) {\n    const activePlugins = plugins.map(Plugin => new Plugin(this));\n\n    activePlugins.forEach(plugin => plugin.attach());\n    this.plugins = [...this.plugins, ...activePlugins];\n\n    return this;\n  }\n\n  /**\n   * Removes plugins that are already attached to this draggable instance. This will end up calling\n   * the detach method of the plugin\n   * @param {...typeof Plugin} plugins - Plugins that you want detached from draggable\n   * @return {Draggable}\n   * @example draggable.removePlugin(MirrorPlugin, CustomMirrorPlugin)\n   */\n  removePlugin(...plugins) {\n    const removedPlugins = this.plugins.filter(plugin => plugins.includes(plugin.constructor));\n\n    removedPlugins.forEach(plugin => plugin.detach());\n    this.plugins = this.plugins.filter(plugin => !plugins.includes(plugin.constructor));\n\n    return this;\n  }\n\n  /**\n   * Adds sensors to this draggable instance. This will end up calling the attach method of the sensor\n   * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable\n   * @return {Draggable}\n   * @example draggable.addSensor(ForceTouchSensor, CustomSensor)\n   */\n  addSensor(...sensors) {\n    const activeSensors = sensors.map(Sensor => new Sensor(this.containers, this.options));\n\n    activeSensors.forEach(sensor => sensor.attach());\n    this.sensors = [...this.sensors, ...activeSensors];\n\n    return this;\n  }\n\n  /**\n   * Removes sensors that are already attached to this draggable instance. This will end up calling\n   * the detach method of the sensor\n   * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable\n   * @return {Draggable}\n   * @example draggable.removeSensor(TouchSensor, DragSensor)\n   */\n  removeSensor(...sensors) {\n    const removedSensors = this.sensors.filter(sensor => sensors.includes(sensor.constructor));\n\n    removedSensors.forEach(sensor => sensor.detach());\n    this.sensors = this.sensors.filter(sensor => !sensors.includes(sensor.constructor));\n\n    return this;\n  }\n\n  /**\n   * Adds container to this draggable instance\n   * @param {...HTMLElement} containers - Containers you want to add to draggable\n   * @return {Draggable}\n   * @example draggable.addContainer(document.body)\n   */\n  addContainer(...containers) {\n    this.containers = [...this.containers, ...containers];\n    this.sensors.forEach(sensor => sensor.addContainer(...containers));\n    return this;\n  }\n\n  /**\n   * Removes container from this draggable instance\n   * @param {...HTMLElement} containers - Containers you want to remove from draggable\n   * @return {Draggable}\n   * @example draggable.removeContainer(document.body)\n   */\n  removeContainer(...containers) {\n    this.containers = this.containers.filter(container => !containers.includes(container));\n    this.sensors.forEach(sensor => sensor.removeContainer(...containers));\n    return this;\n  }\n\n  /**\n   * Adds listener for draggable events\n   * @param {String} type - Event name\n   * @param {...Function} callbacks - Event callbacks\n   * @return {Draggable}\n   * @example draggable.on('drag:start', (dragEvent) => dragEvent.cancel());\n   */\n  on(type, ...callbacks) {\n    this.emitter.on(type, ...callbacks);\n    return this;\n  }\n\n  /**\n   * Removes listener from draggable\n   * @param {String} type - Event name\n   * @param {Function} callback - Event callback\n   * @return {Draggable}\n   * @example draggable.off('drag:start', handlerFunction);\n   */\n  off(type, callback) {\n    this.emitter.off(type, callback);\n    return this;\n  }\n\n  /**\n   * Triggers draggable event\n   * @param {AbstractEvent} event - Event instance\n   * @return {Draggable}\n   * @example draggable.trigger(event);\n   */\n  trigger(event) {\n    this.emitter.trigger(event);\n    return this;\n  }\n\n  /**\n   * Returns class name for class identifier\n   * @param {String} name - Name of class identifier\n   * @return {String|null}\n   */\n  getClassNameFor(name) {\n    return this.options.classes[name];\n  }\n\n  /**\n   * Returns true if this draggable instance is currently dragging\n   * @return {Boolean}\n   */\n  isDragging() {\n    return Boolean(this.dragging);\n  }\n\n  /**\n   * Returns all draggable elements\n   * @return {HTMLElement[]}\n   */\n  getDraggableElements() {\n    return this.containers.reduce((current, container) => {\n      return [...current, ...this.getDraggableElementsForContainer(container)];\n    }, []);\n  }\n\n  /**\n   * Returns draggable elements for a given container, excluding the mirror and\n   * original source element if present\n   * @param {HTMLElement} container\n   * @return {HTMLElement[]}\n   */\n  getDraggableElementsForContainer(container) {\n    const allDraggableElements = container.querySelectorAll(this.options.draggable);\n\n    return [...allDraggableElements].filter(childElement => {\n      return childElement !== this.originalSource && childElement !== this.mirror;\n    });\n  }\n\n  /**\n   * Drag start handler\n   * @private\n   * @param {Event} event - DOM Drag event\n   */\n  [onDragStart](event) {\n    const sensorEvent = getSensorEvent(event);\n    const { target, container } = sensorEvent;\n\n    if (!this.containers.includes(container)) {\n      return;\n    }\n\n    if (this.options.handle && target && !(0, _utils.closest)(target, this.options.handle)) {\n      sensorEvent.cancel();\n      return;\n    }\n\n    // Find draggable source element\n    this.originalSource = (0, _utils.closest)(target, this.options.draggable);\n    this.sourceContainer = container;\n\n    if (!this.originalSource) {\n      sensorEvent.cancel();\n      return;\n    }\n\n    if (this.lastPlacedSource && this.lastPlacedContainer) {\n      clearTimeout(this.placedTimeoutID);\n      this.lastPlacedSource.classList.remove(this.getClassNameFor('source:placed'));\n      this.lastPlacedContainer.classList.remove(this.getClassNameFor('container:placed'));\n    }\n\n    this.source = this.originalSource.cloneNode(true);\n    this.originalSource.parentNode.insertBefore(this.source, this.originalSource);\n    this.originalSource.style.display = 'none';\n\n    const dragEvent = new _DragEvent.DragStartEvent({\n      source: this.source,\n      originalSource: this.originalSource,\n      sourceContainer: container,\n      sensorEvent\n    });\n\n    this.trigger(dragEvent);\n\n    this.dragging = !dragEvent.canceled();\n\n    if (dragEvent.canceled()) {\n      this.source.parentNode.removeChild(this.source);\n      this.originalSource.style.display = null;\n      return;\n    }\n\n    this.originalSource.classList.add(this.getClassNameFor('source:original'));\n    this.source.classList.add(this.getClassNameFor('source:dragging'));\n    this.sourceContainer.classList.add(this.getClassNameFor('container:dragging'));\n    document.body.classList.add(this.getClassNameFor('body:dragging'));\n    applyUserSelect(document.body, 'none');\n\n    requestAnimationFrame(() => {\n      const oldSensorEvent = getSensorEvent(event);\n      const newSensorEvent = oldSensorEvent.clone({ target: this.source });\n\n      this[onDragMove](_extends({}, event, {\n        detail: newSensorEvent\n      }));\n    });\n  }\n\n  /**\n   * Drag move handler\n   * @private\n   * @param {Event} event - DOM Drag event\n   */\n  [onDragMove](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const sensorEvent = getSensorEvent(event);\n    const { container } = sensorEvent;\n    let target = sensorEvent.target;\n\n    const dragMoveEvent = new _DragEvent.DragMoveEvent({\n      source: this.source,\n      originalSource: this.originalSource,\n      sourceContainer: container,\n      sensorEvent\n    });\n\n    this.trigger(dragMoveEvent);\n\n    if (dragMoveEvent.canceled()) {\n      sensorEvent.cancel();\n    }\n\n    target = (0, _utils.closest)(target, this.options.draggable);\n    const withinCorrectContainer = (0, _utils.closest)(sensorEvent.target, this.containers);\n    const overContainer = sensorEvent.overContainer || withinCorrectContainer;\n    const isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;\n    const isLeavingDraggable = this.currentOver && target !== this.currentOver;\n    const isOverContainer = overContainer && this.currentOverContainer !== overContainer;\n    const isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;\n\n    if (isLeavingDraggable) {\n      const dragOutEvent = new _DragEvent.DragOutEvent({\n        source: this.source,\n        originalSource: this.originalSource,\n        sourceContainer: container,\n        sensorEvent,\n        over: this.currentOver\n      });\n\n      this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));\n      this.currentOver = null;\n\n      this.trigger(dragOutEvent);\n    }\n\n    if (isLeavingContainer) {\n      const dragOutContainerEvent = new _DragEvent.DragOutContainerEvent({\n        source: this.source,\n        originalSource: this.originalSource,\n        sourceContainer: container,\n        sensorEvent,\n        overContainer: this.currentOverContainer\n      });\n\n      this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));\n      this.currentOverContainer = null;\n\n      this.trigger(dragOutContainerEvent);\n    }\n\n    if (isOverContainer) {\n      overContainer.classList.add(this.getClassNameFor('container:over'));\n\n      const dragOverContainerEvent = new _DragEvent.DragOverContainerEvent({\n        source: this.source,\n        originalSource: this.originalSource,\n        sourceContainer: container,\n        sensorEvent,\n        overContainer\n      });\n\n      this.currentOverContainer = overContainer;\n\n      this.trigger(dragOverContainerEvent);\n    }\n\n    if (isOverDraggable) {\n      target.classList.add(this.getClassNameFor('draggable:over'));\n\n      const dragOverEvent = new _DragEvent.DragOverEvent({\n        source: this.source,\n        originalSource: this.originalSource,\n        sourceContainer: container,\n        sensorEvent,\n        overContainer,\n        over: target\n      });\n\n      this.currentOver = target;\n\n      this.trigger(dragOverEvent);\n    }\n  }\n\n  /**\n   * Drag stop handler\n   * @private\n   * @param {Event} event - DOM Drag event\n   */\n  [onDragStop](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    this.dragging = false;\n\n    const dragStopEvent = new _DragEvent.DragStopEvent({\n      source: this.source,\n      originalSource: this.originalSource,\n      sensorEvent: event.sensorEvent,\n      sourceContainer: this.sourceContainer\n    });\n\n    this.trigger(dragStopEvent);\n\n    this.source.parentNode.insertBefore(this.originalSource, this.source);\n    this.source.parentNode.removeChild(this.source);\n    this.originalSource.style.display = '';\n\n    this.source.classList.remove(this.getClassNameFor('source:dragging'));\n    this.originalSource.classList.remove(this.getClassNameFor('source:original'));\n    this.originalSource.classList.add(this.getClassNameFor('source:placed'));\n    this.sourceContainer.classList.add(this.getClassNameFor('container:placed'));\n    this.sourceContainer.classList.remove(this.getClassNameFor('container:dragging'));\n    document.body.classList.remove(this.getClassNameFor('body:dragging'));\n    applyUserSelect(document.body, '');\n\n    if (this.currentOver) {\n      this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));\n    }\n\n    if (this.currentOverContainer) {\n      this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));\n    }\n\n    this.lastPlacedSource = this.originalSource;\n    this.lastPlacedContainer = this.sourceContainer;\n\n    this.placedTimeoutID = setTimeout(() => {\n      if (this.lastPlacedSource) {\n        this.lastPlacedSource.classList.remove(this.getClassNameFor('source:placed'));\n      }\n\n      if (this.lastPlacedContainer) {\n        this.lastPlacedContainer.classList.remove(this.getClassNameFor('container:placed'));\n      }\n\n      this.lastPlacedSource = null;\n      this.lastPlacedContainer = null;\n    }, this.options.placedTimeout);\n\n    this.source = null;\n    this.originalSource = null;\n    this.currentOverContainer = null;\n    this.currentOver = null;\n    this.sourceContainer = null;\n  }\n\n  /**\n   * Drag pressure handler\n   * @private\n   * @param {Event} event - DOM Drag event\n   */\n  [onDragPressure](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const sensorEvent = getSensorEvent(event);\n    const source = this.source || (0, _utils.closest)(sensorEvent.originalEvent.target, this.options.draggable);\n\n    const dragPressureEvent = new _DragEvent.DragPressureEvent({\n      sensorEvent,\n      source,\n      pressure: sensorEvent.pressure\n    });\n\n    this.trigger(dragPressureEvent);\n  }\n}\n\nexports.default = Draggable;\nDraggable.Plugins = { Announcement: _Plugins.Announcement, Focusable: _Plugins.Focusable, Mirror: _Plugins.Mirror, Scrollable: _Plugins.Scrollable };\nfunction getSensorEvent(event) {\n  return event.detail;\n}\n\nfunction applyUserSelect(element, value) {\n  element.style.webkitUserSelect = value;\n  element.style.mozUserSelect = value;\n  element.style.msUserSelect = value;\n  element.style.oUserSelect = value;\n  element.style.userSelect = value;\n}\n\n/***/ }),\n/* 38 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Sensor = __webpack_require__(4);\n\nvar _Sensor2 = _interopRequireDefault(_Sensor);\n\nvar _SensorEvent = __webpack_require__(3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onMouseForceWillBegin = Symbol('onMouseForceWillBegin');\nconst onMouseForceDown = Symbol('onMouseForceDown');\nconst onMouseDown = Symbol('onMouseDown');\nconst onMouseForceChange = Symbol('onMouseForceChange');\nconst onMouseMove = Symbol('onMouseMove');\nconst onMouseUp = Symbol('onMouseUp');\nconst onMouseForceGlobalChange = Symbol('onMouseForceGlobalChange');\n\n/**\n * This sensor picks up native force touch events and dictates drag operations\n * @class ForceTouchSensor\n * @module ForceTouchSensor\n * @extends Sensor\n */\nclass ForceTouchSensor extends _Sensor2.default {\n  /**\n   * ForceTouchSensor constructor.\n   * @constructs ForceTouchSensor\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers\n   * @param {Object} options - Options\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, options);\n\n    /**\n     * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed\n     * @property mightDrag\n     * @type {Boolean}\n     */\n    this.mightDrag = false;\n\n    this[onMouseForceWillBegin] = this[onMouseForceWillBegin].bind(this);\n    this[onMouseForceDown] = this[onMouseForceDown].bind(this);\n    this[onMouseDown] = this[onMouseDown].bind(this);\n    this[onMouseForceChange] = this[onMouseForceChange].bind(this);\n    this[onMouseMove] = this[onMouseMove].bind(this);\n    this[onMouseUp] = this[onMouseUp].bind(this);\n  }\n\n  /**\n   * Attaches sensors event listeners to the DOM\n   */\n  attach() {\n    for (const container of this.containers) {\n      container.addEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);\n      container.addEventListener('webkitmouseforcedown', this[onMouseForceDown], false);\n      container.addEventListener('mousedown', this[onMouseDown], true);\n      container.addEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);\n    }\n\n    document.addEventListener('mousemove', this[onMouseMove]);\n    document.addEventListener('mouseup', this[onMouseUp]);\n  }\n\n  /**\n   * Detaches sensors event listeners to the DOM\n   */\n  detach() {\n    for (const container of this.containers) {\n      container.removeEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);\n      container.removeEventListener('webkitmouseforcedown', this[onMouseForceDown], false);\n      container.removeEventListener('mousedown', this[onMouseDown], true);\n      container.removeEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);\n    }\n\n    document.removeEventListener('mousemove', this[onMouseMove]);\n    document.removeEventListener('mouseup', this[onMouseUp]);\n  }\n\n  /**\n   * Mouse force will begin handler\n   * @private\n   * @param {Event} event - Mouse force will begin event\n   */\n  [onMouseForceWillBegin](event) {\n    event.preventDefault();\n    this.mightDrag = true;\n  }\n\n  /**\n   * Mouse force down handler\n   * @private\n   * @param {Event} event - Mouse force down event\n   */\n  [onMouseForceDown](event) {\n    if (this.dragging) {\n      return;\n    }\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n    const container = event.currentTarget;\n\n    const dragStartEvent = new _SensorEvent.DragStartSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container,\n      originalEvent: event\n    });\n\n    this.trigger(container, dragStartEvent);\n\n    this.currentContainer = container;\n    this.dragging = !dragStartEvent.canceled();\n    this.mightDrag = false;\n  }\n\n  /**\n   * Mouse up handler\n   * @private\n   * @param {Event} event - Mouse up event\n   */\n  [onMouseUp](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target: null,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragStopEvent);\n\n    this.currentContainer = null;\n    this.dragging = false;\n    this.mightDrag = false;\n  }\n\n  /**\n   * Mouse down handler\n   * @private\n   * @param {Event} event - Mouse down event\n   */\n  [onMouseDown](event) {\n    if (!this.mightDrag) {\n      return;\n    }\n\n    // Need workaround for real click\n    // Cancel potential drag events\n    event.stopPropagation();\n    event.stopImmediatePropagation();\n    event.preventDefault();\n  }\n\n  /**\n   * Mouse move handler\n   * @private\n   * @param {Event} event - Mouse force will begin event\n   */\n  [onMouseMove](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n\n    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragMoveEvent);\n  }\n\n  /**\n   * Mouse force change handler\n   * @private\n   * @param {Event} event - Mouse force change event\n   */\n  [onMouseForceChange](event) {\n    if (this.dragging) {\n      return;\n    }\n\n    const target = event.target;\n    const container = event.currentTarget;\n\n    const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({\n      pressure: event.webkitForce,\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container,\n      originalEvent: event\n    });\n\n    this.trigger(container, dragPressureEvent);\n  }\n\n  /**\n   * Mouse force global change handler\n   * @private\n   * @param {Event} event - Mouse force global change event\n   */\n  [onMouseForceGlobalChange](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const target = event.target;\n\n    const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({\n      pressure: event.webkitForce,\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragPressureEvent);\n  }\n}\nexports.default = ForceTouchSensor;\n\n/***/ }),\n/* 39 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ForceTouchSensor = __webpack_require__(38);\n\nvar _ForceTouchSensor2 = _interopRequireDefault(_ForceTouchSensor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _ForceTouchSensor2.default;\n\n/***/ }),\n/* 40 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(2);\n\nvar _Sensor = __webpack_require__(4);\n\nvar _Sensor2 = _interopRequireDefault(_Sensor);\n\nvar _SensorEvent = __webpack_require__(3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onMouseDown = Symbol('onMouseDown');\nconst onMouseUp = Symbol('onMouseUp');\nconst onDragStart = Symbol('onDragStart');\nconst onDragOver = Symbol('onDragOver');\nconst onDragEnd = Symbol('onDragEnd');\nconst onDrop = Symbol('onDrop');\nconst reset = Symbol('reset');\n\n/**\n * This sensor picks up native browser drag events and dictates drag operations\n * @class DragSensor\n * @module DragSensor\n * @extends Sensor\n */\nclass DragSensor extends _Sensor2.default {\n  /**\n   * DragSensor constructor.\n   * @constructs DragSensor\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers\n   * @param {Object} options - Options\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, options);\n\n    /**\n     * Mouse down timer which will end up setting the draggable attribute, unless canceled\n     * @property mouseDownTimeout\n     * @type {Number}\n     */\n    this.mouseDownTimeout = null;\n\n    /**\n     * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed\n     * @property draggableElement\n     * @type {HTMLElement}\n     */\n    this.draggableElement = null;\n\n    /**\n     * Native draggable element could be links or images, their draggable state will be disabled during drag operation\n     * @property nativeDraggableElement\n     * @type {HTMLElement}\n     */\n    this.nativeDraggableElement = null;\n\n    this[onMouseDown] = this[onMouseDown].bind(this);\n    this[onMouseUp] = this[onMouseUp].bind(this);\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragOver] = this[onDragOver].bind(this);\n    this[onDragEnd] = this[onDragEnd].bind(this);\n    this[onDrop] = this[onDrop].bind(this);\n  }\n\n  /**\n   * Attaches sensors event listeners to the DOM\n   */\n  attach() {\n    document.addEventListener('mousedown', this[onMouseDown], true);\n  }\n\n  /**\n   * Detaches sensors event listeners to the DOM\n   */\n  detach() {\n    document.removeEventListener('mousedown', this[onMouseDown], true);\n  }\n\n  /**\n   * Drag start handler\n   * @private\n   * @param {Event} event - Drag start event\n   */\n  [onDragStart](event) {\n    // Need for firefox. \"text\" key is needed for IE\n    event.dataTransfer.setData('text', '');\n    event.dataTransfer.effectAllowed = this.options.type;\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n    this.currentContainer = (0, _utils.closest)(event.target, this.containers);\n\n    if (!this.currentContainer) {\n      return;\n    }\n\n    const dragStartEvent = new _SensorEvent.DragStartSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    // Workaround\n    setTimeout(() => {\n      this.trigger(this.currentContainer, dragStartEvent);\n\n      if (dragStartEvent.canceled()) {\n        this.dragging = false;\n      } else {\n        this.dragging = true;\n      }\n    }, 0);\n  }\n\n  /**\n   * Drag over handler\n   * @private\n   * @param {Event} event - Drag over event\n   */\n  [onDragOver](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n    const container = this.currentContainer;\n\n    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container,\n      originalEvent: event\n    });\n\n    this.trigger(container, dragMoveEvent);\n\n    if (!dragMoveEvent.canceled()) {\n      event.preventDefault();\n      event.dataTransfer.dropEffect = this.options.type;\n    }\n  }\n\n  /**\n   * Drag end handler\n   * @private\n   * @param {Event} event - Drag end event\n   */\n  [onDragEnd](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    document.removeEventListener('mouseup', this[onMouseUp], true);\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n    const container = this.currentContainer;\n\n    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container,\n      originalEvent: event\n    });\n\n    this.trigger(container, dragStopEvent);\n\n    this.dragging = false;\n\n    this[reset]();\n  }\n\n  /**\n   * Drop handler\n   * @private\n   * @param {Event} event - Drop event\n   */\n  [onDrop](event) {\n    // eslint-disable-line class-methods-use-this\n    event.preventDefault();\n  }\n\n  /**\n   * Mouse down handler\n   * @private\n   * @param {Event} event - Mouse down event\n   */\n  [onMouseDown](event) {\n    // Firefox bug for inputs within draggables https://bugzilla.mozilla.org/show_bug.cgi?id=739071\n    if (event.target && (event.target.form || event.target.contenteditable)) {\n      return;\n    }\n\n    const nativeDraggableElement = (0, _utils.closest)(event.target, element => element.draggable);\n\n    if (nativeDraggableElement) {\n      nativeDraggableElement.draggable = false;\n      this.nativeDraggableElement = nativeDraggableElement;\n    }\n\n    document.addEventListener('mouseup', this[onMouseUp], true);\n    document.addEventListener('dragstart', this[onDragStart], false);\n    document.addEventListener('dragover', this[onDragOver], false);\n    document.addEventListener('dragend', this[onDragEnd], false);\n    document.addEventListener('drop', this[onDrop], false);\n\n    const target = (0, _utils.closest)(event.target, this.options.draggable);\n\n    if (!target) {\n      return;\n    }\n\n    this.mouseDownTimeout = setTimeout(() => {\n      target.draggable = true;\n      this.draggableElement = target;\n    }, this.options.delay);\n  }\n\n  /**\n   * Mouse up handler\n   * @private\n   * @param {Event} event - Mouse up event\n   */\n  [onMouseUp]() {\n    this[reset]();\n  }\n\n  /**\n   * Mouse up handler\n   * @private\n   * @param {Event} event - Mouse up event\n   */\n  [reset]() {\n    clearTimeout(this.mouseDownTimeout);\n\n    document.removeEventListener('mouseup', this[onMouseUp], true);\n    document.removeEventListener('dragstart', this[onDragStart], false);\n    document.removeEventListener('dragover', this[onDragOver], false);\n    document.removeEventListener('dragend', this[onDragEnd], false);\n    document.removeEventListener('drop', this[onDrop], false);\n\n    if (this.nativeDraggableElement) {\n      this.nativeDraggableElement.draggable = true;\n      this.nativeDraggableElement = null;\n    }\n\n    if (this.draggableElement) {\n      this.draggableElement.draggable = false;\n      this.draggableElement = null;\n    }\n  }\n}\nexports.default = DragSensor;\n\n/***/ }),\n/* 41 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _DragSensor = __webpack_require__(40);\n\nvar _DragSensor2 = _interopRequireDefault(_DragSensor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _DragSensor2.default;\n\n/***/ }),\n/* 42 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(2);\n\nvar _Sensor = __webpack_require__(4);\n\nvar _Sensor2 = _interopRequireDefault(_Sensor);\n\nvar _SensorEvent = __webpack_require__(3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onTouchStart = Symbol('onTouchStart');\nconst onTouchHold = Symbol('onTouchHold');\nconst onTouchEnd = Symbol('onTouchEnd');\nconst onTouchMove = Symbol('onTouchMove');\n\n/**\n * Prevents scrolling when set to true\n * @var {Boolean} preventScrolling\n */\nlet preventScrolling = false;\n\n// WebKit requires cancelable `touchmove` events to be added as early as possible\nwindow.addEventListener('touchmove', event => {\n  if (!preventScrolling) {\n    return;\n  }\n\n  // Prevent scrolling\n  event.preventDefault();\n}, { passive: false });\n\n/**\n * This sensor picks up native browser touch events and dictates drag operations\n * @class TouchSensor\n * @module TouchSensor\n * @extends Sensor\n */\nclass TouchSensor extends _Sensor2.default {\n  /**\n   * TouchSensor constructor.\n   * @constructs TouchSensor\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers\n   * @param {Object} options - Options\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, options);\n\n    /**\n     * Closest scrollable container so accidental scroll can cancel long touch\n     * @property currentScrollableParent\n     * @type {HTMLElement}\n     */\n    this.currentScrollableParent = null;\n\n    /**\n     * TimeoutID for long touch\n     * @property tapTimeout\n     * @type {Number}\n     */\n    this.tapTimeout = null;\n\n    /**\n     * touchMoved indicates if touch has moved during tapTimeout\n     * @property touchMoved\n     * @type {Boolean}\n     */\n    this.touchMoved = false;\n\n    this[onTouchStart] = this[onTouchStart].bind(this);\n    this[onTouchHold] = this[onTouchHold].bind(this);\n    this[onTouchEnd] = this[onTouchEnd].bind(this);\n    this[onTouchMove] = this[onTouchMove].bind(this);\n  }\n\n  /**\n   * Attaches sensors event listeners to the DOM\n   */\n  attach() {\n    document.addEventListener('touchstart', this[onTouchStart]);\n  }\n\n  /**\n   * Detaches sensors event listeners to the DOM\n   */\n  detach() {\n    document.removeEventListener('touchstart', this[onTouchStart]);\n  }\n\n  /**\n   * Touch start handler\n   * @private\n   * @param {Event} event - Touch start event\n   */\n  [onTouchStart](event) {\n    const container = (0, _utils.closest)(event.target, this.containers);\n\n    if (!container) {\n      return;\n    }\n\n    document.addEventListener('touchmove', this[onTouchMove]);\n    document.addEventListener('touchend', this[onTouchEnd]);\n    document.addEventListener('touchcancel', this[onTouchEnd]);\n    container.addEventListener('contextmenu', onContextMenu);\n\n    this.currentContainer = container;\n    this.tapTimeout = setTimeout(this[onTouchHold](event, container), this.options.delay);\n  }\n\n  /**\n   * Touch hold handler\n   * @private\n   * @param {Event} event - Touch start event\n   * @param {HTMLElement} container - Container element\n   */\n  [onTouchHold](event, container) {\n    return () => {\n      if (this.touchMoved) {\n        return;\n      }\n\n      const touch = event.touches[0] || event.changedTouches[0];\n      const target = event.target;\n\n      const dragStartEvent = new _SensorEvent.DragStartSensorEvent({\n        clientX: touch.pageX,\n        clientY: touch.pageY,\n        target,\n        container,\n        originalEvent: event\n      });\n\n      this.trigger(container, dragStartEvent);\n\n      this.dragging = !dragStartEvent.canceled();\n      preventScrolling = this.dragging;\n    };\n  }\n\n  /**\n   * Touch move handler\n   * @private\n   * @param {Event} event - Touch move event\n   */\n  [onTouchMove](event) {\n    this.touchMoved = true;\n\n    if (!this.dragging) {\n      return;\n    }\n\n    const touch = event.touches[0] || event.changedTouches[0];\n    const target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);\n\n    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({\n      clientX: touch.pageX,\n      clientY: touch.pageY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragMoveEvent);\n  }\n\n  /**\n   * Touch end handler\n   * @private\n   * @param {Event} event - Touch end event\n   */\n  [onTouchEnd](event) {\n    this.touchMoved = false;\n    preventScrolling = false;\n\n    document.removeEventListener('touchend', this[onTouchEnd]);\n    document.removeEventListener('touchcancel', this[onTouchEnd]);\n    document.removeEventListener('touchmove', this[onTouchMove]);\n\n    if (this.currentContainer) {\n      this.currentContainer.removeEventListener('contextmenu', onContextMenu);\n    }\n\n    clearTimeout(this.tapTimeout);\n\n    if (!this.dragging) {\n      return;\n    }\n\n    const touch = event.touches[0] || event.changedTouches[0];\n    const target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);\n\n    event.preventDefault();\n\n    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({\n      clientX: touch.pageX,\n      clientY: touch.pageY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragStopEvent);\n\n    this.currentContainer = null;\n    this.dragging = false;\n  }\n}\n\nexports.default = TouchSensor;\nfunction onContextMenu(event) {\n  event.preventDefault();\n  event.stopPropagation();\n}\n\n/***/ }),\n/* 43 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _TouchSensor = __webpack_require__(42);\n\nvar _TouchSensor2 = _interopRequireDefault(_TouchSensor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _TouchSensor2.default;\n\n/***/ }),\n/* 44 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.DragPressureSensorEvent = exports.DragStopSensorEvent = exports.DragMoveSensorEvent = exports.DragStartSensorEvent = exports.SensorEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(0);\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base sensor event\n * @class SensorEvent\n * @module SensorEvent\n * @extends AbstractEvent\n */\nclass SensorEvent extends _AbstractEvent2.default {\n  /**\n   * Original browser event that triggered a sensor\n   * @property originalEvent\n   * @type {Event}\n   * @readonly\n   */\n  get originalEvent() {\n    return this.data.originalEvent;\n  }\n\n  /**\n   * Normalized clientX for both touch and mouse events\n   * @property clientX\n   * @type {Number}\n   * @readonly\n   */\n  get clientX() {\n    return this.data.clientX;\n  }\n\n  /**\n   * Normalized clientY for both touch and mouse events\n   * @property clientY\n   * @type {Number}\n   * @readonly\n   */\n  get clientY() {\n    return this.data.clientY;\n  }\n\n  /**\n   * Normalized target for both touch and mouse events\n   * Returns the element that is behind cursor or touch pointer\n   * @property target\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get target() {\n    return this.data.target;\n  }\n\n  /**\n   * Container that initiated the sensor\n   * @property container\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get container() {\n    return this.data.container;\n  }\n\n  /**\n   * Trackpad pressure\n   * @property pressure\n   * @type {Number}\n   * @readonly\n   */\n  get pressure() {\n    return this.data.pressure;\n  }\n}\n\nexports.SensorEvent = SensorEvent; /**\n                                    * Drag start sensor event\n                                    * @class DragStartSensorEvent\n                                    * @module DragStartSensorEvent\n                                    * @extends SensorEvent\n                                    */\n\nclass DragStartSensorEvent extends SensorEvent {}\n\nexports.DragStartSensorEvent = DragStartSensorEvent; /**\n                                                      * Drag move sensor event\n                                                      * @class DragMoveSensorEvent\n                                                      * @module DragMoveSensorEvent\n                                                      * @extends SensorEvent\n                                                      */\n\nDragStartSensorEvent.type = 'drag:start';\nclass DragMoveSensorEvent extends SensorEvent {}\n\nexports.DragMoveSensorEvent = DragMoveSensorEvent; /**\n                                                    * Drag stop sensor event\n                                                    * @class DragStopSensorEvent\n                                                    * @module DragStopSensorEvent\n                                                    * @extends SensorEvent\n                                                    */\n\nDragMoveSensorEvent.type = 'drag:move';\nclass DragStopSensorEvent extends SensorEvent {}\n\nexports.DragStopSensorEvent = DragStopSensorEvent; /**\n                                                    * Drag pressure sensor event\n                                                    * @class DragPressureSensorEvent\n                                                    * @module DragPressureSensorEvent\n                                                    * @extends SensorEvent\n                                                    */\n\nDragStopSensorEvent.type = 'drag:stop';\nclass DragPressureSensorEvent extends SensorEvent {}\nexports.DragPressureSensorEvent = DragPressureSensorEvent;\nDragPressureSensorEvent.type = 'drag:pressure';\n\n/***/ }),\n/* 45 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(2);\n\nvar _Sensor = __webpack_require__(4);\n\nvar _Sensor2 = _interopRequireDefault(_Sensor);\n\nvar _SensorEvent = __webpack_require__(3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onContextMenuWhileDragging = Symbol('onContextMenuWhileDragging');\nconst onMouseDown = Symbol('onMouseDown');\nconst onMouseMove = Symbol('onMouseMove');\nconst onMouseUp = Symbol('onMouseUp');\n\n/**\n * This sensor picks up native browser mouse events and dictates drag operations\n * @class MouseSensor\n * @module MouseSensor\n * @extends Sensor\n */\nclass MouseSensor extends _Sensor2.default {\n  /**\n   * MouseSensor constructor.\n   * @constructs MouseSensor\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers\n   * @param {Object} options - Options\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, options);\n\n    /**\n     * Indicates if mouse button is still down\n     * @property mouseDown\n     * @type {Boolean}\n     */\n    this.mouseDown = false;\n\n    /**\n     * Mouse down timer which will end up triggering the drag start operation\n     * @property mouseDownTimeout\n     * @type {Number}\n     */\n    this.mouseDownTimeout = null;\n\n    /**\n     * Indicates if context menu has been opened during drag operation\n     * @property openedContextMenu\n     * @type {Boolean}\n     */\n    this.openedContextMenu = false;\n\n    this[onContextMenuWhileDragging] = this[onContextMenuWhileDragging].bind(this);\n    this[onMouseDown] = this[onMouseDown].bind(this);\n    this[onMouseMove] = this[onMouseMove].bind(this);\n    this[onMouseUp] = this[onMouseUp].bind(this);\n  }\n\n  /**\n   * Attaches sensors event listeners to the DOM\n   */\n  attach() {\n    document.addEventListener('mousedown', this[onMouseDown], true);\n  }\n\n  /**\n   * Detaches sensors event listeners to the DOM\n   */\n  detach() {\n    document.removeEventListener('mousedown', this[onMouseDown], true);\n  }\n\n  /**\n   * Mouse down handler\n   * @private\n   * @param {Event} event - Mouse down event\n   */\n  [onMouseDown](event) {\n    if (event.button !== 0 || event.ctrlKey || event.metaKey) {\n      return;\n    }\n\n    document.addEventListener('mouseup', this[onMouseUp]);\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n    const container = (0, _utils.closest)(target, this.containers);\n\n    if (!container) {\n      return;\n    }\n\n    document.addEventListener('dragstart', preventNativeDragStart);\n\n    this.mouseDown = true;\n\n    clearTimeout(this.mouseDownTimeout);\n    this.mouseDownTimeout = setTimeout(() => {\n      if (!this.mouseDown) {\n        return;\n      }\n\n      const dragStartEvent = new _SensorEvent.DragStartSensorEvent({\n        clientX: event.clientX,\n        clientY: event.clientY,\n        target,\n        container,\n        originalEvent: event\n      });\n\n      this.trigger(container, dragStartEvent);\n\n      this.currentContainer = container;\n      this.dragging = !dragStartEvent.canceled();\n\n      if (this.dragging) {\n        document.addEventListener('contextmenu', this[onContextMenuWhileDragging]);\n        document.addEventListener('mousemove', this[onMouseMove]);\n      }\n    }, this.options.delay);\n  }\n\n  /**\n   * Mouse move handler\n   * @private\n   * @param {Event} event - Mouse move event\n   */\n  [onMouseMove](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n\n    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragMoveEvent);\n  }\n\n  /**\n   * Mouse up handler\n   * @private\n   * @param {Event} event - Mouse up event\n   */\n  [onMouseUp](event) {\n    this.mouseDown = Boolean(this.openedContextMenu);\n\n    if (this.openedContextMenu) {\n      this.openedContextMenu = false;\n      return;\n    }\n\n    document.removeEventListener('mouseup', this[onMouseUp]);\n    document.removeEventListener('dragstart', preventNativeDragStart);\n\n    if (!this.dragging) {\n      return;\n    }\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n\n    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragStopEvent);\n\n    document.removeEventListener('contextmenu', this[onContextMenuWhileDragging]);\n    document.removeEventListener('mousemove', this[onMouseMove]);\n\n    this.currentContainer = null;\n    this.dragging = false;\n  }\n\n  /**\n   * Context menu handler\n   * @private\n   * @param {Event} event - Context menu event\n   */\n  [onContextMenuWhileDragging](event) {\n    event.preventDefault();\n    this.openedContextMenu = true;\n  }\n}\n\nexports.default = MouseSensor;\nfunction preventNativeDragStart(event) {\n  event.preventDefault();\n}\n\n/***/ }),\n/* 46 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _MouseSensor = __webpack_require__(45);\n\nvar _MouseSensor2 = _interopRequireDefault(_MouseSensor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _MouseSensor2.default;\n\n/***/ }),\n/* 47 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n/**\n * Base sensor class. Extend from this class to create a new or custom sensor\n * @class Sensor\n * @module Sensor\n */\nclass Sensor {\n  /**\n   * Sensor constructor.\n   * @constructs Sensor\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers\n   * @param {Object} options - Options\n   */\n  constructor(containers = [], options = {}) {\n    /**\n     * Current containers\n     * @property containers\n     * @type {HTMLElement[]}\n     */\n    this.containers = [...containers];\n\n    /**\n     * Current options\n     * @property options\n     * @type {Object}\n     */\n    this.options = _extends({}, options);\n\n    /**\n     * Current drag state\n     * @property dragging\n     * @type {Boolean}\n     */\n    this.dragging = false;\n\n    /**\n     * Current container\n     * @property currentContainer\n     * @type {HTMLElement}\n     */\n    this.currentContainer = null;\n  }\n\n  /**\n   * Attaches sensors event listeners to the DOM\n   * @return {Sensor}\n   */\n  attach() {\n    return this;\n  }\n\n  /**\n   * Detaches sensors event listeners to the DOM\n   * @return {Sensor}\n   */\n  detach() {\n    return this;\n  }\n\n  /**\n   * Adds container to this sensor instance\n   * @param {...HTMLElement} containers - Containers you want to add to this sensor\n   * @example draggable.addContainer(document.body)\n   */\n  addContainer(...containers) {\n    this.containers = [...this.containers, ...containers];\n  }\n\n  /**\n   * Removes container from this sensor instance\n   * @param {...HTMLElement} containers - Containers you want to remove from this sensor\n   * @example draggable.removeContainer(document.body)\n   */\n  removeContainer(...containers) {\n    this.containers = this.containers.filter(container => !containers.includes(container));\n  }\n\n  /**\n   * Triggers event on target element\n   * @param {HTMLElement} element - Element to trigger event on\n   * @param {SensorEvent} sensorEvent - Sensor event to trigger\n   */\n  trigger(element, sensorEvent) {\n    const event = document.createEvent('Event');\n    event.detail = sensorEvent;\n    event.initEvent(sensorEvent.type, true, true);\n    element.dispatchEvent(event);\n    this.lastEvent = sensorEvent;\n\n    return sensorEvent;\n  }\n}\nexports.default = Sensor;\n\n/***/ }),\n/* 48 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = requestNextAnimationFrame;\nfunction requestNextAnimationFrame(callback) {\n  return requestAnimationFrame(() => {\n    requestAnimationFrame(callback);\n  });\n}\n\n/***/ }),\n/* 49 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _requestNextAnimationFrame = __webpack_require__(48);\n\nvar _requestNextAnimationFrame2 = _interopRequireDefault(_requestNextAnimationFrame);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _requestNextAnimationFrame2.default;\n\n/***/ }),\n/* 50 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = closest;\nconst matchFunction = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;\n\n/**\n * Get the closest parent element of a given element that matches the given\n * selector string or matching function\n *\n * @param {Element} element The child element to find a parent of\n * @param {String|Function} selector The string or function to use to match\n *     the parent element\n * @return {Element|null}\n */\nfunction closest(element, value) {\n  if (!element) {\n    return null;\n  }\n\n  const selector = value;\n  const callback = value;\n  const nodeList = value;\n  const singleElement = value;\n\n  const isSelector = Boolean(typeof value === 'string');\n  const isFunction = Boolean(typeof value === 'function');\n  const isNodeList = Boolean(value instanceof NodeList || value instanceof Array);\n  const isElement = Boolean(value instanceof HTMLElement);\n\n  function conditionFn(currentElement) {\n    if (!currentElement) {\n      return currentElement;\n    } else if (isSelector) {\n      return matchFunction.call(currentElement, selector);\n    } else if (isNodeList) {\n      return [...nodeList].includes(currentElement);\n    } else if (isElement) {\n      return singleElement === currentElement;\n    } else if (isFunction) {\n      return callback(currentElement);\n    } else {\n      return null;\n    }\n  }\n\n  let current = element;\n\n  do {\n    current = current.correspondingUseElement || current.correspondingElement || current;\n\n    if (conditionFn(current)) {\n      return current;\n    }\n\n    current = current.parentNode;\n  } while (current && current !== document.body && current !== document);\n\n  return null;\n}\n\n/***/ }),\n/* 51 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _closest = __webpack_require__(50);\n\nvar _closest2 = _interopRequireDefault(_closest);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _closest2.default;\n\n/***/ }),\n/* 52 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = exports.scroll = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _AbstractPlugin = __webpack_require__(1);\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nvar _utils = __webpack_require__(2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragStart = exports.onDragStart = Symbol('onDragStart');\nconst onDragMove = exports.onDragMove = Symbol('onDragMove');\nconst onDragStop = exports.onDragStop = Symbol('onDragStop');\nconst scroll = exports.scroll = Symbol('scroll');\n\n/**\n * Scrollable default options\n * @property {Object} defaultOptions\n * @property {Number} defaultOptions.speed\n * @property {Number} defaultOptions.sensitivity\n * @property {HTMLElement[]} defaultOptions.scrollableElements\n * @type {Object}\n */\nconst defaultOptions = exports.defaultOptions = {\n  speed: 6,\n  sensitivity: 50,\n  scrollableElements: []\n};\n\n/**\n * Scrollable plugin which scrolls the closest scrollable parent\n * @class Scrollable\n * @module Scrollable\n * @extends AbstractPlugin\n */\nclass Scrollable extends _AbstractPlugin2.default {\n  /**\n   * Scrollable constructor.\n   * @constructs Scrollable\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * Scrollable options\n     * @property {Object} options\n     * @property {Number} options.speed\n     * @property {Number} options.sensitivity\n     * @property {HTMLElement[]} options.scrollableElements\n     * @type {Object}\n     */\n    this.options = _extends({}, defaultOptions, this.getOptions());\n\n    /**\n     * Keeps current mouse position\n     * @property {Object} currentMousePosition\n     * @property {Number} currentMousePosition.clientX\n     * @property {Number} currentMousePosition.clientY\n     * @type {Object|null}\n     */\n    this.currentMousePosition = null;\n\n    /**\n     * Scroll animation frame\n     * @property scrollAnimationFrame\n     * @type {Number|null}\n     */\n    this.scrollAnimationFrame = null;\n\n    /**\n     * Closest scrollable element\n     * @property scrollableElement\n     * @type {HTMLElement|null}\n     */\n    this.scrollableElement = null;\n\n    /**\n     * Animation frame looking for the closest scrollable element\n     * @property findScrollableElementFrame\n     * @type {Number|null}\n     */\n    this.findScrollableElementFrame = null;\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragMove] = this[onDragMove].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n    this[scroll] = this[scroll].bind(this);\n  }\n\n  /**\n   * Attaches plugins event listeners\n   */\n  attach() {\n    this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Detaches plugins event listeners\n   */\n  detach() {\n    this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Returns options passed through draggable\n   * @return {Object}\n   */\n  getOptions() {\n    return this.draggable.options.scrollable || {};\n  }\n\n  /**\n   * Returns closest scrollable elements by element\n   * @param {HTMLElement} target\n   * @return {HTMLElement}\n   */\n  getScrollableElement(target) {\n    if (this.hasDefinedScrollableElements()) {\n      return (0, _utils.closest)(target, this.options.scrollableElements) || document.documentElement;\n    } else {\n      return closestScrollableElement(target);\n    }\n  }\n\n  /**\n   * Returns true if at least one scrollable element have been defined via options\n   * @param {HTMLElement} target\n   * @return {Boolean}\n   */\n  hasDefinedScrollableElements() {\n    return Boolean(this.options.scrollableElements.length !== 0);\n  }\n\n  /**\n   * Drag start handler. Finds closest scrollable parent in separate frame\n   * @param {DragStartEvent} dragEvent\n   * @private\n   */\n  [onDragStart](dragEvent) {\n    this.findScrollableElementFrame = requestAnimationFrame(() => {\n      this.scrollableElement = this.getScrollableElement(dragEvent.source);\n    });\n  }\n\n  /**\n   * Drag move handler. Remembers mouse position and initiates scrolling\n   * @param {DragMoveEvent} dragEvent\n   * @private\n   */\n  [onDragMove](dragEvent) {\n    this.findScrollableElementFrame = requestAnimationFrame(() => {\n      this.scrollableElement = this.getScrollableElement(dragEvent.sensorEvent.target);\n    });\n\n    if (!this.scrollableElement) {\n      return;\n    }\n\n    const sensorEvent = dragEvent.sensorEvent;\n    const scrollOffset = { x: 0, y: 0 };\n\n    if ('ontouchstart' in window) {\n      scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;\n      scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;\n    }\n\n    this.currentMousePosition = {\n      clientX: sensorEvent.clientX - scrollOffset.x,\n      clientY: sensorEvent.clientY - scrollOffset.y\n    };\n\n    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);\n  }\n\n  /**\n   * Drag stop handler. Cancels scroll animations and resets state\n   * @private\n   */\n  [onDragStop]() {\n    cancelAnimationFrame(this.scrollAnimationFrame);\n    cancelAnimationFrame(this.findScrollableElementFrame);\n\n    this.scrollableElement = null;\n    this.scrollAnimationFrame = null;\n    this.findScrollableElementFrame = null;\n    this.currentMousePosition = null;\n  }\n\n  /**\n   * Scroll function that does the heavylifting\n   * @private\n   */\n  [scroll]() {\n    if (!this.scrollableElement || !this.currentMousePosition) {\n      return;\n    }\n\n    cancelAnimationFrame(this.scrollAnimationFrame);\n\n    const { speed, sensitivity } = this.options;\n\n    const rect = this.scrollableElement.getBoundingClientRect();\n    const bottomCutOff = rect.bottom > window.innerHeight;\n    const topCutOff = rect.top < 0;\n    const cutOff = topCutOff || bottomCutOff;\n\n    const documentScrollingElement = getDocumentScrollingElement();\n    const scrollableElement = this.scrollableElement;\n    const clientX = this.currentMousePosition.clientX;\n    const clientY = this.currentMousePosition.clientY;\n\n    if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {\n      const { offsetHeight, offsetWidth } = scrollableElement;\n\n      if (rect.top + offsetHeight - clientY < sensitivity) {\n        scrollableElement.scrollTop += speed;\n      } else if (clientY - rect.top < sensitivity) {\n        scrollableElement.scrollTop -= speed;\n      }\n\n      if (rect.left + offsetWidth - clientX < sensitivity) {\n        scrollableElement.scrollLeft += speed;\n      } else if (clientX - rect.left < sensitivity) {\n        scrollableElement.scrollLeft -= speed;\n      }\n    } else {\n      const { innerHeight, innerWidth } = window;\n\n      if (clientY < sensitivity) {\n        documentScrollingElement.scrollTop -= speed;\n      } else if (innerHeight - clientY < sensitivity) {\n        documentScrollingElement.scrollTop += speed;\n      }\n\n      if (clientX < sensitivity) {\n        documentScrollingElement.scrollLeft -= speed;\n      } else if (innerWidth - clientX < sensitivity) {\n        documentScrollingElement.scrollLeft += speed;\n      }\n    }\n\n    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);\n  }\n}\n\nexports.default = Scrollable; /**\n                               * Returns true if the passed element has overflow\n                               * @param {HTMLElement} element\n                               * @return {Boolean}\n                               * @private\n                               */\n\nfunction hasOverflow(element) {\n  const overflowRegex = /(auto|scroll)/;\n  const computedStyles = getComputedStyle(element, null);\n\n  const overflow = computedStyles.getPropertyValue('overflow') + computedStyles.getPropertyValue('overflow-y') + computedStyles.getPropertyValue('overflow-x');\n\n  return overflowRegex.test(overflow);\n}\n\n/**\n * Returns true if the passed element is statically positioned\n * @param {HTMLElement} element\n * @return {Boolean}\n * @private\n */\nfunction isStaticallyPositioned(element) {\n  const position = getComputedStyle(element).getPropertyValue('position');\n  return position === 'static';\n}\n\n/**\n * Finds closest scrollable element\n * @param {HTMLElement} element\n * @return {HTMLElement}\n * @private\n */\nfunction closestScrollableElement(element) {\n  if (!element) {\n    return getDocumentScrollingElement();\n  }\n\n  const position = getComputedStyle(element).getPropertyValue('position');\n  const excludeStaticParents = position === 'absolute';\n\n  const scrollableElement = (0, _utils.closest)(element, parent => {\n    if (excludeStaticParents && isStaticallyPositioned(parent)) {\n      return false;\n    }\n    return hasOverflow(parent);\n  });\n\n  if (position === 'fixed' || !scrollableElement) {\n    return getDocumentScrollingElement();\n  } else {\n    return scrollableElement;\n  }\n}\n\n/**\n * Returns element that scrolls document\n * @return {HTMLElement}\n * @private\n */\nfunction getDocumentScrollingElement() {\n  return document.scrollingElement || document.documentElement;\n}\n\n/***/ }),\n/* 53 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _Scrollable = __webpack_require__(52);\n\nvar _Scrollable2 = _interopRequireDefault(_Scrollable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Scrollable2.default;\nexports.defaultOptions = _Scrollable.defaultOptions;\n\n/***/ }),\n/* 54 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.MirrorDestroyEvent = exports.MirrorMoveEvent = exports.MirrorAttachedEvent = exports.MirrorCreatedEvent = exports.MirrorCreateEvent = exports.MirrorEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(0);\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base mirror event\n * @class MirrorEvent\n * @module MirrorEvent\n * @extends AbstractEvent\n */\nclass MirrorEvent extends _AbstractEvent2.default {\n  /**\n   * Draggables source element\n   * @property source\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get source() {\n    return this.data.source;\n  }\n\n  /**\n   * Draggables original source element\n   * @property originalSource\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get originalSource() {\n    return this.data.originalSource;\n  }\n\n  /**\n   * Draggables source container element\n   * @property sourceContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get sourceContainer() {\n    return this.data.sourceContainer;\n  }\n\n  /**\n   * Sensor event\n   * @property sensorEvent\n   * @type {SensorEvent}\n   * @readonly\n   */\n  get sensorEvent() {\n    return this.data.sensorEvent;\n  }\n\n  /**\n   * Drag event\n   * @property dragEvent\n   * @type {DragEvent}\n   * @readonly\n   */\n  get dragEvent() {\n    return this.data.dragEvent;\n  }\n\n  /**\n   * Original event that triggered sensor event\n   * @property originalEvent\n   * @type {Event}\n   * @readonly\n   */\n  get originalEvent() {\n    if (this.sensorEvent) {\n      return this.sensorEvent.originalEvent;\n    }\n\n    return null;\n  }\n}\n\nexports.MirrorEvent = MirrorEvent; /**\n                                    * Mirror create event\n                                    * @class MirrorCreateEvent\n                                    * @module MirrorCreateEvent\n                                    * @extends MirrorEvent\n                                    */\n\nclass MirrorCreateEvent extends MirrorEvent {}\n\nexports.MirrorCreateEvent = MirrorCreateEvent; /**\n                                                * Mirror created event\n                                                * @class MirrorCreatedEvent\n                                                * @module MirrorCreatedEvent\n                                                * @extends MirrorEvent\n                                                */\n\nMirrorCreateEvent.type = 'mirror:create';\nclass MirrorCreatedEvent extends MirrorEvent {\n\n  /**\n   * Draggables mirror element\n   * @property mirror\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get mirror() {\n    return this.data.mirror;\n  }\n}\n\nexports.MirrorCreatedEvent = MirrorCreatedEvent; /**\n                                                  * Mirror attached event\n                                                  * @class MirrorAttachedEvent\n                                                  * @module MirrorAttachedEvent\n                                                  * @extends MirrorEvent\n                                                  */\n\nMirrorCreatedEvent.type = 'mirror:created';\nclass MirrorAttachedEvent extends MirrorEvent {\n\n  /**\n   * Draggables mirror element\n   * @property mirror\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get mirror() {\n    return this.data.mirror;\n  }\n}\n\nexports.MirrorAttachedEvent = MirrorAttachedEvent; /**\n                                                    * Mirror move event\n                                                    * @class MirrorMoveEvent\n                                                    * @module MirrorMoveEvent\n                                                    * @extends MirrorEvent\n                                                    */\n\nMirrorAttachedEvent.type = 'mirror:attached';\nclass MirrorMoveEvent extends MirrorEvent {\n\n  /**\n   * Draggables mirror element\n   * @property mirror\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get mirror() {\n    return this.data.mirror;\n  }\n}\n\nexports.MirrorMoveEvent = MirrorMoveEvent; /**\n                                            * Mirror destroy event\n                                            * @class MirrorDestroyEvent\n                                            * @module MirrorDestroyEvent\n                                            * @extends MirrorEvent\n                                            */\n\nMirrorMoveEvent.type = 'mirror:move';\nMirrorMoveEvent.cancelable = true;\nclass MirrorDestroyEvent extends MirrorEvent {\n\n  /**\n   * Draggables mirror element\n   * @property mirror\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get mirror() {\n    return this.data.mirror;\n  }\n}\nexports.MirrorDestroyEvent = MirrorDestroyEvent;\nMirrorDestroyEvent.type = 'mirror:destroy';\nMirrorDestroyEvent.cancelable = true;\n\n/***/ }),\n/* 55 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _MirrorEvent = __webpack_require__(54);\n\nObject.keys(_MirrorEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _MirrorEvent[key];\n    }\n  });\n});\n\n/***/ }),\n/* 56 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = exports.getAppendableContainer = exports.onScroll = exports.onMirrorMove = exports.onMirrorCreated = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _AbstractPlugin = __webpack_require__(1);\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nvar _MirrorEvent = __webpack_require__(55);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nconst onDragStart = exports.onDragStart = Symbol('onDragStart');\nconst onDragMove = exports.onDragMove = Symbol('onDragMove');\nconst onDragStop = exports.onDragStop = Symbol('onDragStop');\nconst onMirrorCreated = exports.onMirrorCreated = Symbol('onMirrorCreated');\nconst onMirrorMove = exports.onMirrorMove = Symbol('onMirrorMove');\nconst onScroll = exports.onScroll = Symbol('onScroll');\nconst getAppendableContainer = exports.getAppendableContainer = Symbol('getAppendableContainer');\n\n/**\n * Mirror default options\n * @property {Object} defaultOptions\n * @property {Boolean} defaultOptions.constrainDimensions\n * @property {Boolean} defaultOptions.xAxis\n * @property {Boolean} defaultOptions.yAxis\n * @property {null} defaultOptions.cursorOffsetX\n * @property {null} defaultOptions.cursorOffsetY\n * @type {Object}\n */\nconst defaultOptions = exports.defaultOptions = {\n  constrainDimensions: false,\n  xAxis: true,\n  yAxis: true,\n  cursorOffsetX: null,\n  cursorOffsetY: null\n};\n\n/**\n * Mirror plugin which controls the mirror positioning while dragging\n * @class Mirror\n * @module Mirror\n * @extends AbstractPlugin\n */\nclass Mirror extends _AbstractPlugin2.default {\n  /**\n   * Mirror constructor.\n   * @constructs Mirror\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * Mirror options\n     * @property {Object} options\n     * @property {Boolean} options.constrainDimensions\n     * @property {Boolean} options.xAxis\n     * @property {Boolean} options.yAxis\n     * @property {Number|null} options.cursorOffsetX\n     * @property {Number|null} options.cursorOffsetY\n     * @property {String|HTMLElement|Function} options.appendTo\n     * @type {Object}\n     */\n    this.options = _extends({}, defaultOptions, this.getOptions());\n\n    /**\n     * Scroll offset for touch devices because the mirror is positioned fixed\n     * @property {Object} scrollOffset\n     * @property {Number} scrollOffset.x\n     * @property {Number} scrollOffset.y\n     */\n    this.scrollOffset = { x: 0, y: 0 };\n\n    /**\n     * Initial scroll offset for touch devices because the mirror is positioned fixed\n     * @property {Object} scrollOffset\n     * @property {Number} scrollOffset.x\n     * @property {Number} scrollOffset.y\n     */\n    this.initialScrollOffset = {\n      x: window.scrollX,\n      y: window.scrollY\n    };\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragMove] = this[onDragMove].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n    this[onMirrorCreated] = this[onMirrorCreated].bind(this);\n    this[onMirrorMove] = this[onMirrorMove].bind(this);\n    this[onScroll] = this[onScroll].bind(this);\n  }\n\n  /**\n   * Attaches plugins event listeners\n   */\n  attach() {\n    this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]).on('mirror:created', this[onMirrorCreated]).on('mirror:move', this[onMirrorMove]);\n  }\n\n  /**\n   * Detaches plugins event listeners\n   */\n  detach() {\n    this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]).off('mirror:created', this[onMirrorCreated]).off('mirror:move', this[onMirrorMove]);\n  }\n\n  /**\n   * Returns options passed through draggable\n   * @return {Object}\n   */\n  getOptions() {\n    return this.draggable.options.mirror || {};\n  }\n\n  [onDragStart](dragEvent) {\n    if (dragEvent.canceled()) {\n      return;\n    }\n\n    if ('ontouchstart' in window) {\n      document.addEventListener('scroll', this[onScroll], true);\n    }\n\n    this.initialScrollOffset = {\n      x: window.scrollX,\n      y: window.scrollY\n    };\n\n    const { source, originalSource, sourceContainer, sensorEvent } = dragEvent;\n\n    const mirrorCreateEvent = new _MirrorEvent.MirrorCreateEvent({\n      source,\n      originalSource,\n      sourceContainer,\n      sensorEvent,\n      dragEvent\n    });\n\n    this.draggable.trigger(mirrorCreateEvent);\n\n    if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {\n      return;\n    }\n\n    const appendableContainer = this[getAppendableContainer](source) || sourceContainer;\n    this.mirror = source.cloneNode(true);\n\n    const mirrorCreatedEvent = new _MirrorEvent.MirrorCreatedEvent({\n      source,\n      originalSource,\n      sourceContainer,\n      sensorEvent,\n      dragEvent,\n      mirror: this.mirror\n    });\n\n    const mirrorAttachedEvent = new _MirrorEvent.MirrorAttachedEvent({\n      source,\n      originalSource,\n      sourceContainer,\n      sensorEvent,\n      dragEvent,\n      mirror: this.mirror\n    });\n\n    this.draggable.trigger(mirrorCreatedEvent);\n    appendableContainer.appendChild(this.mirror);\n    this.draggable.trigger(mirrorAttachedEvent);\n  }\n\n  [onDragMove](dragEvent) {\n    if (!this.mirror || dragEvent.canceled()) {\n      return;\n    }\n\n    const { source, originalSource, sourceContainer, sensorEvent } = dragEvent;\n\n    const mirrorMoveEvent = new _MirrorEvent.MirrorMoveEvent({\n      source,\n      originalSource,\n      sourceContainer,\n      sensorEvent,\n      dragEvent,\n      mirror: this.mirror\n    });\n\n    this.draggable.trigger(mirrorMoveEvent);\n  }\n\n  [onDragStop](dragEvent) {\n    if ('ontouchstart' in window) {\n      document.removeEventListener('scroll', this[onScroll], true);\n    }\n\n    this.initialScrollOffset = { x: 0, y: 0 };\n    this.scrollOffset = { x: 0, y: 0 };\n\n    if (!this.mirror) {\n      return;\n    }\n\n    const { source, sourceContainer, sensorEvent } = dragEvent;\n\n    const mirrorDestroyEvent = new _MirrorEvent.MirrorDestroyEvent({\n      source,\n      mirror: this.mirror,\n      sourceContainer,\n      sensorEvent,\n      dragEvent\n    });\n\n    this.draggable.trigger(mirrorDestroyEvent);\n\n    if (!mirrorDestroyEvent.canceled()) {\n      this.mirror.parentNode.removeChild(this.mirror);\n    }\n  }\n\n  [onScroll]() {\n    this.scrollOffset = {\n      x: window.scrollX - this.initialScrollOffset.x,\n      y: window.scrollY - this.initialScrollOffset.y\n    };\n  }\n\n  /**\n   * Mirror created handler\n   * @param {MirrorCreatedEvent} mirrorEvent\n   * @return {Promise}\n   * @private\n   */\n  [onMirrorCreated]({ mirror, source, sensorEvent }) {\n    const mirrorClass = this.draggable.getClassNameFor('mirror');\n\n    const setState = (_ref) => {\n      let { mirrorOffset, initialX, initialY } = _ref,\n          args = _objectWithoutProperties(_ref, ['mirrorOffset', 'initialX', 'initialY']);\n\n      this.mirrorOffset = mirrorOffset;\n      this.initialX = initialX;\n      this.initialY = initialY;\n      return _extends({ mirrorOffset, initialX, initialY }, args);\n    };\n\n    const initialState = {\n      mirror,\n      source,\n      sensorEvent,\n      mirrorClass,\n      scrollOffset: this.scrollOffset,\n      options: this.options\n    };\n\n    return Promise.resolve(initialState)\n    // Fix reflow here\n    .then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({ initial: true })).then(removeMirrorID).then(setState);\n  }\n\n  /**\n   * Mirror move handler\n   * @param {MirrorMoveEvent} mirrorEvent\n   * @return {Promise|null}\n   * @private\n   */\n  [onMirrorMove](mirrorEvent) {\n    if (mirrorEvent.canceled()) {\n      return null;\n    }\n\n    const initialState = {\n      mirror: mirrorEvent.mirror,\n      sensorEvent: mirrorEvent.sensorEvent,\n      mirrorOffset: this.mirrorOffset,\n      options: this.options,\n      initialX: this.initialX,\n      initialY: this.initialY,\n      scrollOffset: this.scrollOffset\n    };\n\n    return Promise.resolve(initialState).then(positionMirror({ raf: true }));\n  }\n\n  /**\n   * Returns appendable container for mirror based on the appendTo option\n   * @private\n   * @param {Object} options\n   * @param {HTMLElement} options.source - Current source\n   * @return {HTMLElement}\n   */\n  [getAppendableContainer](source) {\n    const appendTo = this.options.appendTo;\n\n    if (typeof appendTo === 'string') {\n      return document.querySelector(appendTo);\n    } else if (appendTo instanceof HTMLElement) {\n      return appendTo;\n    } else if (typeof appendTo === 'function') {\n      return appendTo(source);\n    } else {\n      return source.parentNode;\n    }\n  }\n}\n\nexports.default = Mirror; /**\n                           * Computes mirror dimensions based on the source element\n                           * Adds sourceRect to state\n                           * @param {Object} state\n                           * @param {HTMLElement} state.source\n                           * @return {Promise}\n                           * @private\n                           */\n\nfunction computeMirrorDimensions(_ref2) {\n  let { source } = _ref2,\n      args = _objectWithoutProperties(_ref2, ['source']);\n\n  return withPromise(resolve => {\n    const sourceRect = source.getBoundingClientRect();\n    resolve(_extends({ source, sourceRect }, args));\n  });\n}\n\n/**\n * Calculates mirror offset\n * Adds mirrorOffset to state\n * @param {Object} state\n * @param {SensorEvent} state.sensorEvent\n * @param {DOMRect} state.sourceRect\n * @return {Promise}\n * @private\n */\nfunction calculateMirrorOffset(_ref3) {\n  let { sensorEvent, sourceRect, options } = _ref3,\n      args = _objectWithoutProperties(_ref3, ['sensorEvent', 'sourceRect', 'options']);\n\n  return withPromise(resolve => {\n    const top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;\n    const left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;\n\n    const mirrorOffset = { top, left };\n\n    resolve(_extends({ sensorEvent, sourceRect, mirrorOffset, options }, args));\n  });\n}\n\n/**\n * Applys mirror styles\n * @param {Object} state\n * @param {HTMLElement} state.mirror\n * @param {HTMLElement} state.source\n * @param {Object} state.options\n * @return {Promise}\n * @private\n */\nfunction resetMirror(_ref4) {\n  let { mirror, source, options } = _ref4,\n      args = _objectWithoutProperties(_ref4, ['mirror', 'source', 'options']);\n\n  return withPromise(resolve => {\n    let offsetHeight;\n    let offsetWidth;\n\n    if (options.constrainDimensions) {\n      const computedSourceStyles = getComputedStyle(source);\n      offsetHeight = computedSourceStyles.getPropertyValue('height');\n      offsetWidth = computedSourceStyles.getPropertyValue('width');\n    }\n\n    mirror.style.position = 'fixed';\n    mirror.style.pointerEvents = 'none';\n    mirror.style.top = 0;\n    mirror.style.left = 0;\n    mirror.style.margin = 0;\n\n    if (options.constrainDimensions) {\n      mirror.style.height = offsetHeight;\n      mirror.style.width = offsetWidth;\n    }\n\n    resolve(_extends({ mirror, source, options }, args));\n  });\n}\n\n/**\n * Applys mirror class on mirror element\n * @param {Object} state\n * @param {HTMLElement} state.mirror\n * @param {String} state.mirrorClass\n * @return {Promise}\n * @private\n */\nfunction addMirrorClasses(_ref5) {\n  let { mirror, mirrorClass } = _ref5,\n      args = _objectWithoutProperties(_ref5, ['mirror', 'mirrorClass']);\n\n  return withPromise(resolve => {\n    mirror.classList.add(mirrorClass);\n    resolve(_extends({ mirror, mirrorClass }, args));\n  });\n}\n\n/**\n * Removes source ID from cloned mirror element\n * @param {Object} state\n * @param {HTMLElement} state.mirror\n * @return {Promise}\n * @private\n */\nfunction removeMirrorID(_ref6) {\n  let { mirror } = _ref6,\n      args = _objectWithoutProperties(_ref6, ['mirror']);\n\n  return withPromise(resolve => {\n    mirror.removeAttribute('id');\n    delete mirror.id;\n    resolve(_extends({ mirror }, args));\n  });\n}\n\n/**\n * Positions mirror with translate3d\n * @param {Object} state\n * @param {HTMLElement} state.mirror\n * @param {SensorEvent} state.sensorEvent\n * @param {Object} state.mirrorOffset\n * @param {Number} state.initialY\n * @param {Number} state.initialX\n * @param {Object} state.options\n * @return {Promise}\n * @private\n */\nfunction positionMirror({ withFrame = false, initial = false } = {}) {\n  return (_ref7) => {\n    let { mirror, sensorEvent, mirrorOffset, initialY, initialX, scrollOffset, options } = _ref7,\n        args = _objectWithoutProperties(_ref7, ['mirror', 'sensorEvent', 'mirrorOffset', 'initialY', 'initialX', 'scrollOffset', 'options']);\n\n    return withPromise(resolve => {\n      const result = _extends({\n        mirror,\n        sensorEvent,\n        mirrorOffset,\n        options\n      }, args);\n\n      if (mirrorOffset) {\n        const x = sensorEvent.clientX - mirrorOffset.left - scrollOffset.x;\n        const y = sensorEvent.clientY - mirrorOffset.top - scrollOffset.y;\n\n        if (options.xAxis && options.yAxis || initial) {\n          mirror.style.transform = `translate3d(${x}px, ${y}px, 0)`;\n        } else if (options.xAxis && !options.yAxis) {\n          mirror.style.transform = `translate3d(${x}px, ${initialY}px, 0)`;\n        } else if (options.yAxis && !options.xAxis) {\n          mirror.style.transform = `translate3d(${initialX}px, ${y}px, 0)`;\n        }\n\n        if (initial) {\n          result.initialX = x;\n          result.initialY = y;\n        }\n      }\n\n      resolve(result);\n    }, { frame: withFrame });\n  };\n}\n\n/**\n * Wraps functions in promise with potential animation frame option\n * @param {Function} callback\n * @param {Object} options\n * @param {Boolean} options.raf\n * @return {Promise}\n * @private\n */\nfunction withPromise(callback, { raf = false } = {}) {\n  return new Promise((resolve, reject) => {\n    if (raf) {\n      requestAnimationFrame(() => {\n        callback(resolve, reject);\n      });\n    } else {\n      callback(resolve, reject);\n    }\n  });\n}\n\n/**\n * Returns true if the sensor event was triggered by a native browser drag event\n * @param {SensorEvent} sensorEvent\n */\nfunction isNativeDragEvent(sensorEvent) {\n  return (/^drag/.test(sensorEvent.originalEvent.type)\n  );\n}\n\n/***/ }),\n/* 57 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _Mirror = __webpack_require__(56);\n\nvar _Mirror2 = _interopRequireDefault(_Mirror);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Mirror2.default;\nexports.defaultOptions = _Mirror.defaultOptions;\n\n/***/ }),\n/* 58 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _AbstractPlugin = __webpack_require__(1);\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onInitialize = Symbol('onInitialize');\nconst onDestroy = Symbol('onDestroy');\n\n/**\n * Focusable default options\n * @property {Object} defaultOptions\n * @type {Object}\n */\nconst defaultOptions = {};\n\n/**\n * Focusable plugin\n * @class Focusable\n * @module Focusable\n * @extends AbstractPlugin\n */\nclass Focusable extends _AbstractPlugin2.default {\n  /**\n   * Focusable constructor.\n   * @constructs Focusable\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * Focusable options\n     * @property {Object} options\n     * @type {Object}\n     */\n    this.options = _extends({}, defaultOptions, this.getOptions());\n\n    this[onInitialize] = this[onInitialize].bind(this);\n    this[onDestroy] = this[onDestroy].bind(this);\n  }\n\n  /**\n   * Attaches listeners to draggable\n   */\n  attach() {\n    this.draggable.on('draggable:initialize', this[onInitialize]).on('draggable:destroy', this[onDestroy]);\n  }\n\n  /**\n   * Detaches listeners from draggable\n   */\n  detach() {\n    this.draggable.off('draggable:initialize', this[onInitialize]).off('draggable:destroy', this[onDestroy]);\n  }\n\n  /**\n   * Returns options passed through draggable\n   * @return {Object}\n   */\n  getOptions() {\n    return this.draggable.options.focusable || {};\n  }\n\n  /**\n   * Returns draggable containers and elements\n   * @return {HTMLElement[]}\n   */\n  getElements() {\n    return [...this.draggable.containers, ...this.draggable.getDraggableElements()];\n  }\n\n  /**\n   * Intialize handler\n   * @private\n   */\n  [onInitialize]() {\n    // Can wait until the next best frame is available\n    requestAnimationFrame(() => {\n      this.getElements().forEach(element => decorateElement(element));\n    });\n  }\n\n  /**\n   * Destroy handler\n   * @private\n   */\n  [onDestroy]() {\n    // Can wait until the next best frame is available\n    requestAnimationFrame(() => {\n      this.getElements().forEach(element => stripElement(element));\n    });\n  }\n}\n\nexports.default = Focusable; /**\n                              * Keeps track of all the elements that are missing tabindex attributes\n                              * so they can be reset when draggable gets destroyed\n                              * @const {HTMLElement[]} elementsWithMissingTabIndex\n                              */\n\nconst elementsWithMissingTabIndex = [];\n\n/**\n * Decorates element with tabindex attributes\n * @param {HTMLElement} element\n * @return {Object}\n * @private\n */\nfunction decorateElement(element) {\n  const hasMissingTabIndex = Boolean(!element.getAttribute('tabindex') && element.tabIndex === -1);\n\n  if (hasMissingTabIndex) {\n    elementsWithMissingTabIndex.push(element);\n    element.tabIndex = 0;\n  }\n}\n\n/**\n * Removes elements tabindex attributes\n * @param {HTMLElement} element\n * @private\n */\nfunction stripElement(element) {\n  const tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);\n\n  if (tabIndexElementPosition !== -1) {\n    element.tabIndex = -1;\n    elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);\n  }\n}\n\n/***/ }),\n/* 59 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Focusable = __webpack_require__(58);\n\nvar _Focusable2 = _interopRequireDefault(_Focusable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Focusable2.default;\n\n/***/ }),\n/* 60 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * All draggable plugins inherit from this class.\n * @abstract\n * @class AbstractPlugin\n * @module AbstractPlugin\n */\nclass AbstractPlugin {\n  /**\n   * AbstractPlugin constructor.\n   * @constructs AbstractPlugin\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    /**\n     * Draggable instance\n     * @property draggable\n     * @type {Draggable}\n     */\n    this.draggable = draggable;\n  }\n\n  /**\n   * Override to add listeners\n   * @abstract\n   */\n  attach() {\n    throw new Error('Not Implemented');\n  }\n\n  /**\n   * Override to remove listeners\n   * @abstract\n   */\n  detach() {\n    throw new Error('Not Implemented');\n  }\n}\nexports.default = AbstractPlugin;\n\n/***/ }),\n/* 61 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _AbstractPlugin = __webpack_require__(1);\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onInitialize = Symbol('onInitialize');\nconst onDestroy = Symbol('onDestroy');\nconst announceEvent = Symbol('announceEvent');\nconst announceMessage = Symbol('announceMessage');\n\nconst ARIA_RELEVANT = 'aria-relevant';\nconst ARIA_ATOMIC = 'aria-atomic';\nconst ARIA_LIVE = 'aria-live';\nconst ROLE = 'role';\n\n/**\n * Announcement default options\n * @property {Object} defaultOptions\n * @property {Number} defaultOptions.expire\n * @type {Object}\n */\nconst defaultOptions = exports.defaultOptions = {\n  expire: 7000\n};\n\n/**\n * Announcement plugin\n * @class Announcement\n * @module Announcement\n * @extends AbstractPlugin\n */\nclass Announcement extends _AbstractPlugin2.default {\n  /**\n   * Announcement constructor.\n   * @constructs Announcement\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * Plugin options\n     * @property options\n     * @type {Object}\n     */\n    this.options = _extends({}, defaultOptions, this.getOptions());\n\n    /**\n     * Original draggable trigger method. Hack until we have onAll or on('all')\n     * @property originalTriggerMethod\n     * @type {Function}\n     */\n    this.originalTriggerMethod = this.draggable.trigger;\n\n    this[onInitialize] = this[onInitialize].bind(this);\n    this[onDestroy] = this[onDestroy].bind(this);\n  }\n\n  /**\n   * Attaches listeners to draggable\n   */\n  attach() {\n    this.draggable.on('draggable:initialize', this[onInitialize]);\n  }\n\n  /**\n   * Detaches listeners from draggable\n   */\n  detach() {\n    this.draggable.off('draggable:destroy', this[onDestroy]);\n  }\n\n  /**\n   * Returns passed in options\n   */\n  getOptions() {\n    return this.draggable.options.announcements || {};\n  }\n\n  /**\n   * Announces event\n   * @private\n   * @param {AbstractEvent} event\n   */\n  [announceEvent](event) {\n    const message = this.options[event.type];\n\n    if (message && typeof message === 'string') {\n      this[announceMessage](message);\n    }\n\n    if (message && typeof message === 'function') {\n      this[announceMessage](message(event));\n    }\n  }\n\n  /**\n   * Announces message to screen reader\n   * @private\n   * @param {String} message\n   */\n  [announceMessage](message) {\n    announce(message, { expire: this.options.expire });\n  }\n\n  /**\n   * Initialize hander\n   * @private\n   */\n  [onInitialize]() {\n    // Hack until there is an api for listening for all events\n    this.draggable.trigger = event => {\n      try {\n        this[announceEvent](event);\n      } finally {\n        // Ensure that original trigger is called\n        this.originalTriggerMethod.call(this.draggable, event);\n      }\n    };\n  }\n\n  /**\n   * Destroy hander\n   * @private\n   */\n  [onDestroy]() {\n    this.draggable.trigger = this.originalTriggerMethod;\n  }\n}\n\nexports.default = Announcement; /**\n                                 * @const {HTMLElement} liveRegion\n                                 */\n\nconst liveRegion = createRegion();\n\n/**\n * Announces message via live region\n * @param {String} message\n * @param {Object} options\n * @param {Number} options.expire\n */\nfunction announce(message, { expire }) {\n  const element = document.createElement('div');\n\n  element.textContent = message;\n  liveRegion.appendChild(element);\n\n  return setTimeout(() => {\n    liveRegion.removeChild(element);\n  }, expire);\n}\n\n/**\n * Creates region element\n * @return {HTMLElement}\n */\nfunction createRegion() {\n  const element = document.createElement('div');\n\n  element.setAttribute('id', 'draggable-live-region');\n  element.setAttribute(ARIA_RELEVANT, 'additions');\n  element.setAttribute(ARIA_ATOMIC, 'true');\n  element.setAttribute(ARIA_LIVE, 'assertive');\n  element.setAttribute(ROLE, 'log');\n\n  element.style.position = 'fixed';\n  element.style.width = '1px';\n  element.style.height = '1px';\n  element.style.top = '-1px';\n  element.style.overflow = 'hidden';\n\n  return element;\n}\n\n// Append live region element as early as possible\ndocument.addEventListener('DOMContentLoaded', () => {\n  document.body.appendChild(liveRegion);\n});\n\n/***/ }),\n/* 62 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _Announcement = __webpack_require__(61);\n\nvar _Announcement2 = _interopRequireDefault(_Announcement);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Announcement2.default;\nexports.defaultOptions = _Announcement.defaultOptions;\n\n/***/ }),\n/* 63 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.DraggableDestroyEvent = exports.DraggableInitializedEvent = exports.DraggableEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(0);\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base draggable event\n * @class DraggableEvent\n * @module DraggableEvent\n * @extends AbstractEvent\n */\nclass DraggableEvent extends _AbstractEvent2.default {\n\n  /**\n   * Draggable instance\n   * @property draggable\n   * @type {Draggable}\n   * @readonly\n   */\n  get draggable() {\n    return this.data.draggable;\n  }\n}\n\nexports.DraggableEvent = DraggableEvent; /**\n                                          * Draggable initialized event\n                                          * @class DraggableInitializedEvent\n                                          * @module DraggableInitializedEvent\n                                          * @extends DraggableEvent\n                                          */\n\nDraggableEvent.type = 'draggable';\nclass DraggableInitializedEvent extends DraggableEvent {}\n\nexports.DraggableInitializedEvent = DraggableInitializedEvent; /**\n                                                                * Draggable destory event\n                                                                * @class DraggableInitializedEvent\n                                                                * @module DraggableDestroyEvent\n                                                                * @extends DraggableDestroyEvent\n                                                                */\n\nDraggableInitializedEvent.type = 'draggable:initialize';\nclass DraggableDestroyEvent extends DraggableEvent {}\nexports.DraggableDestroyEvent = DraggableDestroyEvent;\nDraggableDestroyEvent.type = 'draggable:destroy';\n\n/***/ }),\n/* 64 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nconst canceled = Symbol('canceled');\n\n/**\n * All events fired by draggable inherit this class. You can call `cancel()` to\n * cancel a specific event or you can check if an event has been canceled by\n * calling `canceled()`.\n * @abstract\n * @class AbstractEvent\n * @module AbstractEvent\n */\nclass AbstractEvent {\n\n  /**\n   * AbstractEvent constructor.\n   * @constructs AbstractEvent\n   * @param {object} data - Event data\n   */\n\n  /**\n   * Event type\n   * @static\n   * @abstract\n   * @property type\n   * @type {String}\n   */\n  constructor(data) {\n    this[canceled] = false;\n    this.data = data;\n  }\n\n  /**\n   * Read-only type\n   * @abstract\n   * @return {String}\n   */\n\n\n  /**\n   * Event cancelable\n   * @static\n   * @abstract\n   * @property cancelable\n   * @type {Boolean}\n   */\n  get type() {\n    return this.constructor.type;\n  }\n\n  /**\n   * Read-only cancelable\n   * @abstract\n   * @return {Boolean}\n   */\n  get cancelable() {\n    return this.constructor.cancelable;\n  }\n\n  /**\n   * Cancels the event instance\n   * @abstract\n   */\n  cancel() {\n    this[canceled] = true;\n  }\n\n  /**\n   * Check if event has been canceled\n   * @abstract\n   * @return {Boolean}\n   */\n  canceled() {\n    return Boolean(this[canceled]);\n  }\n\n  /**\n   * Returns new event instance with existing event data.\n   * This method allows for overriding of event data.\n   * @param {Object} data\n   * @return {AbstractEvent}\n   */\n  clone(data) {\n    return new this.constructor(_extends({}, this.data, data));\n  }\n}\nexports.default = AbstractEvent;\nAbstractEvent.type = 'event';\nAbstractEvent.cancelable = false;\n\n/***/ }),\n/* 65 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.DragStopEvent = exports.DragPressureEvent = exports.DragOutContainerEvent = exports.DragOverContainerEvent = exports.DragOutEvent = exports.DragOverEvent = exports.DragMoveEvent = exports.DragStartEvent = exports.DragEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(0);\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base drag event\n * @class DragEvent\n * @module DragEvent\n * @extends AbstractEvent\n */\nclass DragEvent extends _AbstractEvent2.default {\n\n  /**\n   * Draggables source element\n   * @property source\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get source() {\n    return this.data.source;\n  }\n\n  /**\n   * Draggables original source element\n   * @property originalSource\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get originalSource() {\n    return this.data.originalSource;\n  }\n\n  /**\n   * Draggables mirror element\n   * @property mirror\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get mirror() {\n    return this.data.mirror;\n  }\n\n  /**\n   * Draggables source container element\n   * @property sourceContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get sourceContainer() {\n    return this.data.sourceContainer;\n  }\n\n  /**\n   * Sensor event\n   * @property sensorEvent\n   * @type {SensorEvent}\n   * @readonly\n   */\n  get sensorEvent() {\n    return this.data.sensorEvent;\n  }\n\n  /**\n   * Original event that triggered sensor event\n   * @property originalEvent\n   * @type {Event}\n   * @readonly\n   */\n  get originalEvent() {\n    if (this.sensorEvent) {\n      return this.sensorEvent.originalEvent;\n    }\n\n    return null;\n  }\n}\n\nexports.DragEvent = DragEvent; /**\n                                * Drag start event\n                                * @class DragStartEvent\n                                * @module DragStartEvent\n                                * @extends DragEvent\n                                */\n\nDragEvent.type = 'drag';\nclass DragStartEvent extends DragEvent {}\n\nexports.DragStartEvent = DragStartEvent; /**\n                                          * Drag move event\n                                          * @class DragMoveEvent\n                                          * @module DragMoveEvent\n                                          * @extends DragEvent\n                                          */\n\nDragStartEvent.type = 'drag:start';\nDragStartEvent.cancelable = true;\nclass DragMoveEvent extends DragEvent {}\n\nexports.DragMoveEvent = DragMoveEvent; /**\n                                        * Drag over event\n                                        * @class DragOverEvent\n                                        * @module DragOverEvent\n                                        * @extends DragEvent\n                                        */\n\nDragMoveEvent.type = 'drag:move';\nclass DragOverEvent extends DragEvent {\n\n  /**\n   * Draggable container you are over\n   * @property overContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get overContainer() {\n    return this.data.overContainer;\n  }\n\n  /**\n   * Draggable element you are over\n   * @property over\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get over() {\n    return this.data.over;\n  }\n}\n\nexports.DragOverEvent = DragOverEvent; /**\n                                        * Drag out event\n                                        * @class DragOutEvent\n                                        * @module DragOutEvent\n                                        * @extends DragEvent\n                                        */\n\nDragOverEvent.type = 'drag:over';\nDragOverEvent.cancelable = true;\nclass DragOutEvent extends DragEvent {\n\n  /**\n   * Draggable container you are over\n   * @property overContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get overContainer() {\n    return this.data.overContainer;\n  }\n\n  /**\n   * Draggable element you left\n   * @property over\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get over() {\n    return this.data.over;\n  }\n}\n\nexports.DragOutEvent = DragOutEvent; /**\n                                      * Drag over container event\n                                      * @class DragOverContainerEvent\n                                      * @module DragOverContainerEvent\n                                      * @extends DragEvent\n                                      */\n\nDragOutEvent.type = 'drag:out';\nclass DragOverContainerEvent extends DragEvent {\n\n  /**\n   * Draggable container you are over\n   * @property overContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get overContainer() {\n    return this.data.overContainer;\n  }\n}\n\nexports.DragOverContainerEvent = DragOverContainerEvent; /**\n                                                          * Drag out container event\n                                                          * @class DragOutContainerEvent\n                                                          * @module DragOutContainerEvent\n                                                          * @extends DragEvent\n                                                          */\n\nDragOverContainerEvent.type = 'drag:over:container';\nclass DragOutContainerEvent extends DragEvent {\n\n  /**\n   * Draggable container you left\n   * @property overContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get overContainer() {\n    return this.data.overContainer;\n  }\n}\n\nexports.DragOutContainerEvent = DragOutContainerEvent; /**\n                                                        * Drag pressure event\n                                                        * @class DragPressureEvent\n                                                        * @module DragPressureEvent\n                                                        * @extends DragEvent\n                                                        */\n\nDragOutContainerEvent.type = 'drag:out:container';\nclass DragPressureEvent extends DragEvent {\n\n  /**\n   * Pressure applied on draggable element\n   * @property pressure\n   * @type {Number}\n   * @readonly\n   */\n  get pressure() {\n    return this.data.pressure;\n  }\n}\n\nexports.DragPressureEvent = DragPressureEvent; /**\n                                                * Drag stop event\n                                                * @class DragStopEvent\n                                                * @module DragStopEvent\n                                                * @extends DragEvent\n                                                */\n\nDragPressureEvent.type = 'drag:pressure';\nclass DragStopEvent extends DragEvent {}\nexports.DragStopEvent = DragStopEvent;\nDragStopEvent.type = 'drag:stop';\n\n/***/ }),\n/* 66 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Plugins = exports.Sensors = exports.Sortable = exports.Swappable = exports.Droppable = exports.Draggable = exports.BasePlugin = exports.BaseEvent = undefined;\n\nvar _Draggable = __webpack_require__(5);\n\nObject.defineProperty(exports, 'Draggable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Draggable).default;\n  }\n});\n\nvar _Droppable = __webpack_require__(34);\n\nObject.defineProperty(exports, 'Droppable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Droppable).default;\n  }\n});\n\nvar _Swappable = __webpack_require__(31);\n\nObject.defineProperty(exports, 'Swappable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Swappable).default;\n  }\n});\n\nvar _Sortable = __webpack_require__(28);\n\nObject.defineProperty(exports, 'Sortable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Sortable).default;\n  }\n});\n\nvar _AbstractEvent = __webpack_require__(0);\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nvar _AbstractPlugin = __webpack_require__(1);\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nvar _Sensors = __webpack_require__(6);\n\nvar Sensors = _interopRequireWildcard(_Sensors);\n\nvar _Plugins = __webpack_require__(25);\n\nvar Plugins = _interopRequireWildcard(_Plugins);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.BaseEvent = _AbstractEvent2.default;\nexports.BasePlugin = _AbstractPlugin2.default;\nexports.Sensors = Sensors;\nexports.Plugins = Plugins;\n\n/***/ })\n/******/ ]);\n});\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@shopify/draggable/lib/draggable.bundle.js?");
    /***/
  },

  /***/
  "./node_modules/@soda/get-current-script/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/@soda/get-current-script/index.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSodaGetCurrentScriptIndexJs(module, exports, __webpack_require__) {
    eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller\n// MIT license\n// source: https://github.com/amiller-gh/currentScript-polyfill\n\n// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505\n\n(function (root, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n}(typeof self !== 'undefined' ? self : this, function () {\n  function getCurrentScript () {\n    if (document.currentScript) {\n      return document.currentScript\n    }\n  \n    // IE 8-10 support script readyState\n    // IE 11+ & Firefox support stack trace\n    try {\n      throw new Error();\n    }\n    catch (err) {\n      // Find the second match for the \"at\" string to get file src url from stack.\n      var ieStackRegExp = /.*at [^(]*\\((.*):(.+):(.+)\\)$/ig,\n        ffStackRegExp = /@([^@]*):(\\d+):(\\d+)\\s*$/ig,\n        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),\n        scriptLocation = (stackDetails && stackDetails[1]) || false,\n        line = (stackDetails && stackDetails[2]) || false,\n        currentLocation = document.location.href.replace(document.location.hash, ''),\n        pageSource,\n        inlineScriptSourceRegExp,\n        inlineScriptSource,\n        scripts = document.getElementsByTagName('script'); // Live NodeList collection\n  \n      if (scriptLocation === currentLocation) {\n        pageSource = document.documentElement.outerHTML;\n        inlineScriptSourceRegExp = new RegExp('(?:[^\\\\n]+?\\\\n){0,' + (line - 2) + '}[^<]*<script>([\\\\d\\\\D]*?)<\\\\/script>[\\\\d\\\\D]*', 'i');\n        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();\n      }\n  \n      for (var i = 0; i < scripts.length; i++) {\n        // If ready state is interactive, return the script tag\n        if (scripts[i].readyState === 'interactive') {\n          return scripts[i];\n        }\n  \n        // If src matches, return the script tag\n        if (scripts[i].src === scriptLocation) {\n          return scripts[i];\n        }\n  \n        // If inline source matches, return the script tag\n        if (\n          scriptLocation === currentLocation &&\n          scripts[i].innerHTML &&\n          scripts[i].innerHTML.trim() === inlineScriptSource\n        ) {\n          return scripts[i];\n        }\n      }\n  \n      // If no match, return null\n      return null;\n    }\n  };\n\n  return getCurrentScript\n}));\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@soda/get-current-script/index.js?");
    /***/
  },

  /***/
  "./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesVueCliServiceLibCommandsBuildEntryLibJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPublicPath */ \"./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js\");\n/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~entry */ \"./src/index.js\");\n/* empty/unused harmony star reexport */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_entry__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js?");
    /***/
  },

  /***/
  "./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesVueCliServiceLibCommandsBuildSetPublicPathJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n// This file is imported into lib/wc client bundles.\n\nif (typeof window !== 'undefined') {\n  var currentScript = window.document.currentScript\n  if (true) {\n    var getCurrentScript = __webpack_require__(/*! @soda/get-current-script */ \"./node_modules/@soda/get-current-script/index.js\")\n    currentScript = getCurrentScript()\n\n    // for backward compatibility, because previously we directly included the polyfill\n    if (!('currentScript' in document)) {\n      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })\n    }\n  }\n\n  var src = currentScript && currentScript.src.match(/(.+\\/)[^/]+\\.js(\\?.*)?$/)\n  if (src) {\n    __webpack_require__.p = src[1] // eslint-disable-line\n  }\n}\n\n// Indicate to webpack that this file can be concatenated\n/* harmony default export */ __webpack_exports__[\"default\"] = (null);\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js?");
    /***/
  },

  /***/
  "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Draggable.vue?vue&type=script&lang=js&":
  /*!******************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Draggable.vue?vue&type=script&lang=js& ***!
    \******************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesCacheLoaderDistCjsJsNode_modulesBabelLoaderLibIndexJsNode_modulesCacheLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsSrcComponentsDraggableVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.some */ \"./node_modules/core-js/modules/es.array.some.js\");\n/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var _events_VueDragStart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/VueDragStart */ \"./src/events/VueDragStart.js\");\n\n\n\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable no-underscore-dangle */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['group'],\n  mounted: function mounted() {\n    // Gets fired when draggable gets initialized\n    this.$draggable.on('draggable:initialize', this.onDragInitialize); // Gets fired when draggable gets destroyed\n\n    this.$draggable.on('draggable:destroy', this.onDragDestroy); // Gets fired when drag action begins\n\n    this.$draggable.on('drag:start', this.onDragStart); // Gets fired when moving a draggable around\n\n    this.$draggable.on('drag:move', this.onDragMove); // Gets fired when dragging over other draggable\n\n    this.$draggable.on('drag:over', this.onDragOver); // Gets fired when dragging over other draggable container\n\n    this.$draggable.on('drag:over:container', this.onDragOverContainer); // Gets fired when dragging out of other draggable\n\n    this.$draggable.on('drag:out', this.onDragOut); // Gets fired when dragging out of other draggable container\n\n    this.$draggable.on('drag:out:container', this.onDragOutContainer); // Gets fired when draggable has been released\n\n    this.$draggable.on('drag:stop', this.onDragStop); // Gets fired when using force touch on draggable element\n\n    this.$draggable.on('drag:pressure', this.onDragPressure);\n  },\n  destroyed: function destroyed() {\n    this.$draggable.off('draggable:initialize', this.onDragInitialize);\n    this.$draggable.off('draggable:destroy', this.onDragDestroy);\n    this.$draggable.off('drag:start', this.onDragStart);\n    this.$draggable.off('drag:move', this.onDragMove);\n    this.$draggable.off('drag:over', this.onDragOver);\n    this.$draggable.off('drag:over:container', this.onDragOverContainer);\n    this.$draggable.off('drag:out', this.onDragOut);\n    this.$draggable.off('drag:out:container', this.onDragOutContainer);\n    this.$draggable.off('drag:stop', this.onDragStop);\n    this.$draggable.off('drag:pressure', this.onDragPressure);\n  },\n  methods: {\n    onDragMove: function onDragMove(event) {},\n    onDragOver: function onDragOver(event) {},\n    onDragInitialize: function onDragInitialize(event) {},\n    onDragOut: function onDragOut(event) {},\n    onDragOutContainer: function onDragOutContainer(event) {},\n    onDragStop: function onDragStop(event) {\n      this.$emit('stop');\n    },\n    onDragOverContainer: function onDragOverContainer(event) {},\n    onDragPressure: function onDragPressure(event) {},\n    onDragDestroy: function onDragDestroy(event) {},\n    getDraggable: function getDraggable(event) {\n      return event.originalEvent.target.closest(\".\".concat(this.$draggable.options.draggableClass));\n    },\n    onDragStart: function onDragStart(_event) {\n      var event = _event; // handles scrollable content in draggable div\n\n      var shouldIgnore = this.$draggable.options.ignoreHandleClassList.some(function (className) {\n        return event.sensorEvent.target.classList.contains(className);\n      });\n\n      if (shouldIgnore) {\n        event.cancel();\n        return;\n      } // Handles nested draggables\n\n\n      if (this.$el !== this.getDraggable(event)) {\n        return;\n      } // We cannot drag into inputs\n\n\n      if (event.originalEvent.target.tagName === 'INPUT') {\n        event.cancel();\n        return;\n      }\n\n      this.$draggable.trigger(new _events_VueDragStart__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, event.data), {}, {\n        sourceComponent: this\n      })));\n      this.$emit('start');\n      event.source._source = {\n        oldComponent: this\n      };\n    }\n  },\n  render: function render(c) {\n    var _objectSpread2;\n\n    var item = this.$scopedSlots.default()[0];\n\n    if (item.tag === undefined) {\n      item = c('span', {}, [item]);\n    }\n\n    var data = item.data || {};\n    data.class = Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, data.class), {}, (_objectSpread2 = {}, Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_objectSpread2, this.$draggable.options.draggableClass, true), Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_objectSpread2, this.$draggable.options.dragHandleClass, this.$attrs['with-handle'] === true), _objectSpread2));\n    data.attrs = Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, data.attrs), {}, {\n      'data-draggable-mirror': JSON.stringify(this.$attrs['draggable-mirror'])\n    });\n    item.data = data;\n    return item;\n  }\n});\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/components/Draggable.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");
    /***/
  },

  /***/
  "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Dropzone.vue?vue&type=script&lang=js&":
  /*!*****************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dropzone.vue?vue&type=script&lang=js& ***!
    \*****************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesCacheLoaderDistCjsJsNode_modulesBabelLoaderLibIndexJsNode_modulesCacheLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsSrcComponentsDropzoneVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n\n\n\n\n/* eslint-disable no-underscore-dangle */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['data', 'group'],\n  data: function data() {\n    return {\n      over: false,\n      active: false\n    };\n  },\n  mounted: function mounted() {\n    this.$draggable.on('vue:drag:start', this.onDragStart).on('drag:move', this.onDragMove).on('drag:stop', this.onDragStop);\n  },\n  destroyed: function destroyed() {\n    this.$draggable.off('vue:drag:start', this.onDragStart).off('drag:move', this.onDragMove).off('drag:stop', this.onDragStop);\n  },\n  methods: {\n    onDragStart: function onDragStart(event) {\n      // TODO: solve event listener order of execution by dispatching new events\n      // instead of this hack\n      var sourceGroup = event.sourceComponent.group;\n\n      if (Array.isArray(this.group) ? this.group.includes(sourceGroup) : sourceGroup === this.group) {\n        this.active = true;\n      }\n    },\n    onDragMove: function onDragMove(_event) {\n      var event = _event;\n\n      if (!event.source._source) {\n        return;\n      }\n\n      var target = event.sensorEvent.target;\n\n      if (target === this.$el || this.$el.contains(target) && this.sameGroup(event)) {\n        if (this.over === false) {\n          event.source._source.newComponent = this;\n          this.$emit('enter');\n        }\n\n        this.over = true;\n      } else {\n        if (this.over === true) {\n          event.source._source.newComponent = null;\n          this.$emit('leave');\n        }\n\n        this.over = false;\n      }\n    },\n    onDragStop: function onDragStop(event) {\n      if (!event.source._source) {\n        return false;\n      }\n\n      this.active = false;\n\n      if (!this.over) {\n        return true;\n      }\n\n      this.over = false;\n      this.$emit('receive', event.source._source);\n\n      event.source._source.oldComponent.$emit('drop', Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, event.source._source), {}, {\n        data: this.data\n      }));\n\n      return true;\n    },\n    sameGroup: function sameGroup(event) {\n      var sourceGroup = event.source._source.oldComponent.group;\n      return Array.isArray(this.group) ? this.group.includes(sourceGroup) : sourceGroup === this.group;\n    }\n  },\n  render: function render() {\n    if (this.$scopedSlots.default) {\n      return this.$scopedSlots.default({\n        over: this.over,\n        active: this.active\n      });\n    }\n\n    return this.$scopedSlots.default()[0];\n  }\n});\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/components/Dropzone.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");
    /***/
  },

  /***/
  "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Sortable.vue?vue&type=script&lang=js&":
  /*!*****************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Sortable.vue?vue&type=script&lang=js& ***!
    \*****************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesCacheLoaderDistCjsJsNode_modulesBabelLoaderLibIndexJsNode_modulesCacheLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsSrcComponentsSortableVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ \"./node_modules/core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.splice */ \"./node_modules/core-js/modules/es.array.splice.js\");\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _events_VueDragStart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../events/VueDragStart */ \"./src/events/VueDragStart.js\");\n\n\n\n\n\n\n\n\n\n/* eslint-disable no-underscore-dangle */\n\n\nfunction index(element) {\n  return Array.prototype.indexOf.call(element.parentNode.children, element);\n}\n\nfunction moveInsideEmptyContainer(source, overContainer) {\n  var oldContainer = source.parentNode;\n  overContainer.appendChild(source);\n  return {\n    oldContainer: oldContainer,\n    newContainer: overContainer\n  };\n}\n\nfunction moveWithinContainer(source, over) {\n  var oldIndex = index(source);\n  var newIndex = index(over);\n\n  if (oldIndex < newIndex) {\n    source.parentNode.insertBefore(source, over.nextElementSibling);\n  } else {\n    source.parentNode.insertBefore(source, over);\n  }\n\n  return {\n    oldContainer: source.parentNode,\n    newContainer: source.parentNode\n  };\n}\n\nfunction moveOutsideContainer(source, over, overContainer) {\n  var oldContainer = source.parentNode;\n\n  if (over) {\n    over.parentNode.insertBefore(source, over);\n  } else {\n    // need to figure out proper position\n    overContainer.appendChild(source);\n  }\n\n  return {\n    oldContainer: oldContainer,\n    newContainer: source.parentNode\n  };\n}\n\nfunction move(_ref) {\n  var source = _ref.source,\n      over = _ref.over,\n      overContainer = _ref.overContainer,\n      children = _ref.children;\n  var emptyOverContainer = !children.length;\n  var differentContainer = source.parentNode !== overContainer;\n  var sameContainer = over && !differentContainer;\n\n  if (emptyOverContainer) {\n    return moveInsideEmptyContainer(source, overContainer);\n  }\n\n  if (sameContainer) {\n    return moveWithinContainer(source, over);\n  }\n\n  if (differentContainer) {\n    return moveOutsideContainer(source, over, overContainer);\n  }\n\n  return null;\n}\n\nfunction moveArray(items, oldIndex, newIndex) {\n  var itemRemovedArray = [].concat(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(items.slice(0, oldIndex)), Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(items.slice(oldIndex + 1, items.length)));\n  return [].concat(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(itemRemovedArray.slice(0, newIndex)), [items[oldIndex]], Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(itemRemovedArray.slice(newIndex, itemRemovedArray.length)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    value: {\n      default: function _default() {\n        return [];\n      },\n      type: Array\n    },\n    group: {\n      type: String,\n      default: 'defaultGroup'\n    },\n    preventReceive: {\n      type: Boolean,\n      default: false\n    },\n    enabled: {\n      type: Boolean,\n      default: true\n    }\n  },\n  data: function data() {\n    return {\n      initDone: false\n    };\n  },\n  mounted: function mounted() {\n    this.init();\n  },\n  destroyed: function destroyed() {\n    this.breakdown();\n  },\n  watch: {\n    enabled: function enabled(val) {\n      if (val) {\n        this.init();\n      } else {\n        this.breakdown();\n      }\n    }\n  },\n  methods: {\n    init: function init() {\n      if (this.enabled && !this.initDone) {\n        this.initDone = true;\n        this.$draggable.addContainer(this.$el);\n        this.$draggable.on('drag:start', this.onDragStart).on('drag:over:container', this.onDragOverContainer).on('drag:out:container', this.onDragOutContainer).on('drag:over', this.onDragOver).on('drag:stop', this.onDragStop);\n      } else {// this.breakdown();\n      }\n    },\n    breakdown: function breakdown() {\n      if (this.initDone) {\n        this.$draggable.removeContainer(this.$el);\n        this.$draggable.off('drag:start', this.onDragStart).off('drag:over:container', this.onDragOverContainer).off('drag:out:container', this.onDragOutContainer).off('drag:over', this.onDragOver).off('drag:stop', this.onDragStop);\n        this.initDone = false;\n      }\n    },\n    shouldIgnore: function shouldIgnore(e) {\n      if (e.oldComponent.group !== this.group) {\n        return true;\n      }\n\n      if (e.oldComponent.value === this.value && e.oldComponent.$el !== this.$el) {\n        return true;\n      }\n\n      if (this.preventReceive) {\n        return true;\n      }\n\n      return false;\n    },\n    getDraggableElementsForContainer: function getDraggableElementsForContainer(container) {\n      var _this = this;\n\n      return Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(container.children).filter(function (childElement) {\n        return childElement !== _this.$draggable.originalSource && childElement !== _this.$draggable.mirror;\n      });\n    },\n    index: function index(element) {\n      return this.getDraggableElementsForContainer(element.parentNode).indexOf(element);\n    },\n    onDragStart: function onDragStart(_event) {\n      var event = _event;\n      this.$emit('start');\n\n      if (event.originalEvent.target.tagName === 'INPUT') {\n        event.cancel();\n        return;\n      }\n\n      if (event.sourceContainer !== this.$el) {\n        return;\n      }\n\n      var oldIndex = this.index(event.source);\n      this.$draggable.trigger(new _events_VueDragStart__WEBPACK_IMPORTED_MODULE_8__[\"default\"](Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, event.data), {}, {\n        sourceComponent: this\n      })));\n      event.source._source = {\n        oldComponent: this,\n        oldIndex: oldIndex,\n        item: this.value[oldIndex]\n      };\n    },\n    onDragOverContainer: function onDragOverContainer(event) {\n      var source = event.source,\n          over = event.over,\n          overContainer = event.overContainer;\n\n      if (overContainer !== this.$el) {\n        return;\n      }\n\n      if (!event.source._source) {\n        return;\n      }\n\n      var e = event.source._source;\n      e.newComponent = this;\n\n      if (this.shouldIgnore(e)) {\n        return;\n      }\n\n      var children = this.getDraggableElementsForContainer(overContainer);\n      move({\n        source: source,\n        over: over,\n        overContainer: overContainer,\n        children: children\n      });\n    },\n    onDragOutContainer: function onDragOutContainer(event) {\n      var source = event.source;\n\n      if (!event.source._source) {\n        return;\n      }\n\n      var e = event.source._source;\n      e.newComponent = null;\n\n      if (this.shouldIgnore(e)) {\n        return;\n      }\n\n      var overContainer = e.oldComponent.$el;\n      var children = this.getDraggableElementsForContainer(overContainer);\n      var over = children[event.source._source.oldIndex];\n      move({\n        source: source,\n        over: over,\n        overContainer: overContainer,\n        children: children\n      });\n    },\n    onDragOver: function onDragOver(event) {\n      if (!event.source._source) {\n        return;\n      }\n\n      var source = event.source,\n          over = event.over,\n          overContainer = event.overContainer;\n\n      if (over === event.originalSource || over === source) {\n        return;\n      }\n\n      if (overContainer !== this.$el) {\n        return;\n      }\n\n      if (!Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this.$el.children).find(function (child) {\n        return child === over;\n      })) {\n        return;\n      }\n\n      var e = source._source;\n      e.newComponent = this;\n\n      if (this.shouldIgnore(e)) {\n        return;\n      }\n\n      var children = this.getDraggableElementsForContainer(overContainer); // console.log('overMove', over)\n\n      move({\n        source: source,\n        over: over,\n        overContainer: overContainer,\n        children: children\n      });\n    },\n    onDragStop: function onDragStop(event) {\n      if (!event.source._source) {\n        return;\n      }\n\n      var e = event.source._source;\n      var belongToSameGroup = e.newComponent && this.group === e.oldComponent.group && e.oldComponent.group === e.newComponent.group;\n\n      if (!belongToSameGroup) {\n        return;\n      }\n\n      var sendingOrReceivingElement = e.newComponent === this || e.oldComponent === this;\n\n      if (!sendingOrReceivingElement) {\n        return;\n      }\n\n      if (e.newComponent.preventReceive) {\n        return;\n      }\n\n      e.newIndex = this.index(event.source);\n      var sameContainer = e.oldComponent === e.newComponent;\n\n      if (sameContainer) {\n        this.onSortItems(e);\n      } else if (e.newComponent === this) {\n        this.onReceiveItem(e); // const canceled = this.onReceiveItem(e);\n        // if (canceled !== false) {\n        //     this.$nextTick(() => {\n        //         event.originalSource.remove();\n        //     });\n        // }\n      } else if (e.oldComponent === this) {\n        this.onRemoveItem(e);\n      }\n    },\n    onSortItems: function onSortItems(e) {\n      if (e.oldIndex === e.newIndex) {\n        return;\n      }\n\n      var newItems = moveArray(this.value, e.oldIndex, e.newIndex);\n      this.$emit('input', newItems);\n      this.$emit('move', Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n        newItems: newItems\n      }, e));\n    },\n    onReceiveItem: function onReceiveItem(e) {\n      if (e.oldComponent.value === this.value) {\n        return;\n      }\n\n      var newItems = Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this.value);\n\n      newItems.splice(e.newIndex, 0, e.item);\n      this.$emit('input', newItems);\n      this.$emit('receive', Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, e), {}, {\n        newItems: newItems\n      }));\n    },\n    onRemoveItem: function onRemoveItem(e) {\n      if (e.newComponent.value === this.value) {\n        return;\n      }\n\n      var newItems = this.value.filter(function (item) {\n        return item !== e.item;\n      });\n      this.$emit('input', newItems);\n      this.$emit('remove', Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, e), {}, {\n        newItems: newItems\n      }));\n    }\n  },\n  render: function render() {\n    return this.$scopedSlots.default({\n      items: this.value\n    })[0];\n  }\n});\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/components/Sortable.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");
    /***/
  },

  /***/
  "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SortableItem.vue?vue&type=script&lang=js&":
  /*!*********************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SortableItem.vue?vue&type=script&lang=js& ***!
    \*********************************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesCacheLoaderDistCjsJsNode_modulesBabelLoaderLibIndexJsNode_modulesCacheLoaderDistCjsJsNode_modulesVueLoaderLibIndexJsSrcComponentsSortableItemVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render(c) {\n    var _objectSpread2;\n\n    var item = this.$scopedSlots.default()[0];\n\n    if (item.tag === undefined) {\n      item = c('span', {}, [item]);\n    }\n\n    var data = item.data || {};\n    data.class = Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, data.class), {}, (_objectSpread2 = {}, Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread2, this.$draggable.options.draggableClass, true), Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread2, this.$draggable.options.dragHandleClass, this.$attrs['with-handle'] === true), _objectSpread2));\n    item.data = data;\n    data.attrs = Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, data.attrs), {}, {\n      'data-draggable-mirror': JSON.stringify(this.$attrs['draggable-mirror'])\n    });\n    return item;\n  }\n});\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/components/SortableItem.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/a-function.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/a-function.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAFunctionJs(module, exports) {
    eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/a-function.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/a-possible-prototype.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAPossiblePrototypeJs(module, exports, __webpack_require__) {
    eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  } return it;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/a-possible-prototype.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/add-to-unscopables.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAddToUnscopablesJs(module, exports, __webpack_require__) {
    eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar UNSCOPABLES = wellKnownSymbol('unscopables');\nvar ArrayPrototype = Array.prototype;\n\n// Array.prototype[@@unscopables]\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\nif (ArrayPrototype[UNSCOPABLES] == undefined) {\n  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {\n    configurable: true,\n    value: create(null)\n  });\n}\n\n// add a key to Array.prototype[@@unscopables]\nmodule.exports = function (key) {\n  ArrayPrototype[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/add-to-unscopables.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/an-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/an-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAnObjectJs(module, exports, __webpack_require__) {
    eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/an-object.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-for-each.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/array-for-each.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayForEachJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('forEach');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\nmodule.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/array-for-each.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-from.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/array-from.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayFromJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"./node_modules/core-js/internals/call-with-safe-iteration-closing.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js/internals/is-array-iterator-method.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\n\n// `Array.from` method implementation\n// https://tc39.github.io/ecma262/#sec-array.from\nmodule.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n  var O = toObject(arrayLike);\n  var C = typeof this == 'function' ? this : Array;\n  var argumentsLength = arguments.length;\n  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;\n  var mapping = mapfn !== undefined;\n  var iteratorMethod = getIteratorMethod(O);\n  var index = 0;\n  var length, result, step, iterator, next, value;\n  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);\n  // if the target is not iterable or it's an array with the default iterator - use a simple case\n  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {\n    iterator = iteratorMethod.call(O);\n    next = iterator.next;\n    result = new C();\n    for (;!(step = next.call(iterator)).done; index++) {\n      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;\n      createProperty(result, index, value);\n    }\n  } else {\n    length = toLength(O.length);\n    result = new C(length);\n    for (;length > index; index++) {\n      value = mapping ? mapfn(O[index], index) : O[index];\n      createProperty(result, index, value);\n    }\n  }\n  result.length = index;\n  return result;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/array-from.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-includes.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/array-includes.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayIncludesJs(module, exports, __webpack_require__) {
    eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/array-includes.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-iteration.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/array-iteration.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayIterationJs(module, exports, __webpack_require__) {
    eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else if (IS_EVERY) return false;  // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6)\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/array-iteration.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-method-has-species-support.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayMethodHasSpeciesSupportJs(module, exports, __webpack_require__) {
    eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/array-method-has-species-support.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-method-is-strict.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayMethodIsStrictJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/array-method-is-strict.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-method-uses-to-length.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayMethodUsesToLengthJs(module, exports, __webpack_require__) {
    eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar defineProperty = Object.defineProperty;\nvar cache = {};\n\nvar thrower = function (it) { throw it; };\n\nmodule.exports = function (METHOD_NAME, options) {\n  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];\n  if (!options) options = {};\n  var method = [][METHOD_NAME];\n  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;\n  var argument0 = has(options, 0) ? options[0] : thrower;\n  var argument1 = has(options, 1) ? options[1] : undefined;\n\n  return cache[METHOD_NAME] = !!method && !fails(function () {\n    if (ACCESSORS && !DESCRIPTORS) return true;\n    var O = { length: -1 };\n\n    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });\n    else O[1] = 1;\n\n    method.call(O, argument0, argument1);\n  });\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/array-method-uses-to-length.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-species-create.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/array-species-create.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArraySpeciesCreateJs(module, exports, __webpack_require__) {
    eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/array-species-create.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCallWithSafeIterationClosingJs(module, exports, __webpack_require__) {
    eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// call something on iterator step with safe closing on error\nmodule.exports = function (iterator, fn, value, ENTRIES) {\n  try {\n    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (error) {\n    var returnMethod = iterator['return'];\n    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));\n    throw error;\n  }\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/call-with-safe-iteration-closing.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/check-correctness-of-iteration.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCheckCorrectnessOfIterationJs(module, exports, __webpack_require__) {
    eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return { done: !!called++ };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(iteratorWithReturn, function () { throw 2; });\n} catch (error) { /* empty */ }\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n  try {\n    var object = {};\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return { done: ITERATION_SUPPORT = true };\n        }\n      };\n    };\n    exec(object);\n  } catch (error) { /* empty */ }\n  return ITERATION_SUPPORT;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/check-correctness-of-iteration.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/classof-raw.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/classof-raw.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsClassofRawJs(module, exports) {
    eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/classof-raw.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/classof.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/internals/classof.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsClassofJs(module, exports, __webpack_require__) {
    eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/classof.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/copy-constructor-properties.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCopyConstructorPropertiesJs(module, exports, __webpack_require__) {
    eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/copy-constructor-properties.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/correct-is-regexp-logic.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCorrectIsRegexpLogicJs(module, exports, __webpack_require__) {
    eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\nmodule.exports = function (METHOD_NAME) {\n  var regexp = /./;\n  try {\n    '/./'[METHOD_NAME](regexp);\n  } catch (e) {\n    try {\n      regexp[MATCH] = false;\n      return '/./'[METHOD_NAME](regexp);\n    } catch (f) { /* empty */ }\n  } return false;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/correct-is-regexp-logic.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/correct-prototype-getter.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCorrectPrototypeGetterJs(module, exports, __webpack_require__) {
    eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/correct-prototype-getter.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/create-iterator-constructor.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreateIteratorConstructorJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\").IteratorPrototype;\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/create-iterator-constructor.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/create-non-enumerable-property.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreateNonEnumerablePropertyJs(module, exports, __webpack_require__) {
    eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/create-non-enumerable-property.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/create-property-descriptor.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreatePropertyDescriptorJs(module, exports) {
    eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/create-property-descriptor.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/create-property.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/create-property.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreatePropertyJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/create-property.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/define-iterator.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/define-iterator.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDefineIteratorJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"./node_modules/core-js/internals/create-iterator-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\");\n\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {\n          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    INCORRECT_VALUES_NAME = true;\n    defaultIterator = function values() { return nativeIterator.call(this); };\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);\n  }\n  Iterators[NAME] = defaultIterator;\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  return methods;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/define-iterator.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/define-well-known-symbol.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDefineWellKnownSymbolJs(module, exports, __webpack_require__) {
    eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js/internals/well-known-symbol-wrapped.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\n\nmodule.exports = function (NAME) {\n  var Symbol = path.Symbol || (path.Symbol = {});\n  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {\n    value: wrappedWellKnownSymbolModule.f(NAME)\n  });\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/define-well-known-symbol.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/descriptors.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/descriptors.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDescriptorsJs(module, exports, __webpack_require__) {
    eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/descriptors.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/document-create-element.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/document-create-element.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDocumentCreateElementJs(module, exports, __webpack_require__) {
    eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/document-create-element.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/dom-iterables.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/dom-iterables.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDomIterablesJs(module, exports) {
    eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/dom-iterables.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/engine-user-agent.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsEngineUserAgentJs(module, exports, __webpack_require__) {
    eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/engine-user-agent.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/engine-v8-version.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsEngineV8VersionJs(module, exports, __webpack_require__) {
    eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/engine-v8-version.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/enum-bug-keys.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsEnumBugKeysJs(module, exports) {
    eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/enum-bug-keys.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/export.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/export.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsExportJs(module, exports, __webpack_require__) {
    eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/export.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/fails.js":
  /*!*************************************************!*\
    !*** ./node_modules/core-js/internals/fails.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFailsJs(module, exports) {
    eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/fails.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/function-bind-context.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js/internals/function-bind-context.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFunctionBindContextJs(module, exports, __webpack_require__) {
    eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/function-bind-context.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/function-bind.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/function-bind.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFunctionBindJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar slice = [].slice;\nvar factories = {};\n\nvar construct = function (C, argsLength, args) {\n  if (!(argsLength in factories)) {\n    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');\n  } return factories[argsLength](C, args);\n};\n\n// `Function.prototype.bind` method implementation\n// https://tc39.github.io/ecma262/#sec-function.prototype.bind\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = slice.call(arguments, 1);\n  var boundFunction = function bound(/* args... */) {\n    var args = partArgs.concat(slice.call(arguments));\n    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);\n  };\n  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;\n  return boundFunction;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/function-bind.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/get-built-in.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/get-built-in.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsGetBuiltInJs(module, exports, __webpack_require__) {
    eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/get-built-in.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/get-iterator-method.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsGetIteratorMethodJs(module, exports, __webpack_require__) {
    eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/get-iterator-method.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/global.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/global.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsGlobalJs(module, exports, __webpack_require__) {
    eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/global.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/has.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/internals/has.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHasJs(module, exports) {
    eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/has.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/hidden-keys.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/hidden-keys.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHiddenKeysJs(module, exports) {
    eval("module.exports = {};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/hidden-keys.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/html.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/internals/html.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHtmlJs(module, exports, __webpack_require__) {
    eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/html.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/ie8-dom-define.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIe8DomDefineJs(module, exports, __webpack_require__) {
    eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/ie8-dom-define.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/indexed-object.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/indexed-object.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIndexedObjectJs(module, exports, __webpack_require__) {
    eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/indexed-object.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/inspect-source.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/inspect-source.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsInspectSourceJs(module, exports, __webpack_require__) {
    eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/inspect-source.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/internal-state.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/internal-state.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsInternalStateJs(module, exports, __webpack_require__) {
    eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/internal-state.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-array-iterator-method.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsArrayIteratorMethodJs(module, exports, __webpack_require__) {
    eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/is-array-iterator-method.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-array.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/is-array.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsArrayJs(module, exports, __webpack_require__) {
    eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/is-array.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-forced.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/is-forced.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsForcedJs(module, exports, __webpack_require__) {
    eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/is-forced.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/is-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsObjectJs(module, exports) {
    eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/is-object.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-pure.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/internals/is-pure.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsPureJs(module, exports) {
    eval("module.exports = false;\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/is-pure.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-regexp.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/is-regexp.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsRegexpJs(module, exports, __webpack_require__) {
    eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\n// `IsRegExp` abstract operation\n// https://tc39.github.io/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/is-regexp.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/iterators-core.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/iterators-core.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIteratorsCoreJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\nvar returnThis = function () { return this; };\n\n// `%IteratorPrototype%` object\n// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nif (IteratorPrototype == undefined) IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\nif (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {\n  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/iterators-core.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/iterators.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/iterators.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIteratorsJs(module, exports) {
    eval("module.exports = {};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/iterators.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/native-symbol.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/native-symbol.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsNativeSymbolJs(module, exports, __webpack_require__) {
    eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/native-symbol.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/native-weak-map.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/native-weak-map.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsNativeWeakMapJs(module, exports, __webpack_require__) {
    eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/native-weak-map.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/not-a-regexp.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsNotARegexpJs(module, exports, __webpack_require__) {
    eval("var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\n\nmodule.exports = function (it) {\n  if (isRegExp(it)) {\n    throw TypeError(\"The method doesn't accept regular expressions\");\n  } return it;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/not-a-regexp.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-create.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/object-create.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectCreateJs(module, exports, __webpack_require__) {
    eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () { /* empty */ };\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n};\n\n// Create object with fake `null` prototype: use ActiveX Object with cleared prototype\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  activeXDocument = null; // avoid memory leak\n  return temp;\n};\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  // https://github.com/zloirock/core-js/issues/475\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n};\n\n// Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\nvar activeXDocument;\nvar NullProtoObject = function () {\n  try {\n    /* global ActiveXObject */\n    activeXDocument = document.domain && new ActiveXObject('htmlfile');\n  } catch (error) { /* ignore */ }\n  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();\n  var length = enumBugKeys.length;\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n// `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/object-create.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-define-properties.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/object-define-properties.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectDefinePropertiesJs(module, exports, __webpack_require__) {
    eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperties\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/object-define-properties.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-define-property.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-define-property.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectDefinePropertyJs(module, exports, __webpack_require__) {
    eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/object-define-property.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertyDescriptorJs(module, exports, __webpack_require__) {
    eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/object-get-own-property-descriptor.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-names-external.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
    \**********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertyNamesExternalJs(module, exports, __webpack_require__) {
    eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\").f;\n\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return nativeGetOwnPropertyNames(it);\n  } catch (error) {\n    return windowNames.slice();\n  }\n};\n\n// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]'\n    ? getWindowNames(it)\n    : nativeGetOwnPropertyNames(toIndexedObject(it));\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/object-get-own-property-names-external.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-names.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertyNamesJs(module, exports, __webpack_require__) {
    eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/object-get-own-property-names.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-symbols.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertySymbolsJs(module, exports) {
    eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/object-get-own-property-symbols.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-prototype-of.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetPrototypeOfJs(module, exports, __webpack_require__) {
    eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar ObjectPrototype = Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/object-get-prototype-of.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-keys-internal.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectKeysInternalJs(module, exports, __webpack_require__) {
    eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/object-keys-internal.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-keys.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/object-keys.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectKeysJs(module, exports, __webpack_require__) {
    eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/object-keys.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-property-is-enumerable.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectPropertyIsEnumerableJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/object-property-is-enumerable.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-set-prototype-of.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectSetPrototypeOfJs(module, exports, __webpack_require__) {
    eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/object-set-prototype-of.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-to-string.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/internals/object-to-string.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectToStringJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\n\n// `Object.prototype.toString` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/object-to-string.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/own-keys.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/own-keys.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsOwnKeysJs(module, exports, __webpack_require__) {
    eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/own-keys.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/path.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/internals/path.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsPathJs(module, exports, __webpack_require__) {
    eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/path.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/redefine.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/redefine.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRedefineJs(module, exports, __webpack_require__) {
    eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/redefine.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/regexp-flags.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/regexp-flags.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRegexpFlagsJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// `RegExp.prototype.flags` getter implementation\n// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.dotAll) result += 's';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/regexp-flags.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/require-object-coercible.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRequireObjectCoercibleJs(module, exports) {
    eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/require-object-coercible.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/set-global.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/set-global.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSetGlobalJs(module, exports, __webpack_require__) {
    eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/set-global.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/set-to-string-tag.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSetToStringTagJs(module, exports, __webpack_require__) {
    eval("var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC) {\n  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {\n    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });\n  }\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/set-to-string-tag.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/shared-key.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/shared-key.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedKeyJs(module, exports, __webpack_require__) {
    eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/shared-key.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/shared-store.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/shared-store.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedStoreJs(module, exports, __webpack_require__) {
    eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/shared-store.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/shared.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/shared.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedJs(module, exports, __webpack_require__) {
    eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.6.5',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/shared.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/string-multibyte.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/internals/string-multibyte.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsStringMultibyteJs(module, exports, __webpack_require__) {
    eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/string-multibyte.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/to-absolute-index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToAbsoluteIndexJs(module, exports, __webpack_require__) {
    eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/to-absolute-index.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/to-indexed-object.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToIndexedObjectJs(module, exports, __webpack_require__) {
    eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/to-indexed-object.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/to-integer.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/to-integer.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToIntegerJs(module, exports) {
    eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/to-integer.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/to-length.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/to-length.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToLengthJs(module, exports, __webpack_require__) {
    eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/to-length.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/to-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/to-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToObjectJs(module, exports, __webpack_require__) {
    eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/to-object.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/to-primitive.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/to-primitive.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToPrimitiveJs(module, exports, __webpack_require__) {
    eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/to-primitive.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/to-string-tag-support.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToStringTagSupportJs(module, exports, __webpack_require__) {
    eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/to-string-tag-support.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/uid.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/internals/uid.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsUidJs(module, exports) {
    eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/uid.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/use-symbol-as-uid.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsUseSymbolAsUidJs(module, exports, __webpack_require__) {
    eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  // eslint-disable-next-line no-undef\n  && !Symbol.sham\n  // eslint-disable-next-line no-undef\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/use-symbol-as-uid.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsWellKnownSymbolWrappedJs(module, exports, __webpack_require__) {
    eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nexports.f = wellKnownSymbol;\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/well-known-symbol-wrapped.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/well-known-symbol.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsWellKnownSymbolJs(module, exports, __webpack_require__) {
    eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name)) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];\n    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/internals/well-known-symbol.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.concat.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.concat.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayConcatJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\n\n// We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  concat: function concat(arg) { // eslint-disable-line no-unused-vars\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = toLength(E.length);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.array.concat.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.filter.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.filter.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayFilterJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $filter = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").filter;\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');\n// Edge 14- issue\nvar USES_TO_LENGTH = arrayMethodUsesToLength('filter');\n\n// `Array.prototype.filter` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.filter\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.array.filter.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.find.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.find.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayFindJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $find = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").find;\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar FIND = 'find';\nvar SKIPS_HOLES = true;\n\nvar USES_TO_LENGTH = arrayMethodUsesToLength(FIND);\n\n// Shouldn't skip holes\nif (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });\n\n// `Array.prototype.find` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.find\n$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables(FIND);\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.array.find.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.for-each.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayForEachJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\n\n// `Array.prototype.forEach` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.array.for-each.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.from.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.from.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayFromJs(module, exports, __webpack_require__) {
    eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar from = __webpack_require__(/*! ../internals/array-from */ \"./node_modules/core-js/internals/array-from.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js/internals/check-correctness-of-iteration.js\");\n\nvar INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {\n  Array.from(iterable);\n});\n\n// `Array.from` method\n// https://tc39.github.io/ecma262/#sec-array.from\n$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {\n  from: from\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.array.from.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.includes.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.includes.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayIncludesJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $includes = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").includes;\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });\n\n// `Array.prototype.includes` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.includes\n$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('includes');\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.array.includes.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.index-of.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayIndexOfJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar nativeIndexOf = [].indexOf;\n\nvar NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;\nvar STRICT_METHOD = arrayMethodIsStrict('indexOf');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });\n\n// `Array.prototype.indexOf` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? nativeIndexOf.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.array.index-of.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.iterator.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayIteratorJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js/internals/define-iterator.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.github.io/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return { value: undefined, done: true };\n  }\n  if (kind == 'keys') return { value: index, done: false };\n  if (kind == 'values') return { value: target[index], done: false };\n  return { value: [index, target[index]], done: false };\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject\nIterators.Arguments = Iterators.Array;\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.array.iterator.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.slice.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.slice.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArraySliceJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });\n\nvar SPECIES = wellKnownSymbol('species');\nvar nativeSlice = [].slice;\nvar max = Math.max;\n\n// `Array.prototype.slice` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.slice\n// fallback for not array-like ES3 strings and DOM objects\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {\n  slice: function slice(start, end) {\n    var O = toIndexedObject(this);\n    var length = toLength(O.length);\n    var k = toAbsoluteIndex(start, length);\n    var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible\n    var Constructor, result, n;\n    if (isArray(O)) {\n      Constructor = O.constructor;\n      // cross-realm fallback\n      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {\n        Constructor = undefined;\n      } else if (isObject(Constructor)) {\n        Constructor = Constructor[SPECIES];\n        if (Constructor === null) Constructor = undefined;\n      }\n      if (Constructor === Array || Constructor === undefined) {\n        return nativeSlice.call(O, k, fin);\n      }\n    }\n    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));\n    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);\n    result.length = n;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.array.slice.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.some.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.some.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArraySomeJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $some = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").some;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('some');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('some');\n\n// `Array.prototype.some` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.some\n$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {\n  some: function some(callbackfn /* , thisArg */) {\n    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.array.some.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.splice.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.splice.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArraySpliceJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });\n\nvar max = Math.max;\nvar min = Math.min;\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';\n\n// `Array.prototype.splice` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.splice\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {\n  splice: function splice(start, deleteCount /* , ...items */) {\n    var O = toObject(this);\n    var len = toLength(O.length);\n    var actualStart = toAbsoluteIndex(start, len);\n    var argumentsLength = arguments.length;\n    var insertCount, actualDeleteCount, A, k, from, to;\n    if (argumentsLength === 0) {\n      insertCount = actualDeleteCount = 0;\n    } else if (argumentsLength === 1) {\n      insertCount = 0;\n      actualDeleteCount = len - actualStart;\n    } else {\n      insertCount = argumentsLength - 2;\n      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);\n    }\n    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {\n      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);\n    }\n    A = arraySpeciesCreate(O, actualDeleteCount);\n    for (k = 0; k < actualDeleteCount; k++) {\n      from = actualStart + k;\n      if (from in O) createProperty(A, k, O[from]);\n    }\n    A.length = actualDeleteCount;\n    if (insertCount < actualDeleteCount) {\n      for (k = actualStart; k < len - actualDeleteCount; k++) {\n        from = k + actualDeleteCount;\n        to = k + insertCount;\n        if (from in O) O[to] = O[from];\n        else delete O[to];\n      }\n      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];\n    } else if (insertCount > actualDeleteCount) {\n      for (k = len - actualDeleteCount; k > actualStart; k--) {\n        from = k + actualDeleteCount - 1;\n        to = k + insertCount - 1;\n        if (from in O) O[to] = O[from];\n        else delete O[to];\n      }\n    }\n    for (k = 0; k < insertCount; k++) {\n      O[k + actualStart] = arguments[k + 2];\n    }\n    O.length = len - actualDeleteCount + insertCount;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.array.splice.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.function.name.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/modules/es.function.name.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsFunctionNameJs(module, exports, __webpack_require__) {
    eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\n\nvar FunctionPrototype = Function.prototype;\nvar FunctionPrototypeToString = FunctionPrototype.toString;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// Function instances `.name` property\n// https://tc39.github.io/ecma262/#sec-function-instances-name\nif (DESCRIPTORS && !(NAME in FunctionPrototype)) {\n  defineProperty(FunctionPrototype, NAME, {\n    configurable: true,\n    get: function () {\n      try {\n        return FunctionPrototypeToString.call(this).match(nameRE)[1];\n      } catch (error) {\n        return '';\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.function.name.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsObjectGetOwnPropertyDescriptorJs(module, exports, __webpack_require__) {
    eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });\nvar FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\n$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {\n    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);\n  }\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.object.get-own-property-descriptor.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
    \********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsObjectGetOwnPropertyDescriptorsJs(module, exports, __webpack_require__) {
    eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\n\n// `Object.getOwnPropertyDescriptors` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors\n$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIndexedObject(object);\n    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var index = 0;\n    var key, descriptor;\n    while (keys.length > index) {\n      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);\n      if (descriptor !== undefined) createProperty(result, key, descriptor);\n    }\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.object.get-own-property-descriptors.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.object.get-prototype-of.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/modules/es.object.get-prototype-of.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsObjectGetPrototypeOfJs(module, exports, __webpack_require__) {
    eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js/internals/correct-prototype-getter.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {\n  getPrototypeOf: function getPrototypeOf(it) {\n    return nativeGetPrototypeOf(toObject(it));\n  }\n});\n\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.object.get-prototype-of.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.object.keys.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/es.object.keys.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsObjectKeysJs(module, exports, __webpack_require__) {
    eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar nativeKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {\n  keys: function keys(it) {\n    return nativeKeys(toObject(it));\n  }\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.object.keys.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.object.to-string.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsObjectToStringJs(module, exports, __webpack_require__) {
    eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"./node_modules/core-js/internals/object-to-string.js\");\n\n// `Object.prototype.toString` method\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nif (!TO_STRING_TAG_SUPPORT) {\n  redefine(Object.prototype, 'toString', toString, { unsafe: true });\n}\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.object.to-string.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.reflect.construct.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.construct.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectConstructJs(module, exports, __webpack_require__) {
    eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind */ \"./node_modules/core-js/internals/function-bind.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar nativeConstruct = getBuiltIn('Reflect', 'construct');\n\n// `Reflect.construct` method\n// https://tc39.github.io/ecma262/#sec-reflect.construct\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() { /* empty */ }\n  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  nativeConstruct(function () { /* empty */ });\n});\nvar FORCED = NEW_TARGET_BUG || ARGS_BUG;\n\n$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0: return new Target();\n        case 1: return new Target(args[0]);\n        case 2: return new Target(args[0], args[1]);\n        case 3: return new Target(args[0], args[1], args[2]);\n        case 4: return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.reflect.construct.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.regexp.to-string.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsRegexpToStringJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar flags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\n\nvar TO_STRING = 'toString';\nvar RegExpPrototype = RegExp.prototype;\nvar nativeToString = RegExpPrototype[TO_STRING];\n\nvar NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });\n// FF44- RegExp#toString has a wrong name\nvar INCORRECT_NAME = nativeToString.name != TO_STRING;\n\n// `RegExp.prototype.toString` method\n// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring\nif (NOT_GENERIC || INCORRECT_NAME) {\n  redefine(RegExp.prototype, TO_STRING, function toString() {\n    var R = anObject(this);\n    var p = String(R.source);\n    var rf = R.flags;\n    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);\n    return '/' + p + '/' + f;\n  }, { unsafe: true });\n}\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.regexp.to-string.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.string.includes.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.includes.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsStringIncludesJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js/internals/correct-is-regexp-logic.js\");\n\n// `String.prototype.includes` method\n// https://tc39.github.io/ecma262/#sec-string.prototype.includes\n$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~String(requireObjectCoercible(this))\n      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.string.includes.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.string.iterator.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsStringIteratorJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js/internals/string-multibyte.js\").charAt;\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js/internals/define-iterator.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);\n\n// `String.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: String(iterated),\n    index: 0\n  });\n// `%StringIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return { value: undefined, done: true };\n  point = charAt(string, index);\n  state.index += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.string.iterator.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.symbol.description.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsSymbolDescriptionJs(module, exports, __webpack_require__) {
    "use strict";

    eval("// `Symbol.prototype.description` getter\n// https://tc39.github.io/ecma262/#sec-symbol.prototype.description\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\n\nvar NativeSymbol = global.Symbol;\n\nif (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||\n  // Safari 12 bug\n  NativeSymbol().description !== undefined\n)) {\n  var EmptyStringDescriptionStore = {};\n  // wrap Symbol constructor for correct work with undefined description\n  var SymbolWrapper = function Symbol() {\n    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var result = this instanceof SymbolWrapper\n      ? new NativeSymbol(description)\n      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'\n      : description === undefined ? NativeSymbol() : NativeSymbol(description);\n    if (description === '') EmptyStringDescriptionStore[result] = true;\n    return result;\n  };\n  copyConstructorProperties(SymbolWrapper, NativeSymbol);\n  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;\n  symbolPrototype.constructor = SymbolWrapper;\n\n  var symbolToString = symbolPrototype.toString;\n  var native = String(NativeSymbol('test')) == 'Symbol(test)';\n  var regexp = /^Symbol\\((.*)\\)[^)]+$/;\n  defineProperty(symbolPrototype, 'description', {\n    configurable: true,\n    get: function description() {\n      var symbol = isObject(this) ? this.valueOf() : this;\n      var string = symbolToString.call(symbol);\n      if (has(EmptyStringDescriptionStore, symbol)) return '';\n      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');\n      return desc === '' ? undefined : desc;\n    }\n  });\n\n  $({ global: true, forced: true }, {\n    Symbol: SymbolWrapper\n  });\n}\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.symbol.description.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.symbol.iterator.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsSymbolIteratorJs(module, exports, __webpack_require__) {
    eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\n\n// `Symbol.iterator` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.iterator\ndefineWellKnownSymbol('iterator');\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.symbol.iterator.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.symbol.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/modules/es.symbol.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsSymbolJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"./node_modules/core-js/internals/object-get-own-property-names-external.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js/internals/well-known-symbol-wrapped.js\");\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js/internals/define-well-known-symbol.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach;\n\nvar HIDDEN = sharedKey('hidden');\nvar SYMBOL = 'Symbol';\nvar PROTOTYPE = 'prototype';\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(SYMBOL);\nvar ObjectPrototype = Object[PROTOTYPE];\nvar $Symbol = global.Symbol;\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\nvar nativeDefineProperty = definePropertyModule.f;\nvar nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;\nvar nativePropertyIsEnumerable = propertyIsEnumerableModule.f;\nvar AllSymbols = shared('symbols');\nvar ObjectPrototypeSymbols = shared('op-symbols');\nvar StringToSymbolRegistry = shared('string-to-symbol-registry');\nvar SymbolToStringRegistry = shared('symbol-to-string-registry');\nvar WellKnownSymbolsStore = shared('wks');\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDescriptor = DESCRIPTORS && fails(function () {\n  return nativeObjectCreate(nativeDefineProperty({}, 'a', {\n    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (O, P, Attributes) {\n  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);\n  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];\n  nativeDefineProperty(O, P, Attributes);\n  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {\n    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);\n  }\n} : nativeDefineProperty;\n\nvar wrap = function (tag, description) {\n  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);\n  setInternalState(symbol, {\n    type: SYMBOL,\n    tag: tag,\n    description: description\n  });\n  if (!DESCRIPTORS) symbol.description = description;\n  return symbol;\n};\n\nvar isSymbol = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return Object(it) instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(O, P, Attributes) {\n  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);\n  anObject(O);\n  var key = toPrimitive(P, true);\n  anObject(Attributes);\n  if (has(AllSymbols, key)) {\n    if (!Attributes.enumerable) {\n      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));\n      O[HIDDEN][key] = true;\n    } else {\n      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;\n      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });\n    } return setSymbolDescriptor(O, key, Attributes);\n  } return nativeDefineProperty(O, key, Attributes);\n};\n\nvar $defineProperties = function defineProperties(O, Properties) {\n  anObject(O);\n  var properties = toIndexedObject(Properties);\n  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));\n  $forEach(keys, function (key) {\n    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);\n  });\n  return O;\n};\n\nvar $create = function create(O, Properties) {\n  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);\n};\n\nvar $propertyIsEnumerable = function propertyIsEnumerable(V) {\n  var P = toPrimitive(V, true);\n  var enumerable = nativePropertyIsEnumerable.call(this, P);\n  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;\n  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;\n};\n\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {\n  var it = toIndexedObject(O);\n  var key = toPrimitive(P, true);\n  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;\n  var descriptor = nativeGetOwnPropertyDescriptor(it, key);\n  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {\n    descriptor.enumerable = true;\n  }\n  return descriptor;\n};\n\nvar $getOwnPropertyNames = function getOwnPropertyNames(O) {\n  var names = nativeGetOwnPropertyNames(toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);\n  });\n  return result;\n};\n\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(O) {\n  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;\n  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {\n      result.push(AllSymbols[key]);\n    }\n  });\n  return result;\n};\n\n// `Symbol` constructor\n// https://tc39.github.io/ecma262/#sec-symbol-constructor\nif (!NATIVE_SYMBOL) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');\n    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var tag = uid(description);\n    var setter = function (value) {\n      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));\n    };\n    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });\n    return wrap(tag, description);\n  };\n\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return getInternalState(this).tag;\n  });\n\n  redefine($Symbol, 'withoutSetter', function (description) {\n    return wrap(uid(description), description);\n  });\n\n  propertyIsEnumerableModule.f = $propertyIsEnumerable;\n  definePropertyModule.f = $defineProperty;\n  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;\n  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;\n  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;\n\n  wrappedWellKnownSymbolModule.f = function (name) {\n    return wrap(wellKnownSymbol(name), name);\n  };\n\n  if (DESCRIPTORS) {\n    // https://github.com/tc39/proposal-Symbol-description\n    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {\n      configurable: true,\n      get: function description() {\n        return getInternalState(this).description;\n      }\n    });\n    if (!IS_PURE) {\n      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });\n    }\n  }\n}\n\n$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {\n  Symbol: $Symbol\n});\n\n$forEach(objectKeys(WellKnownSymbolsStore), function (name) {\n  defineWellKnownSymbol(name);\n});\n\n$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Symbol.for` method\n  // https://tc39.github.io/ecma262/#sec-symbol.for\n  'for': function (key) {\n    var string = String(key);\n    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];\n    var symbol = $Symbol(string);\n    StringToSymbolRegistry[string] = symbol;\n    SymbolToStringRegistry[symbol] = string;\n    return symbol;\n  },\n  // `Symbol.keyFor` method\n  // https://tc39.github.io/ecma262/#sec-symbol.keyfor\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');\n    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];\n  },\n  useSetter: function () { USE_SETTER = true; },\n  useSimple: function () { USE_SETTER = false; }\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {\n  // `Object.create` method\n  // https://tc39.github.io/ecma262/#sec-object.create\n  create: $create,\n  // `Object.defineProperty` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperty\n  defineProperty: $defineProperty,\n  // `Object.defineProperties` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperties\n  defineProperties: $defineProperties,\n  // `Object.getOwnPropertyDescriptor` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor\n});\n\n$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {\n  // `Object.getOwnPropertyNames` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // `Object.getOwnPropertySymbols` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\n$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return getOwnPropertySymbolsModule.f(toObject(it));\n  }\n});\n\n// `JSON.stringify` method behavior with symbols\n// https://tc39.github.io/ecma262/#sec-json.stringify\nif ($stringify) {\n  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {\n    var symbol = $Symbol();\n    // MS Edge converts symbol values to JSON as {}\n    return $stringify([symbol]) != '[null]'\n      // WebKit converts symbol values to JSON as null\n      || $stringify({ a: symbol }) != '{}'\n      // V8 throws on boxed symbols\n      || $stringify(Object(symbol)) != '{}';\n  });\n\n  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {\n    // eslint-disable-next-line no-unused-vars\n    stringify: function stringify(it, replacer, space) {\n      var args = [it];\n      var index = 1;\n      var $replacer;\n      while (arguments.length > index) args.push(arguments[index++]);\n      $replacer = replacer;\n      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n      if (!isArray(replacer)) replacer = function (key, value) {\n        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n        if (!isSymbol(value)) return value;\n      };\n      args[1] = replacer;\n      return $stringify.apply(null, args);\n    }\n  });\n}\n\n// `Symbol.prototype[@@toPrimitive]` method\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive\nif (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {\n  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n}\n// `Symbol.prototype[@@toStringTag]` property\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag\nsetToStringTag($Symbol, SYMBOL);\n\nhiddenKeys[HIDDEN] = true;\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/es.symbol.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/web.dom-collections.for-each.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesWebDomCollectionsForEachJs(module, exports, __webpack_require__) {
    eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n}\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/web.dom-collections.for-each.js?");
    /***/
  },

  /***/
  "./node_modules/core-js/modules/web.dom-collections.iterator.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesWebDomCollectionsIteratorJs(module, exports, __webpack_require__) {
    eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar ArrayValues = ArrayIteratorMethods.values;\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  if (CollectionPrototype) {\n    // some Chrome versions have non-configurable methods on DOMTokenList\n    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {\n      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);\n    } catch (error) {\n      CollectionPrototype[ITERATOR] = ArrayValues;\n    }\n    if (!CollectionPrototype[TO_STRING_TAG]) {\n      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n    }\n    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {\n      // some Chrome versions have non-configurable methods on DOMTokenList\n      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {\n        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);\n      } catch (error) {\n        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/core-js/modules/web.dom-collections.iterator.js?");
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
  /*!********************************************************************!*\
    !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesVueLoaderLibRuntimeComponentNormalizerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/(webpack)/buildin/global.js?");
    /***/
  },

  /***/
  "./src/components/Draggable.vue":
  /*!**************************************!*\
    !*** ./src/components/Draggable.vue ***!
    \**************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsDraggableVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Draggable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draggable.vue?vue&type=script&lang=js& */ \"./src/components/Draggable.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _Draggable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Draggable.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/components/Draggable.vue?");
    /***/
  },

  /***/
  "./src/components/Draggable.vue?vue&type=script&lang=js&":
  /*!***************************************************************!*\
    !*** ./src/components/Draggable.vue?vue&type=script&lang=js& ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsDraggableVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Draggable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Draggable.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Draggable.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Draggable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/components/Draggable.vue?");
    /***/
  },

  /***/
  "./src/components/Dropzone.vue":
  /*!*************************************!*\
    !*** ./src/components/Dropzone.vue ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsDropzoneVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dropzone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropzone.vue?vue&type=script&lang=js& */ \"./src/components/Dropzone.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _Dropzone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Dropzone.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/components/Dropzone.vue?");
    /***/
  },

  /***/
  "./src/components/Dropzone.vue?vue&type=script&lang=js&":
  /*!**************************************************************!*\
    !*** ./src/components/Dropzone.vue?vue&type=script&lang=js& ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsDropzoneVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropzone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Dropzone.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Dropzone.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropzone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/components/Dropzone.vue?");
    /***/
  },

  /***/
  "./src/components/Sortable.vue":
  /*!*************************************!*\
    !*** ./src/components/Sortable.vue ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsSortableVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Sortable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sortable.vue?vue&type=script&lang=js& */ \"./src/components/Sortable.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _Sortable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Sortable.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/components/Sortable.vue?");
    /***/
  },

  /***/
  "./src/components/Sortable.vue?vue&type=script&lang=js&":
  /*!**************************************************************!*\
    !*** ./src/components/Sortable.vue?vue&type=script&lang=js& ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsSortableVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sortable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Sortable.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Sortable.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sortable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/components/Sortable.vue?");
    /***/
  },

  /***/
  "./src/components/SortableItem.vue":
  /*!*****************************************!*\
    !*** ./src/components/SortableItem.vue ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsSortableItemVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SortableItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortableItem.vue?vue&type=script&lang=js& */ \"./src/components/SortableItem.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _SortableItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/SortableItem.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/components/SortableItem.vue?");
    /***/
  },

  /***/
  "./src/components/SortableItem.vue?vue&type=script&lang=js&":
  /*!******************************************************************!*\
    !*** ./src/components/SortableItem.vue?vue&type=script&lang=js& ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsSortableItemVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortableItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./SortableItem.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SortableItem.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortableItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/components/SortableItem.vue?");
    /***/
  },

  /***/
  "./src/events/AbstractEvent.js":
  /*!*************************************!*\
    !*** ./src/events/AbstractEvent.js ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcEventsAbstractEventJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AbstractEvent; });\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\n\n\n\n\nvar _canceled = Symbol('canceled');\n/**\n* All events fired by draggable inherit this class. You can call `cancel()` to\n * cancel a specific event or you can check if an event has been canceled by\n * calling `canceled()`.\n * @abstract\n * @class AbstractEvent\n * @module AbstractEvent\n */\n\n\nvar AbstractEvent = /*#__PURE__*/function () {\n  /**\n   * Event type\n   * @static\n   * @abstract\n   * @property type\n   * @type {String}\n   */\n\n  /**\n   * Event cancelable\n   * @static\n   * @abstract\n   * @property cancelable\n   * @type {Boolean}\n   */\n\n  /**\n   * AbstractEvent constructor.\n   * @constructs AbstractEvent\n   * @param {object} data - Event data\n   */\n  function AbstractEvent(data) {\n    Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, AbstractEvent);\n\n    this[_canceled] = false;\n    this.data = data;\n  }\n  /**\n   * Read-only type\n   * @abstract\n   * @return {String}\n   */\n\n\n  Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(AbstractEvent, [{\n    key: \"cancel\",\n\n    /**\n     * Cancels the event instance\n     * @abstract\n     */\n    value: function cancel() {\n      this[_canceled] = true;\n    }\n    /**\n     * Check if event has been canceled\n     * @abstract\n     * @return {Boolean}\n     */\n\n  }, {\n    key: \"canceled\",\n    value: function canceled() {\n      return Boolean(this[_canceled]);\n    }\n    /**\n     * Returns new event instance with existing event data.\n     * This method allows for overriding of event data.\n     * @param {Object} data\n     * @return {AbstractEvent}\n     */\n\n  }, {\n    key: \"clone\",\n    value: function clone(data) {\n      return new this.constructor(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, this.data), data));\n    }\n  }, {\n    key: \"type\",\n    get: function get() {\n      return this.constructor.type;\n    }\n    /**\n     * Read-only cancelable\n     * @abstract\n     * @return {Boolean}\n     */\n\n  }, {\n    key: \"cancelable\",\n    get: function get() {\n      return this.constructor.cancelable;\n    }\n  }]);\n\n  return AbstractEvent;\n}();\n\nObject(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(AbstractEvent, \"type\", 'event');\n\nObject(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(AbstractEvent, \"cancelable\", false);\n\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/events/AbstractEvent.js?");
    /***/
  },

  /***/
  "./src/events/VueDragStart.js":
  /*!************************************!*\
    !*** ./src/events/VueDragStart.js ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcEventsVueDragStartJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VueDragStart; });\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _AbstractEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AbstractEvent */ \"./src/events/AbstractEvent.js\");\n\n\n\n\n\n\n\nvar VueDragStart = /*#__PURE__*/function (_AbstractEvent) {\n  Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(VueDragStart, _AbstractEvent);\n\n  var _super = Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(VueDragStart);\n\n  function VueDragStart() {\n    Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, VueDragStart);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(VueDragStart, [{\n    key: \"sourceComponent\",\n    get: function get() {\n      return this.data.sourceComponent;\n    }\n  }]);\n\n  return VueDragStart;\n}(_AbstractEvent__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\nObject(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(VueDragStart, \"type\", 'vue:drag:start');\n\n\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/events/VueDragStart.js?");
    /***/
  },

  /***/
  "./src/index.js":
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/

  /*! exports provided: default */

  /***/
  function srcIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var _shopify_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/draggable */ \"./node_modules/@shopify/draggable/lib/draggable.bundle.js\");\n/* harmony import */ var _shopify_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_draggable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Dropzone_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Dropzone.vue */ \"./src/components/Dropzone.vue\");\n/* harmony import */ var _components_Sortable_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Sortable.vue */ \"./src/components/Sortable.vue\");\n/* harmony import */ var _components_SortableItem_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SortableItem.vue */ \"./src/components/SortableItem.vue\");\n/* harmony import */ var _components_Draggable_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Draggable.vue */ \"./src/components/Draggable.vue\");\n\n// const { Draggable } = require(\"@shopify/draggable\");\n// import wtf from \"@shopify/draggable\";\n\n\n\n\n // draggable api: https://github.com/Shopify/draggable/issues/372\n\ndelete _shopify_draggable__WEBPACK_IMPORTED_MODULE_1__[\"Draggable\"].Plugins.Focusable;\nvar VuePlugin = {};\n\nVuePlugin.install = function install(_Vue) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var Vue = _Vue;\n  var draggableClass = 'draggable-item';\n  var dragHandleClass = 'drag-handle';\n  var ignoreHandleClassList = ['drag-ignore-handle', 'scrollable'];\n  var defaultOpts = {\n    draggableClass: draggableClass,\n    dragHandleClass: dragHandleClass,\n    delay: 150,\n    distance: 0,\n    tresholdDistance: 2,\n    draggable: \".\".concat(draggableClass),\n    handle: \".\".concat(dragHandleClass),\n    ignoreHandleClassList: ignoreHandleClassList,\n    mirror: {\n      constrainDimensions: true\n    },\n    appendTo: 'body',\n    scrollable: {\n      speed: 20,\n      sensitivity: 80\n    },\n    plugins: []\n  };\n  console.log(options);\n  Vue.prototype.$draggable = new _shopify_draggable__WEBPACK_IMPORTED_MODULE_1__[\"Draggable\"]([], Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(C_hips_shopify_draggable_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, defaultOpts), {}, {\n    options: options\n  }));\n  Vue.prototype.$draggable.removePlugin(_shopify_draggable__WEBPACK_IMPORTED_MODULE_1__[\"Draggable\"].Plugins.Focusable);\n  Vue.directive('DragHandle', {\n    inserted: function inserted(el) {\n      if (el.getAttribute('drag-disabled') !== 'true') {\n        el.classList.add(dragHandleClass);\n      }\n    },\n    update: function update(el) {\n      if (el.getAttribute('drag-disabled') !== 'true') {\n        el.classList.add(dragHandleClass);\n      }\n    }\n  });\n  Vue.component('Dropzone', _components_Dropzone_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  Vue.component('Sortable', _components_Sortable_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  Vue.component('SortableItem', _components_SortableItem_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  Vue.component('Draggable', _components_Draggable_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  Vue.mixin({\n    mounted: function mounted() {\n      if (!this.$parent) {\n        this.$draggable.addContainer(this.$el);\n      }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VuePlugin);\n\n//# sourceURL=webpack://ShopifyDraggablePlugin/./src/index.js?");
    /***/
  }
  /******/

});

/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("42a2"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "1a8c":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "1ad1":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("0fef");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "1b44":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("1301");
var nativeGetOwnPropertyNames = __webpack_require__("5665").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "1bac":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("7d1f"),
    getSymbolsIn = __webpack_require__("a029"),
    keysIn = __webpack_require__("9934");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c3c":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    Uint8Array = __webpack_require__("2474"),
    eq = __webpack_require__("9638"),
    equalArrays = __webpack_require__("a2be"),
    mapToArray = __webpack_require__("edfa"),
    setToArray = __webpack_require__("ac41");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "1cec":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1efc":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "1fc8":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "20eb":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dd7b");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "20ec":
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "234d":
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__("e380");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "242e":
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__("72af"),
    keys = __webpack_require__("ec69");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "2474":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "2478":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "2524":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("0fef");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "25241":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "253c":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "26e8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "2768":
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),

/***/ "2769":
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__("5ca0"),
    findIndex = __webpack_require__("51f5");

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ "28c9":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "29f3":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "2b03":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "2b3e":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("585a");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "2d73":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6691");
var shared = __webpack_require__("4787");
var has = __webpack_require__("3f5a");
var uid = __webpack_require__("8427");
var NATIVE_SYMBOL = __webpack_require__("1ad1");
var USE_SYMBOL_AS_UID = __webpack_require__("d085");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "2d7c":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "2dcb":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("91e9");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "2fcc":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "2fe4":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("ba94");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "30c9":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isLength = __webpack_require__("b218");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "3114":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("c378");
var classof = __webpack_require__("7815");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "31a5":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("4933");
var global = __webpack_require__("6691");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "3215":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("e3b4");
var global = __webpack_require__("6691");
var getBuiltIn = __webpack_require__("31a5");
var IS_PURE = __webpack_require__("af2b");
var DESCRIPTORS = __webpack_require__("2524");
var NATIVE_SYMBOL = __webpack_require__("1ad1");
var USE_SYMBOL_AS_UID = __webpack_require__("d085");
var fails = __webpack_require__("0fef");
var has = __webpack_require__("3f5a");
var isArray = __webpack_require__("5a09");
var isObject = __webpack_require__("dd7b");
var anObject = __webpack_require__("6ef8");
var toObject = __webpack_require__("e3fb");
var toIndexedObject = __webpack_require__("1301");
var toPrimitive = __webpack_require__("20eb");
var createPropertyDescriptor = __webpack_require__("bd01");
var nativeObjectCreate = __webpack_require__("a49e");
var objectKeys = __webpack_require__("c587");
var getOwnPropertyNamesModule = __webpack_require__("5665");
var getOwnPropertyNamesExternal = __webpack_require__("1b44");
var getOwnPropertySymbolsModule = __webpack_require__("d9f2");
var getOwnPropertyDescriptorModule = __webpack_require__("07e5");
var definePropertyModule = __webpack_require__("4d54");
var propertyIsEnumerableModule = __webpack_require__("bb92");
var createNonEnumerableProperty = __webpack_require__("0544");
var redefine = __webpack_require__("51bf");
var shared = __webpack_require__("4787");
var sharedKey = __webpack_require__("4fa7");
var hiddenKeys = __webpack_require__("612e");
var uid = __webpack_require__("8427");
var wellKnownSymbol = __webpack_require__("2d73");
var wrappedWellKnownSymbolModule = __webpack_require__("f1a0");
var defineWellKnownSymbol = __webpack_require__("4424");
var setToStringTag = __webpack_require__("88ff");
var InternalStateModule = __webpack_require__("4e9e");
var $forEach = __webpack_require__("e3a2").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "3262":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c757");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "32b3":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("872a"),
    eq = __webpack_require__("9638");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "32f4":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("2d7c"),
    stubArray = __webpack_require__("d327");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "34ac":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isMasked = __webpack_require__("1368"),
    isObject = __webpack_require__("1a8c"),
    toSource = __webpack_require__("dc57");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "3698":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "3729":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    getRawTag = __webpack_require__("00fd"),
    objectToString = __webpack_require__("29f3");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3818":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("7e64"),
    arrayEach = __webpack_require__("8057"),
    assignValue = __webpack_require__("32b3"),
    baseAssign = __webpack_require__("5b01"),
    baseAssignIn = __webpack_require__("0f0f"),
    cloneBuffer = __webpack_require__("e5383"),
    copyArray = __webpack_require__("4359"),
    copySymbols = __webpack_require__("54eb"),
    copySymbolsIn = __webpack_require__("1041"),
    getAllKeys = __webpack_require__("a994"),
    getAllKeysIn = __webpack_require__("1bac"),
    getTag = __webpack_require__("42a2"),
    initCloneArray = __webpack_require__("c87c"),
    initCloneByTag = __webpack_require__("c2b6"),
    initCloneObject = __webpack_require__("fa21"),
    isArray = __webpack_require__("6747"),
    isBuffer = __webpack_require__("0d24"),
    isMap = __webpack_require__("cc45"),
    isObject = __webpack_require__("1a8c"),
    isSet = __webpack_require__("d7ee"),
    keys = __webpack_require__("ec69");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "39ff":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "3b4a":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "3bb4":
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__("08cc"),
    keys = __webpack_require__("ec69");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f5a":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "41c3":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c"),
    isPrototype = __webpack_require__("eac5"),
    nativeKeysIn = __webpack_require__("ec8c");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "4245":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("1290");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "4284":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "42a2":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("b5a7"),
    Map = __webpack_require__("79bc"),
    Promise = __webpack_require__("1cec"),
    Set = __webpack_require__("c869"),
    WeakMap = __webpack_require__("39ff"),
    baseGetTag = __webpack_require__("3729"),
    toSource = __webpack_require__("dc57");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "434f":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "4359":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "4424":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("4933");
var has = __webpack_require__("3f5a");
var wrappedWellKnownSymbolModule = __webpack_require__("f1a0");
var defineProperty = __webpack_require__("4d54").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "4787":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("af2b");
var store = __webpack_require__("ba94");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "48a0":
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__("242e"),
    createBaseEach = __webpack_require__("950a");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "4933":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6691");

module.exports = global;


/***/ }),

/***/ "49f4":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "4b17":
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__("6428");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "4b1e":
/***/ (function(module, exports, __webpack_require__) {

var setToStringTag = __webpack_require__("88ff");

// Math[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


/***/ }),

/***/ "4d54":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("2524");
var IE8_DOM_DEFINE = __webpack_require__("c459");
var anObject = __webpack_require__("6ef8");
var toPrimitive = __webpack_require__("20eb");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4e9e":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("0332");
var global = __webpack_require__("6691");
var isObject = __webpack_require__("dd7b");
var createNonEnumerableProperty = __webpack_require__("0544");
var objectHas = __webpack_require__("3f5a");
var sharedKey = __webpack_require__("4fa7");
var hiddenKeys = __webpack_require__("612e");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "4fa7":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("4787");
var uid = __webpack_require__("8427");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "50d8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "51bf":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6691");
var createNonEnumerableProperty = __webpack_require__("0544");
var has = __webpack_require__("3f5a");
var setGlobal = __webpack_require__("a99d");
var inspectSource = __webpack_require__("2fe4");
var InternalStateModule = __webpack_require__("4e9e");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "51f5":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("2b03"),
    baseIteratee = __webpack_require__("badf"),
    toInteger = __webpack_require__("4b17");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "54eb":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    getSymbols = __webpack_require__("32f4");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "55a3":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "5665":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("8472");
var enumBugKeys = __webpack_require__("0828");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "57a5":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("91e9");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "585a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a09":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("434f");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "5b01":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    keys = __webpack_require__("ec69");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5ca0":
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__("badf"),
    isArrayLike = __webpack_require__("30c9"),
    keys = __webpack_require__("ec69");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ "5d89":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("f8af");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "5e2e":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("28c9"),
    listCacheDelete = __webpack_require__("69d5"),
    listCacheGet = __webpack_require__("b4c0"),
    listCacheHas = __webpack_require__("fba5"),
    listCacheSet = __webpack_require__("67ca");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "6044":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "612e":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "6428":
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__("b4b0");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "642a":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__("966f"),
    getMatchData = __webpack_require__("3bb4"),
    matchesStrictComparable = __webpack_require__("20ec");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "656b":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("e2e4"),
    toKey = __webpack_require__("f4d6");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "6691":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "6747":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "67ca":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "69d5":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6cf7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6691");
var isObject = __webpack_require__("dd7b");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6ef8":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dd7b");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "6f6c":
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "6fcd":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("50d8"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isBuffer = __webpack_require__("0d24"),
    isIndex = __webpack_require__("c098"),
    isTypedArray = __webpack_require__("73ac");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "7037":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a4d3");

__webpack_require__("e01a");

__webpack_require__("d28b");

__webpack_require__("e260");

__webpack_require__("d3b7");

__webpack_require__("3ca3");

__webpack_require__("ddb0");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "72af":
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__("99cd");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "73ac":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("743f"),
    baseUnary = __webpack_require__("b047"),
    nodeUtil = __webpack_require__("99d3");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "73ad":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("1301");
var toLength = __webpack_require__("c198");
var toAbsoluteIndex = __webpack_require__("3262");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "743f":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isLength = __webpack_require__("b218"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7530":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "76dd":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("ce86");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "7815":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("c378");
var classofRaw = __webpack_require__("434f");
var wellKnownSymbol = __webpack_require__("2d73");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7948":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "79bc":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "7a48":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7b83":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("7c64"),
    mapCacheDelete = __webpack_require__("93ed"),
    mapCacheGet = __webpack_require__("2478"),
    mapCacheHas = __webpack_require__("a524"),
    mapCacheSet = __webpack_require__("1fc8");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "7b97":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("7e64"),
    equalArrays = __webpack_require__("a2be"),
    equalByTag = __webpack_require__("1c3c"),
    equalObjects = __webpack_require__("b1e5"),
    getTag = __webpack_require__("42a2"),
    isArray = __webpack_require__("6747"),
    isBuffer = __webpack_require__("0d24"),
    isTypedArray = __webpack_require__("73ac");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "7c64":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("e24b"),
    ListCache = __webpack_require__("5e2e"),
    Map = __webpack_require__("79bc");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7d1f":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("087d"),
    isArray = __webpack_require__("6747");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7e64":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e"),
    stackClear = __webpack_require__("efb6"),
    stackDelete = __webpack_require__("2fcc"),
    stackGet = __webpack_require__("802a"),
    stackHas = __webpack_require__("55a3"),
    stackSet = __webpack_require__("d02c");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "7ed2":
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "802a":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "8057":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83a4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("e3b4");
var DESCRIPTORS = __webpack_require__("2524");
var global = __webpack_require__("6691");
var has = __webpack_require__("3f5a");
var isObject = __webpack_require__("dd7b");
var defineProperty = __webpack_require__("4d54").f;
var copyConstructorProperties = __webpack_require__("e09a");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "8427":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "8472":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("3f5a");
var toIndexedObject = __webpack_require__("1301");
var indexOf = __webpack_require__("73ad").indexOf;
var hiddenKeys = __webpack_require__("612e");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "8604":
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__("26e8"),
    hasPath = __webpack_require__("e2c0");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "863e":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("0fef");
var classof = __webpack_require__("434f");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "872a":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("3b4a");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "88ff":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("4d54").f;
var has = __webpack_require__("3f5a");
var wellKnownSymbol = __webpack_require__("2d73");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8d32":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6691");
var setToStringTag = __webpack_require__("88ff");

// JSON[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "8eeb":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("32b3"),
    baseAssignValue = __webpack_require__("872a");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "91e9":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "9380":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("2d7c"),
    baseFilter = __webpack_require__("9f74"),
    baseIteratee = __webpack_require__("badf"),
    isArray = __webpack_require__("6747");

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ "93ed":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "950a":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("30c9");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "9520":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObject = __webpack_require__("1a8c");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "9638":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "966f":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("7e64"),
    baseIsEqual = __webpack_require__("c05f");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "9934":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("6fcd"),
    baseKeysIn = __webpack_require__("41c3"),
    isArrayLike = __webpack_require__("30c9");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "99cd":
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "99d3":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("585a");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "9b02":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("656b");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9e69":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f4a":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("0fef");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9f74":
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__("48a0");

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ "a029":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("087d"),
    getPrototype = __webpack_require__("2dcb"),
    getSymbols = __webpack_require__("32f4"),
    stubArray = __webpack_require__("d327");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "a202":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a2be":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("d612"),
    arraySome = __webpack_require__("4284"),
    cacheHas = __webpack_require__("c584");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "a2db":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "a49e":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("6ef8");
var defineProperties = __webpack_require__("0c54");
var enumBugKeys = __webpack_require__("0828");
var hiddenKeys = __webpack_require__("612e");
var html = __webpack_require__("d887");
var documentCreateElement = __webpack_require__("6cf7");
var sharedKey = __webpack_require__("4fa7");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a524":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a94f":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "a994":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("7d1f"),
    getSymbols = __webpack_require__("32f4"),
    keys = __webpack_require__("ec69");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "a99d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6691");
var createNonEnumerableProperty = __webpack_require__("0544");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ac41":
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "af2b":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "af83":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flowy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a202");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flowy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flowy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flowy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b047":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "b0d2":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dd7b");
var isArray = __webpack_require__("5a09");
var wellKnownSymbol = __webpack_require__("2d73");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "b1e5":
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__("a994");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "b218":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "b4b0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c"),
    isSymbol = __webpack_require__("ffd6");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "b4c0":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "b5a7":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "ba94":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6691");
var setGlobal = __webpack_require__("a99d");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "badf":
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__("642a"),
    baseMatchesProperty = __webpack_require__("1838"),
    identity = __webpack_require__("cd9d"),
    isArray = __webpack_require__("6747"),
    property = __webpack_require__("f9ce");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "bb92":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "bbc0":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "bd01":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("31a5");
var getOwnPropertyNamesModule = __webpack_require__("5665");
var getOwnPropertySymbolsModule = __webpack_require__("d9f2");
var anObject = __webpack_require__("6ef8");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c05f":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__("7b97"),
    isObjectLike = __webpack_require__("1310");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "c098":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "c198":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c757");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "c2b6":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("f8af"),
    cloneDataView = __webpack_require__("5d89"),
    cloneRegExp = __webpack_require__("6f6c"),
    cloneSymbol = __webpack_require__("a2db"),
    cloneTypedArray = __webpack_require__("c8fe");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "c378":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("2d73");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "c3fc":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("42a2"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c459":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("2524");
var fails = __webpack_require__("0fef");
var createElement = __webpack_require__("6cf7");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "c584":
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "c587":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("8472");
var enumBugKeys = __webpack_require__("0828");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c757":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "c869":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "c87c":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8fe":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("f8af");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cb5a":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("9638");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cc45":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__("1a2d"),
    baseUnary = __webpack_require__("b047"),
    nodeUtil = __webpack_require__("99d3");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "cd9d":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "ce86":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    arrayMap = __webpack_require__("7948"),
    isArray = __webpack_require__("6747"),
    isSymbol = __webpack_require__("ffd6");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d02c":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e"),
    Map = __webpack_require__("79bc"),
    MapCache = __webpack_require__("7b83");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d085":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("1ad1");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "d0dc":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("c378");
var redefine = __webpack_require__("51bf");
var toString = __webpack_require__("3114");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d327":
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "d370":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("253c"),
    isObjectLike = __webpack_require__("1310");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d612":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("7b83"),
    setCacheAdd = __webpack_require__("7ed2"),
    setCacheHas = __webpack_require__("dc0f");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "d7ee":
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__("c3fc"),
    baseUnary = __webpack_require__("b047"),
    nodeUtil = __webpack_require__("99d3");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "d862":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "d887":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("31a5");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "d9f2":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "da03":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "dc0f":
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "dc57":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "dd7b":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e09a":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("3f5a");
var ownKeys = __webpack_require__("bf0b");
var getOwnPropertyDescriptorModule = __webpack_require__("07e5");
var definePropertyModule = __webpack_require__("4d54");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e24b":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("49f4"),
    hashDelete = __webpack_require__("1efc"),
    hashGet = __webpack_require__("bbc0"),
    hashHas = __webpack_require__("7a48"),
    hashSet = __webpack_require__("25241");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2c0":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("e2e4"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isIndex = __webpack_require__("c098"),
    isLength = __webpack_require__("b218"),
    toKey = __webpack_require__("f4d6");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "e2e4":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("6747"),
    isKey = __webpack_require__("f608"),
    stringToPath = __webpack_require__("18d8"),
    toString = __webpack_require__("76dd");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "e380":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("7b83");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "e3a2":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0c20");
var IndexedObject = __webpack_require__("863e");
var toObject = __webpack_require__("e3fb");
var toLength = __webpack_require__("c198");
var arraySpeciesCreate = __webpack_require__("b0d2");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "e3b4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6691");
var getOwnPropertyDescriptor = __webpack_require__("07e5").f;
var createNonEnumerableProperty = __webpack_require__("0544");
var redefine = __webpack_require__("51bf");
var setGlobal = __webpack_require__("a99d");
var copyConstructorProperties = __webpack_require__("e09a");
var isForced = __webpack_require__("9f4a");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "e3f8":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("656b");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "e3fb":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("a94f");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e5383":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("2b3e");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "eac5":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "ec69":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("6fcd"),
    baseKeys = __webpack_require__("03dd"),
    isArrayLike = __webpack_require__("30c9");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "ec8c":
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "edfa":
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "ef5d":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "efb6":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "f1a0":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("2d73");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "f4d6":
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__("ffd6");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f608":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("6747"),
    isSymbol = __webpack_require__("ffd6");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f8af":
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__("2474");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "f9ce":
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__("ef5d"),
    basePropertyDeep = __webpack_require__("e3f8"),
    isKey = __webpack_require__("f608"),
    toKey = __webpack_require__("f4d6");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "fa21":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("7530"),
    getPrototype = __webpack_require__("2dcb"),
    isPrototype = __webpack_require__("eac5");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ../shopify-draggable-vue/dist/lib/ShopifyDraggablePlugin.common.js
var ShopifyDraggablePlugin_common = __webpack_require__("1912");
var ShopifyDraggablePlugin_common_default = /*#__PURE__*/__webpack_require__.n(ShopifyDraggablePlugin_common);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fb8515d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Flowy.vue?vue&type=template&id=5d3b0e92&language=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flowy overflow-auto",class:{
    dragging: _vm.dragging
  }},[_c('div',{staticClass:"flowy-tree flex flex-row flex-no-wrap relative"},_vm._l((_vm.parentNodes),function(node){return _c('FlowyNode',_vm._g(_vm._b({key:node.id,attrs:{"node":node,"before-move":_vm.onBeforeMove,"is-dragging":_vm.dragging},on:{"drag-start":function($event){return _vm.onDragStart($event)},"drag-stop":function($event){return _vm.onDragStop($event)},"enter-drop":function($event){return _vm.onEnterDrop($event)}}},'FlowyNode',Object.assign({}, _vm.$props),false),Object.assign({}, _vm.$listeners)))}),1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Flowy.vue?vue&type=template&id=5d3b0e92&language=html&

// EXTERNAL MODULE: ./node_modules/lodash/find.js
var find = __webpack_require__("2769");

// EXTERNAL MODULE: ./node_modules/lodash/filter.js
var filter = __webpack_require__("9380");
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Flowy.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable no-unused-vars */


/* harmony default export */ var Flowyvue_type_script_lang_js_ = ({
  props: {
    nodes: {
      type: Array,
      required: false
    },
    beforeMove: {
      type: Function,
      default: function _default() {
        return true;
      }
    }
  },
  data: function data() {
    return {
      draggingNode: null
    };
  },
  computed: {
    parentNodes: function parentNodes() {
      return filter_default()(this.nodes, {
        parentId: -1
      });
    },
    rows: function rows() {
      return [this.parentNodes];
    },
    dragging: function dragging() {
      return this.draggingNode !== false && this.draggingNode !== null;
    }
  },
  mounted: function mounted() {},
  destroyed: function destroyed() {},
  methods: {
    setNotDragging: function setNotDragging() {
      var _this = this;

      setTimeout(function () {
        _this.draggingNode = null;
      }, 50);
    },
    onBeforeMove: function onBeforeMove(to) {
      return this.beforeMove({
        to: to,
        from: this.draggingNode
      });
    },
    onDrop: function onDrop(event) {
      this.setNotDragging();
    },
    onDragStart: function onDragStart(event) {
      this.draggingNode = event.node;
      this.$emit('drag-start', event);
    },
    onDragStop: function onDragStop(event) {
      this.setNotDragging();
      this.$emit('drag-stop', event);
    },
    onEnterDrop: function onEnterDrop(event) {
      this.$emit('enter-drop', {
        to: event.to,
        from: this.draggingNode
      });
    },
    getChildren: function getChildren(parentId) {
      return filter_default()(this.nodes, {
        parentId: parentId
      });
    },
    onDragEnd: function onDragEnd(_event) {}
  }
});
// CONCATENATED MODULE: ./src/components/Flowy.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Flowyvue_type_script_lang_js_ = (Flowyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Flowy.vue?vue&type=style&index=0&lang=scss&
var Flowyvue_type_style_index_0_lang_scss_ = __webpack_require__("af83");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Flowy.vue






/* normalize component */

var component = normalizeComponent(
  components_Flowyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Flowy = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fb8515d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowyNode.vue?vue&type=template&id=65d6681e&lang=html&
var FlowyNodevue_type_template_id_65d6681e_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flowy-node flex flex-col flex-no-wrap items-center relative overflow-visible"},[_c('draggable',{staticClass:"flowy-draggable",attrs:{"with-handle":false,"draggable-mirror":{ xAxis: false, appendTo: 'body' },"group":"flowy","data":{ draggingNode: _vm.node }},on:{"stop":function($event){return _vm.onStop(_vm.node, $event)},"start":function($event){return _vm.onStart(_vm.node, $event)}}},[_c('flowy-block',_vm._b({staticClass:"draggable",attrs:{"data":_vm.node,"remove":_vm.removeNode}},'flowy-block',Object.assign({}, _vm.$props, _vm.passedProps),false),[_c('div',{ref:"block",staticStyle:{"position":"absolute","width":"100%","height":"100%"}}),(!_vm.isTopParent && _vm.mounted)?_c('div',{staticClass:"arrowblock -mt-64px overflow-visible",style:(_vm.arrowBlockStyle)},[_c('svg',{staticClass:"flowy-line",attrs:{"preserveaspectratio":"none","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":_vm.linePath,"stroke":"#C5CCD0","stroke-width":"2px"}})])]):_vm._e(),(_vm.hasChildren && _vm.mounted)?_c('div',{staticClass:"arrowblock-down overflow-visible",style:(_vm.arrowBlockStyle)},[_c('svg',{staticClass:"flowy-line",attrs:{"preserveaspectratio":"none","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":_vm.linePathDown,"stroke":"#C5CCD0","stroke-width":"2px"}})])]):_vm._e(),_c('transition',{attrs:{"name":"scale"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showIndicator),expression:"showIndicator"}],staticClass:"indicator",class:{
              'not-allowed': !this.dropAllowed
              }})]),_c('dropzone',{staticClass:"node-dropzone",attrs:{"data":{ dropzoneNode: _vm.node },"group":"first_group"},on:{"enter":function($event){return _vm.onEnterDrag({ to: _vm.node })},"leave":function($event){return _vm.onLeaveDrag($event)},"drop":function($event){return _vm.onDrop($event)},"receive":function($event){return _vm.onDragReceive(Object.assign({}, $event, {to: _vm.node}))}},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticClass:"node-dropzone",class:scope},[_c('div',{})])]}}])})],1)],1),_c('div',{staticClass:"flowy-tree flex flex-row flex-no-wrap overflow-visible mt-64px"},[_vm._l((_vm.children),function(child,index){return [_c('flowy-node',_vm._g(_vm._b({key:child.id,ref:child.id,refInFor:true,attrs:{"index":index,"total-children":_vm.children.length,"node":child,"parent-x":_vm.xPos}},'flowy-node',Object.assign({}, _vm.$props),false),Object.assign({}, _vm.$listeners)))]})],2)],1)}
var FlowyNodevue_type_template_id_65d6681e_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FlowyNode.vue?vue&type=template&id=65d6681e&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/lodash/isNil.js
var isNil = __webpack_require__("2768");

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__("9b02");
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__("0644");
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowyNode.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable no-unused-vars */






function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + rect.width / 2 + window.scrollX
  };
}

/* harmony default export */ var FlowyNodevue_type_script_lang_js_ = ({
  props: {
    index: {
      type: Number,
      required: false
    },
    totalChildren: {
      type: Number,
      required: false
    },
    node: {
      type: Object,
      required: true
    },
    nodes: {
      type: Array,
      required: true
    },
    parentX: {
      type: Number,
      required: false
    },
    beforeMove: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    isDragging: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      hoveringWithDrag: false,
      mounted: false,
      // we need to be mounted before $refs is popuplated
      xPosProxy: 0,
      dropAllowed: true
    };
  },
  mounted: function mounted() {
    this.mounted = true;
  },
  destroyed: function destroyed() {},
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
      if (_this.$refs.block === undefined) return;
      var xPos = getOffset(_this.$refs.block).left; // for some reason there's a bug where we end up with 0
      // even though the dom should be rendered at this point?

      if (xPos !== 0) {
        _this.xPosProxy = getOffset(_this.$refs.block).left;
      }
    });
  },
  computed: {
    xPos: function xPos() {
      if (!this.mounted) return 0;
      return this.xPosProxy;
    },
    hasChildren: function hasChildren() {
      return this.children.length > 0;
    },
    showIndicator: function showIndicator() {
      return this.hoveringWithDrag;
    },
    arrowBlockStyle: function arrowBlockStyle() {
      return {
        marginLeft: "".concat(this.blockWidth / 2, "px")
      };
    },
    lineTotalHeight: function lineTotalHeight() {
      // todo
      return 64;
    },
    isOddChildren: function isOddChildren() {
      return Math.abs(this.totalChildren % 2) === 1;
    },
    isMiddle: function isMiddle() {
      return this.isOddChildren && this.index + 1 === Math.ceil(this.totalChildren / 2);
    },
    isLeftSide: function isLeftSide() {
      // if block as at the left side in the row of nodes
      return this.index + 1 <= Math.ceil(this.totalChildren / 2);
    },
    lineStartX: function lineStartX() {
      return this.blockWidth / 2;
    },
    blockWidth: function blockWidth() {
      return this.$refs.block.offsetWidth;
    },
    holderWidth: function holderWidth() {
      // includes margin
      return this.$refs.block.parentElement.offsetWidth;
    },
    rowWidth: function rowWidth() {
      return this.$refs.block.parentElement.parentElement.offsetWidth;
    },
    isTopParent: function isTopParent() {
      return this.node.parentId === -1;
    },
    children: function children() {
      return filter_default()(this.nodes, {
        parentId: this.node.id
      });
    },
    passedProps: function passedProps() {
      return this.node.props;
    },
    linePathDown: function linePathDown() {
      return "M0 0L0 ".concat(this.lineTotalHeight / 2, "L0 ").concat(this.lineTotalHeight / 2, "L0 ").concat(this.lineTotalHeight / 2);
    },
    linePath: function linePath() {
      var height = this.lineTotalHeight / 2;
      var width = this.lengthFromMiddle;
      var modifier = this.isLeftSide ? '' : '-'; // if (this.isMiddle) {
      //   return `M0 0L0 ${this.lineTotalHeight / 2}
      //  ${this.lineTotalHeight / 2} ${this.lineTotalHeight / 2}`;
      // }

      return "M".concat(modifier).concat(width, " ").concat(height, "L").concat(modifier).concat(width, " ").concat(height, "L0 ").concat(height, "L0 ").concat(this.lineTotalHeight);
    },
    lengthFromMiddle: function lengthFromMiddle() {
      return Math.abs(this.xPos - this.parentX); // const addHalf = this.isOddChildren ? 0 : 0.5;
      // const subtractRight = !this.isLeftSide && !this.isOddChildren ? -1 : 0;
      // return Math.abs(Math.ceil((this.totalChildren / 2)) - (this.index + 1))
      //   + addHalf + subtractRight;
    }
  },
  methods: {
    removeNode: function removeNode() {
      this.$emit('remove', {
        node: this.node
      });
    },
    draggingNodeFromEvent: function draggingNodeFromEvent(event) {
      return get_default()(event, 'oldComponent.$attrs.data.draggingNode', false);
    },
    dropzoneNodeFromEvent: function dropzoneNodeFromEvent(event) {
      return get_default()(event, 'newComponent.$attrs.data.dropzoneNode', false);
    },
    blockFromNewNodeEvent: function blockFromNewNodeEvent(event) {
      var data = get_default()(event, 'oldComponent.$attrs.data', false);
      return {
        nodeComponent: data.componentName,
        data: cloneDeep_default()(data.props)
      };
    },
    onStop: function onStop(node, _event) {
      this.$emit('drag-stop');
      this.hoveringWithDrag = false;
    },
    onStart: function onStart(node) {
      this.$emit('drag-start', {
        node: node
      });
    },
    onDrop: function onDrop(_event) {
      this.$emit('drag-stop');
      this.hoveringWithDrag = false;
    },
    newNode: function newNode(_newNode, parentNode) {
      this.$emit('add', {
        node: _objectSpread2({
          parentId: parentNode.id
        }, _newNode)
      });
    },
    moveNode: function moveNode(from, to) {
      this.$emit('move', {
        dragged: from,
        to: to
      });
    },
    onDragReceive: function onDragReceive(_event) {
      this.hoveringWithDrag = false;
      var draggingNode = this.draggingNodeFromEvent(_event);
      var toNode = _event.to; // const dropzoneNode = this.dropzoneNodeFromEvent(_event);

      if (draggingNode === false) {
        // not dragging from existing node (so dragged from new node list)
        var newNode = this.blockFromNewNodeEvent(_event);
        this.newNode(newNode, this.node);
      } else {
        // dragged from existing node
        var dropAllowed = this.beforeMove(toNode);

        if (dropAllowed) {
          this.moveNode(draggingNode, toNode);
        }
      }

      this.dropAllowed = true;
    },
    onEnterDrag: function onEnterDrag(_event) {
      this.hoveringWithDrag = true;
      this.dropAllowed = this.beforeMove(_event.to); // this.$emit('enter-drop', {
      //   to: _event.to,
      // });
    },
    onLeaveDrag: function onLeaveDrag(_event) {
      this.hoveringWithDrag = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/FlowyNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FlowyNodevue_type_script_lang_js_ = (FlowyNodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FlowyNode.vue





/* normalize component */

var FlowyNode_component = normalizeComponent(
  components_FlowyNodevue_type_script_lang_js_,
  FlowyNodevue_type_template_id_65d6681e_lang_html_render,
  FlowyNodevue_type_template_id_65d6681e_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FlowyNode = (FlowyNode_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fb8515d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowyBlock.vue?vue&type=template&id=693af488&lang=html&
var FlowyBlockvue_type_template_id_693af488_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flowy-block mr-24px relative"},[_vm._t("default"),_c(_vm.component,_vm._b({ref:"block",tag:"component"},'component',Object.assign({}, _vm.$props, _vm.$attrs, _vm.passedProps),false))],2)}
var FlowyBlockvue_type_template_id_693af488_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FlowyBlock.vue?vue&type=template&id=693af488&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowyBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable no-unused-vars */
/* harmony default export */ var FlowyBlockvue_type_script_lang_js_ = ({
  props: {
    node: {
      type: Object,
      required: true
    },
    remove: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  destroyed: function destroyed() {},
  computed: {
    component: function component() {
      return this.node.nodeComponent; // return find(this.blocks, { name: this.node.block }).name;
    },
    passedProps: function passedProps() {
      return this.node.data;
    }
  },
  methods: {
    onDragEnd: function onDragEnd(_event) {},
    onDragStart: function onDragStart(_event) {}
  },
  render: function render(c) {
    var item = this.$scopedSlots.default()[0];
    return item;
  }
});
// CONCATENATED MODULE: ./src/components/FlowyBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FlowyBlockvue_type_script_lang_js_ = (FlowyBlockvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FlowyBlock.vue





/* normalize component */

var FlowyBlock_component = normalizeComponent(
  components_FlowyBlockvue_type_script_lang_js_,
  FlowyBlockvue_type_template_id_693af488_lang_html_render,
  FlowyBlockvue_type_template_id_693af488_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FlowyBlock = (FlowyBlock_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fb8515d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowyNewBlock.vue?vue&type=template&id=007f21f4&lang=html&
var FlowyNewBlockvue_type_template_id_007f21f4_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flowy-block mr-24px relative"},[_c('draggable',{attrs:{"with-handle":false,"draggable-mirror":{ xAxis: false, appendTo: 'body' },"group":"flowy","data":Object.assign({}, {type: 'new'}, _vm.nodeData)}},[_vm._t("preview")],2)],1)}
var FlowyNewBlockvue_type_template_id_007f21f4_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FlowyNewBlock.vue?vue&type=template&id=007f21f4&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowyNewBlock.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable no-unused-vars */
/* harmony default export */ var FlowyNewBlockvue_type_script_lang_js_ = ({
  props: {},
  data: function data() {
    return {
      node: {
        componentName: '',
        props: {}
      }
    };
  },
  mounted: function mounted() {
    var node = this.$scopedSlots.node()[0];
    this.node.componentName = node.componentOptions.tag;
    this.node.props = _objectSpread2(_objectSpread2({}, node.componentOptions.propsData), node.data.attrs);
  },
  destroyed: function destroyed() {},
  computed: {
    nodeData: function nodeData() {
      return this.node;
    }
  },
  methods: {
    remove: function remove() {}
  }
});
// CONCATENATED MODULE: ./src/components/FlowyNewBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FlowyNewBlockvue_type_script_lang_js_ = (FlowyNewBlockvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FlowyNewBlock.vue





/* normalize component */

var FlowyNewBlock_component = normalizeComponent(
  components_FlowyNewBlockvue_type_script_lang_js_,
  FlowyNewBlockvue_type_template_id_007f21f4_lang_html_render,
  FlowyNewBlockvue_type_template_id_007f21f4_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FlowyNewBlock = (FlowyNewBlock_component.exports);
// CONCATENATED MODULE: ./src/index.js





var VuePlugin = {};

VuePlugin.install = function install(_Vue) {
  var Vue = _Vue;
  Vue.use(ShopifyDraggablePlugin_common_default.a, {});
  Vue.component('Flowy', Flowy);
  Vue.component('FlowyNode', FlowyNode);
  Vue.component('FlowyBlock', FlowyBlock);
  Vue.component('FlowyNewBlock', FlowyNewBlock);
};

/* harmony default export */ var src_0 = (VuePlugin);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fba5":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "ffd6":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ })

/******/ });
});
//# sourceMappingURL=VueFlowyPlugin.umd.js.map