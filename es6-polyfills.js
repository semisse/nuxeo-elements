/**
@license
(C) Copyright Nuxeo Corp. (http://nuxeo.com/)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
      'use strict';
      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];

      for (var i = 0; i !== length; i++) {
        if (predicate.call(thisArg, this[i], i, list)) {
          return this[i];
        }
      }
      return undefined;
    }
  });
}

if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      var len = o.length >>> 0;

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      var thisArg = arguments[1];

      var k = 0;

      while (k < len) {
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        k++;
      }

      return -1;
    }
  });
}

if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    // eslint-disable-next-line no-unused-vars
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

String.prototype.startsWith = String.prototype.startsWith || function(searchString, position){
  position = position || 0;
  return this.substr(position, searchString.length) === searchString;
};

String.prototype.endsWith = String.prototype.endsWith || function(searchString, position) {
  var subjectString = this.toString();
  if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position ||
      position > subjectString.length) {
    position = subjectString.length;
  }
  position -= searchString.length;
  var lastIndex = subjectString.lastIndexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

Array.from = Array.from || (function () {
  var toStr = Object.prototype.toString;
  var isCallable = function (fn) {
    return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
  };
  var toInteger = function (value) {
    var number = Number(value);
    if (isNaN(number)) { return 0; }
    if (number === 0 || !isFinite(number)) { return number; }
    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
  };
  var maxSafeInteger = Math.pow(2, 53) - 1;
  var toLength = function (value) {
    var len = toInteger(value);
    return Math.min(Math.max(len, 0), maxSafeInteger);
  };

  // The length property of the from method is 1.
  return function from(arrayLike/*, mapFn, thisArg */) {
    // 1. Let C be the this value.
    var C = this;

    // 2. Let items be ToObject(arrayLike).
    var items = Object(arrayLike);

    // 3. ReturnIfAbrupt(items).
    if (arrayLike == null) {
      throw new TypeError("Array.from requires an array-like object - not null or undefined");
    }

    // 4. If mapfn is undefined, then let mapping be false.
    var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
    var T;
    if (typeof mapFn !== 'undefined') {
      // 5. else
      // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
      if (!isCallable(mapFn)) {
        throw new TypeError('Array.from: when provided, the second argument must be a function');
      }

      // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
      if (arguments.length > 2) {
        T = arguments[2];
      }
    }

    // 10. Let lenValue be Get(items, "length").
    // 11. Let len be ToLength(lenValue).
    var len = toLength(items.length);

    // 13. If IsConstructor(C) is true, then
    // 13. a. Let A be the result of calling the [[Construct]] internal method
    // of C with an argument list containing the single item len.
    // 14. a. Else, Let A be ArrayCreate(len).
    var A = isCallable(C) ? Object(new C(len)) : new Array(len);

    // 16. Let k be 0.
    var k = 0;
    // 17. Repeat, while k < len… (also steps a - h)
    var kValue;
    while (k < len) {
      kValue = items[k];
      if (mapFn) {
        A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
      } else {
        A[k] = kValue;
      }
      k += 1;
    }
    // 18. Let putStatus be Put(A, "length", len, true).
    A.length = len;
    // 20. Return A.
    return A;
  };
}());

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    if (!document.documentElement.contains(el)) {
      return null;
    }
    do {
      if (el.matches(s)) {
        return el;
      }
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
