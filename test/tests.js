
/* MAIN */

//URL: https://github.com/epoberezkin/fast-deep-equal/blob/master/spec/tests.js

const Tests = [
  {
    title: 'equal numbers',
    x: 1,
    y: 1,
    result: true
  },
  {
    title: 'not equal numbers',
    x: 1,
    y: 2,
    result: false
  },
  {
    title: 'number and array are not equal',
    x: 1,
    y: [],
    result: false
  },
  {
    title: '0 and null are not equal',
    x: 0,
    y: null,
    result: false
  },
  {
    title: 'equal strings',
    x: 'a',
    y: 'a',
    result: true
  },
  {
    title: 'not equal strings',
    x: 'a',
    y: 'b',
    result: false
  },
  {
    title: 'empty string and null are not equal',
    x: '',
    y: null,
    result: false
  },
  {
    title: 'null is equal to null',
    x: null,
    y: null,
    result: true
  },
  {
    title: 'equal booleans (true)',
    x: true,
    y: true,
    result: true
  },
  {
    title: 'equal booleans (false)',
    x: false,
    y: false,
    result: true
  },
  {
    title: 'not equal booleans',
    x: true,
    y: false,
    result: false
  },
  {
    title: '1 and true are not equal',
    x: 1,
    y: true,
    result: false
  },
  {
    title: '0 and false are not equal',
    x: 0,
    y: false,
    result: false
  },
  {
    title: 'NaN and NaN are equal',
    x: NaN,
    y: NaN,
    result: true
  },
  {
    title: '0 and -0 are equal',
    x: 0,
    y: -0,
    result: true
  },
  {
    title: 'Infinity and Infinity are equal',
    x: Infinity,
    y: Infinity,
    result: true
  },
  {
    title: 'Infinity and -Infinity are not equal',
    x: Infinity,
    y: -Infinity,
    result: false
  },
  {
    title: 'empty objects are equal',
    x: {},
    y: {},
    result: true
  },
  {
    title: 'equal objects (same properties "order")',
    x: {a: 1, b: '2'},
    y: {a: 1, b: '2'},
    result: true
  },
  {
    title: 'equal objects (different properties "order")',
    x: {a: 1, b: '2'},
    y: {b: '2', a: 1},
    result: true
  },
  {
    title: 'not equal objects (extra property)',
    x: {a: 1, b: '2'},
    y: {a: 1, b: '2', c: []},
    result: false
  },
  {
    title: 'not equal objects (different property values)',
    x: {a: 1, b: '2', c: 3},
    y: {a: 1, b: '2', c: 4},
    result: false
  },
  {
    title: 'not equal objects (different properties)',
    x: {a: 1, b: '2', c: 3},
    y: {a: 1, b: '2', d: 3},
    result: false
  },
  {
    title: 'equal objects (same sub-properties)',
    x: { a: [ { b: 'c' } ] },
    y: { a: [ { b: 'c' } ] },
    result: true
  },
  {
    title: 'not equal objects (different sub-property value)',
    x: { a: [ { b: 'c' } ] },
    y: { a: [ { b: 'd' } ] },
    result: false
  },
  {
    title: 'not equal objects (different sub-property)',
    x: { a: [ { b: 'c' } ] },
    y: { a: [ { c: 'c' } ] },
    result: false
  },
  {
    title: 'empty array and empty object are not equal',
    x: {},
    y: [],
    result: false
  },
  {
    title: 'object with extra undefined properties are not equal #1',
    x: {},
    y: {foo: undefined},
    result: false
  },
  {
    title: 'object with extra undefined properties are not equal #2',
    x: {foo: undefined},
    y: {},
    result: false
  },
  {
    title: 'object with extra undefined properties are not equal #3',
    x: {foo: undefined},
    y: {bar: undefined},
    result: false
  },
  {
    title: 'nulls are equal',
    x: null,
    y: null,
    result: true
  },
  {
    title: 'null and undefined are not equal',
    x: null,
    y: undefined,
    result: false
  },
  {
    title: 'null and empty object are not equal',
    x: null,
    y: {},
    result: false
  },
  {
    title: 'undefined and empty object are not equal',
    x: undefined,
    y: {},
    result: false
  },
  {
    title: 'two empty arrays are equal',
    x: [],
    y: [],
    result: true
  },
  {
    title: 'equal arrays',
    x: [1, 2, 3],
    y: [1, 2, 3],
    result: true
  },
  {
    title: 'not equal arrays (different item)',
    x: [1, 2, 3],
    y: [1, 2, 4],
    result: false
  },
  {
    title: 'not equal arrays (different length)',
    x: [1, 2, 3],
    y: [1, 2],
    result: false
  },
  {
    title: 'equal arrays of objects',
    x: [{a: 'a'}, {b: 'b'}],
    y: [{a: 'a'}, {b: 'b'}],
    result: true
  },
  {
    title: 'not equal arrays of objects',
    x: [{a: 'a'}, {b: 'b'}],
    y: [{a: 'a'}, {b: 'c'}],
    result: false
  },
  {
    title: 'pseudo array and equivalent array are not equal',
    x: {'0': 0, '1': 1, length: 2},
    y: [0, 1],
    result: false
  },
  {
    title: 'big object',
    x: {
      prop1: 'value1',
      prop2: 'value2',
      prop3: 'value3',
      prop4: {
        subProp1: 'sub value1',
        subProp2: {
          subSubProp1: 'sub sub value1',
          subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        }
      },
      prop5: 1000
    },
    y: {
      prop5: 1000,
      prop3: 'value3',
      prop1: 'value1',
      prop2: 'value2',
      prop4: {
        subProp2: {
          subSubProp1: 'sub sub value1',
          subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        },
        subProp1: 'sub value1'
      }
    },
    result: true
  }
];

/* EXPORT */

export default Tests;
