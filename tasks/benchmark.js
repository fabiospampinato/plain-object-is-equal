
/* IMPORT */

import benchmark from 'benchloop';
import isEqual from '../dist/index.js';
import Tests from '../test/tests.js';

const Test = Tests[Tests.length -1];

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100000,
  log: 'compact'
});

benchmark ({
  name: 'samples',
  fn: () => {
    isEqual ( true, true );
    isEqual ( 'foo', 'bar' );
    isEqual ( 'foo', { foo: 1 } );
    isEqual ( { foo: { bar: 1 } }, { foo: {} } );
    isEqual ( { foo: { bar: { baz: [1, 2, 3] } } }, { foo: { bar: { baz: [1, 2, 3] } } } );
  }
});

benchmark ({
  name: 'big',
  fn: () => {
    isEqual ( Test.x, Test.y );
  }
});

benchmark ({
  name: 'suite',
  fn: () => {
    Tests.forEach ( ({ x, y }) => {
      isEqual ( x, y );
    });
  }
});

benchmark.summary ();
